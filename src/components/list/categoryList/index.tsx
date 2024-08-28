import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import axios from 'axios';
import {
  Container,
  ImageContainer,
  InfoContainer,
  // BookmarkContainer,
  PriceContainer,
  PriceText,
  SmallText,
  // BookmarkCount,
  BookmarkCountWrapper
} from './styles';
import { getNumberWithComma } from '@/components/utils/conversion';
import Bookmark from '@mui/icons-material/Bookmark';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';

type Props = {
  id: number;
  image: string;
  name: string;
  price: number;
  // per100gPrice: string;
  shipping: string;
  // rating: number; // 주석 처리: 하드코딩된 값이므로 주석 처리
  // bookmarkCount: number; // 주석 처리: 하드코딩된 값이므로 주석 처리
};

const CategoryList = ({
  id,
  image,
  name,
  price,
  // per100gPrice,
  shipping
  // rating,
  // bookmarkCount
}: Props) => {
  const [bookmarked, setBookmarked] = useState(false);
  // const [bookmarkCount, setBookmarkCount] = useState<number>(0);
  const userId = localStorage.getItem('userId'); // 사용자 ID를 가져옴 (필요시 구현)

  const handleBookmarkClick = async () => {
    // setBookmarkCount((prevCount) =>
    //   bookmarked ? prevCount - 1 : prevCount + 1
    // );
    try {
      if (bookmarked) {
        // 북마크 삭제
        await axios.delete(`/api/v1/users/${userId}/bookmarks/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
        setBookmarked(false);
        alert('북마크가 삭제되었습니다.');
      } else {
        // 북마크 추가
        await axios.post(
          `/api/v1/users/${userId}/bookmarks`,
          { userId, productName: name },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            }
          }
        );
        setBookmarked(true);
        alert('북마크가 추가되었습니다.');
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          alert('유효하지 않은 데이터입니다.');
        } else if (error.response.status === 401) {
          alert('로그인이 필요합니다.');
        } else if (error.response.status === 500) {
          alert('서버 오류가 발생했습니다.');
        }
      } else {
        alert('네트워크 오류가 발생했습니다.');
      }
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
        {/* <SmallText>[100g 당 {per100gPrice}원]</SmallText> */}
        <SmallText>{'배송비 : ' + shipping}</SmallText>

        <BookmarkCountWrapper>
          <IconButton
            onClick={(e) => {
              e.stopPropagation(); // 클릭 이벤트가 부모로 전달되는 것을 방지
              handleBookmarkClick();
            }}
            style={{ paddingLeft: '10px' }}
          >
            {bookmarked ? <Bookmark /> : <BookmarkBorder />}
          </IconButton>
          {/* <BookmarkCount>{bookmarkCount}</BookmarkCount> */}
        </BookmarkCountWrapper>
        {/* <BookmarkContainer onClick={(e) => e.stopPropagation()}>
          <Rating value={rating} readOnly />
        </BookmarkContainer> */}
      </InfoContainer>
    </Container>
  );
};

export default CategoryList;
