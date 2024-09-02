import React, { useState, useEffect } from 'react';
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

type Props = {
  id: number;
  image: string;
  name: string;
  price: number;
  shipping: string;
};

const CategoryList = ({ id, image, name, price, shipping }: Props) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const authenticateAndCheckBookmark = async () => {
      const jwtToken = localStorage.getItem('jwtToken');
      if (!jwtToken) {
        return;
      }

      const kakao_Id = extractKakaoIdFromToken(jwtToken);
      if (!kakao_Id) {
        alert('Kakao_ID를 찾을 수 없습니다.');
        return;
      }

      try {
        const bookmarkResponse = await api.get(
          `/v1/users/kakao/${encodeURIComponent(kakao_Id)}/bookmarks/search`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            },
            params: { productName: name }
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
  }, [name]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      console.error('JWT 토큰 파싱 오류:', error);
      return null;
    }
  };

  const handleBookmarkClick = async (e: React.MouseEvent) => {
    e.stopPropagation();

    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
      setIsModalOpen(true);
      return;
    }

    const kakao_Id = extractKakaoIdFromToken(jwtToken);
    if (!kakao_Id) {
      alert('Kakao ID를 찾을 수 없습니다.');
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
            params: { productName: name }
          }
        );
        setBookmarked(false);
        alert('북마크가 삭제되었습니다.');
      } else {
        await api.post(
          `/v1/users/kakao/${encodeURIComponent(kakao_Id)}/bookmarks`,
          {
            productName: name
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
    <Container>
      <ImageContainer>
        <img
          src={image}
          alt={name}
          style={{ width: '100%', height: '100%', borderRadius: '10px' }}
        />
      </ImageContainer>
      <InfoContainer>
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{name}</div>
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
