import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import Bookmark from '@mui/icons-material/Bookmark';
import axios from 'axios';

interface ProductBookmarkProps {
  productName: number;
}

const ProductBookmark: React.FC<ProductBookmarkProps> = ({ productName }) => {
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchBookmarkStatus = async () => {
      try {
        const response = await axios.get(
          `/api/v1/users/${userId}/bookmarks/${productName}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            }
          }
        );
        setBookmarked(response.data.bookmarked);
      } catch (error) {
        console.error('Error fetching bookmark status:', error);
      }
    };

    if (userId) {
      fetchBookmarkStatus();
    }
  }, [productName, userId]);

  const handleBookmarkClick = async () => {
    try {
      if (bookmarked) {
        await axios.delete(`/api/v1/users/${userId}/bookmarks/${productName}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
        setBookmarked(false);
        alert('북마크가 삭제되었습니다.');
      } else {
        await axios.post(
          `/api/v1/users/${userId}/bookmarks`,
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
