import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import Bookmark from '@mui/icons-material/Bookmark';
import api from '@/axiosInstance';
import { getCookie } from '@/components/utils/cookieUtils';
import LoginRequiredModal from '@/components/modal/logInModal';

interface ProductBookmarkProps {
  productName: string;
}

const ProductBookmark: React.FC<ProductBookmarkProps> = ({ productName }) => {
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const authenticateAndCheckBookmark = async () => {
      const jwtToken = getCookie('jwtToken');
      if (!jwtToken) {
        return;
      }

      try {
        const bookmarkResponse = await api.get(`/v1/users/bookmarks/search`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
          params: { productName }
        });

        setBookmarked(bookmarkResponse.data);
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          setBookmarked(false);
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
    const jwtToken = getCookie('jwtToken');
    if (!jwtToken) {
      setIsModalOpen(true);
      return;
    }

    try {
      if (bookmarked) {
        await api.delete(`/v1/users/bookmarks`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
          params: { productName }
        });
        setBookmarked(false);
        alert('북마크가 삭제되었습니다.');
      } else {
        await api.post(
          `/v1/users/bookmarks`,
          { productName },
          { headers: { Authorization: `Bearer ${jwtToken}` } }
        );
        setBookmarked(true);
        alert('북마크가 추가되었습니다.');
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        setIsModalOpen(true); // 401 에러 처리
      } else {
        console.error('Error handling bookmark:', error.message || error);
        alert('오류가 발생했습니다.');
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleBookmarkClick}>
        {bookmarked ? <Bookmark /> : <BookmarkBorder />}
      </IconButton>
      <LoginRequiredModal
        open={isModalOpen}
        onClose={closeModal}
        onLogin={() => {
          closeModal();
          window.location.href = '/signIn';
        }}
      />
    </>
  );
};

export default ProductBookmark;
