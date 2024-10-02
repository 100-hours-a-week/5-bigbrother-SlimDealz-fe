import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import {
  Container,
  ImageContainer,
  InfoContainer,
  PriceContainer,
  PriceText,
  SmallText,
  BookmarkCountWrapper
} from './styles';
import { getNumberWithComma } from '@/components/utils/conversion';
import Bookmark from '@mui/icons-material/Bookmark';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import api from '@/axiosInstance';
import LoginRequiredModal from '@/components/modal/logInModal';
import { getCookie } from '@/components/utils/cookieUtils';

type Props = {
  id: number;
  image: string;
  productName: string;
  price: number;
  shipping: string;
};

const CategoryList = ({ id, image, productName, price, shipping }: Props) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticateAndCheckBookmark = async () => {
      const jwtToken = getCookie('jwtToken');
      if (!jwtToken) {
        return;
      }

      try {
        const bookmarkResponse = await api.get(`/v1/users/bookmarks/search`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          },
          params: { productName: productName }
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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBookmarkClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    const jwtToken = getCookie('jwtToken');
    if (!jwtToken) {
      setIsModalOpen(true);
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
            productName: productName
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

  const handleProductClick = (productName: string, id: number) => {
    if (!isModalOpen) {
      navigate(`/product/${productName}/${id}`);
    }
  };

  return (
    <Container onClick={() => handleProductClick(productName, id)}>
      <ImageContainer>
        <img
          src={image}
          alt={productName}
          style={{ width: '100%', height: '100%', borderRadius: '10px' }}
        />
      </ImageContainer>
      <InfoContainer>
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
          {productName}
        </div>
        <PriceContainer>
          <PriceText>{getNumberWithComma(price)}원</PriceText>
        </PriceContainer>
        <SmallText>{'배송비 : ' + shipping}</SmallText>

        <BookmarkCountWrapper>
          <IconButton
            onClick={handleBookmarkClick}
            style={{ paddingLeft: '10px' }}
          >
            {bookmarked ? <Bookmark /> : <BookmarkBorder />}
          </IconButton>
        </BookmarkCountWrapper>
      </InfoContainer>
      <LoginRequiredModal
        open={isModalOpen}
        onClose={closeModal}
        onLogin={() => {
          closeModal();
          window.location.href = '/signIn';
        }}
      />
    </Container>
  );
};

export default CategoryList;
