import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import Bookmark from '@mui/icons-material/Bookmark';
import api from '@/axiosInstance';
import { getCookie } from '@/components/utils/cookieUtils';

interface ProductBookmarkProps {
  productName: string;
}

const ProductBookmark: React.FC<ProductBookmarkProps> = ({ productName }) => {
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  useEffect(() => {
    const authenticateAndCheckBookmark = async () => {
      const jwtToken = getCookie('jwtToken'); // 쿠키에서 JWT 토큰 가져오기
      if (!jwtToken) {
        return;
      }

      try {
        // 북마크 상태 확인
        const bookmarkResponse = await api.get(`/v1/users/bookmarks/search`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          },
          params: { productName: productName }
        });

        // 응답의 데이터가 true/false에 따라 상태 변경
        setBookmarked(bookmarkResponse.data);
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

  const handleBookmarkClick = async () => {
    const jwtToken = getCookie('jwtToken'); // 쿠키에서 JWT 토큰 가져오기
    if (!jwtToken) {
      return;
    }
    try {
      if (bookmarked) {
        await api.delete(`/v1/users/bookmarks`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          },
          params: { productName: productName }
        });
        setBookmarked(false);
        alert('북마크가 삭제되었습니다.');
      } else {
        await api.post(
          `/v1/users/bookmarks`,
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
