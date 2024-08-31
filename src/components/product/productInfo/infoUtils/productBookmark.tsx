import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import Bookmark from '@mui/icons-material/Bookmark';
import api from '@/axiosInstance';

interface ProductBookmarkProps {
  productName: string;
}

const ProductBookmark: React.FC<ProductBookmarkProps> = ({ productName }) => {
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const encodedPN = encodeURIComponent(productName);

  useEffect(() => {
    const authenticateAndCheckBookmark = async () => {
      const jwtToken = localStorage.getItem('jwtToken');
      if (!jwtToken) {
        // alert('JWT 토큰이 없습니다.');
        return;
      }
      const kakao_Id = extractKakaoIdFromToken(jwtToken);

      if (!kakao_Id) {
        alert('Kakao_ID를 찾을 수 없습니다.');
        return;
      }
      try {
        // 북마크 상태 확인
        const bookmarkResponse = await api.get(
          `/v1/users/kakao/${encodeURIComponent(kakao_Id)}/bookmarks/search`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            },
            params: { productName: productName }
          }
        );
        if (bookmarkResponse.status === 200) {
          setBookmarked(true);
        } else {
          setBookmarked(false);
        }
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          setBookmarked(false); // 북마크가 없으면 false로 설정
        } else {
          console.error(
            'Error checking bookmark status:',
            error.message || error
          );
        }
      }
    };
    authenticateAndCheckBookmark();
  }, [productName]);

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
    } catch (error: any) {
      console.error('JWT token parsing error:', error.message || error);
      return null;
    }
  };

  const handleBookmarkClick = async () => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
      alert('로그인이 필요합니다.');
      return;
    }
    const kakao_Id = extractKakaoIdFromToken(jwtToken);

    if (!kakao_Id) {
      alert('Kakao_ID를 찾을 수 없습니다.');
      return;
    }
    try {
      if (bookmarked) {
        await api.delete(
          `/v1/users/kakao/${encodeURIComponent(kakao_Id)}/bookmarks`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            },
            params: { productName: productName }
          }
        );
        setBookmarked(false);
        alert('북마크가 삭제되었습니다.');
      } else {
        await api.post(
          `/v1/users/kakao/${encodeURIComponent(kakao_Id)}/bookmarks`,
          {
            productName
          },
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            }
          }
        );
        setBookmarked(true);
        alert('북마크가 추가되었습니다.');
      }
    } catch (error: any) {
      console.error('Error handling bookmark:', error.message || error);
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
