import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import Bookmark from '@mui/icons-material/Bookmark';
import axios from 'axios';

interface ProductBookmarkProps {
  productName: string;
}

const ProductBookmark: React.FC<ProductBookmarkProps> = ({ productName }) => {
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const serverUri = import.meta.env.VITE_SERVER_URI;
  const encodedProductName = encodeURIComponent(productName);  // 인코딩


  useEffect(() => {
    const authenticateAndFetchUserId = async () => {
      const jwtToken = localStorage.getItem('jwtToken');
      if (!jwtToken) {
        alert('JWT 토큰이 없습니다.');
        return;
      }

      const kakao_Id = extractKakaoIdFromToken(jwtToken);
      if (!kakao_Id) {
        alert('Kakao_ID를 찾을 수 없습니다.');
        return;
      }

      try {
        // `kakao_Id`로 `userId` 가져오기
        const userIdResponse = await axios.get(
          `${serverUri}/api/v1/users/kakao/${kakao_Id}/id`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            }
          }
        );

        if (userIdResponse.status === 200) {
          const fetchedUserId = userIdResponse.data;
          setUserId(fetchedUserId);
          localStorage.setItem('userId', fetchedUserId);

          const bookmarkResponse = await axios.get(
            `${serverUri}/api/v1/users/${fetchedUserId}/bookmarks`,
            {
              headers: {
                Authorization: `Bearer ${jwtToken}`
              }
            }
          );

          if (bookmarkResponse.status === 200) {
            setBookmarked(bookmarkResponse.data.bookmarked);
          }
        } else {
          throw new Error('User ID를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('Error fetching user ID or bookmark status:', error);
      }
    };

    authenticateAndFetchUserId();
  }, [encodedProductName, serverUri]);

  const extractKakaoIdFromToken = (token: string): string | null => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );

      const parsedToken = JSON.parse(jsonPayload);
      return parsedToken.kakao_Id || null;
    } catch (error) {
      console.error('JWT token parsing error:', error);
      return null;
    }
  };

  const handleBookmarkClick = async () => {
    try {
      if (!userId) {
        alert('로그인이 필요합니다.');
        return;
      }

      if (bookmarked) {
        await axios.delete(
          `${serverUri}/api/v1/users/${userId}/bookmarks/${encodedProductName}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            }
          }
        );
        setBookmarked(false);
        alert('북마크가 삭제되었습니다.');
      } else {
        await axios.post(
          `${serverUri}/api/v1/users/${userId}/bookmarks/${encodedProductName}`,
          {
            productName
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            }
          }
        );
        setBookmarked(true);
        alert('북마크가 추가되었습니다.');
      }
    } catch (error) {
      console.error('Error handling bookmark:', error);
      alert('오류가 발생했습니다.');
    }
  };

  return (
    <IconButton onClick={handleBookmarkClick}>
      {bookmarked ? <Bookmark /> : <BookmarkBorder />}
    </IconButton>
  );
};

export default ProductBookmark;
