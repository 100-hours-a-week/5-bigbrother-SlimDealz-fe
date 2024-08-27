// import React, { useState } from 'react';
// import { IconButton } from '@mui/material';
// import axios from 'axios';
// import {
//   Container,
//   ImageContainer,
//   InfoContainer,
//   // BookmarkContainer,
//   PriceContainer,
//   PriceText,
//   SmallText,
//   // BookmarkCount,
//   BookmarkCountWrapper
// } from './styles';
// import { getNumberWithComma } from '@/components/utils/conversion';
// import Bookmark from '@mui/icons-material/Bookmark';
// import BookmarkBorder from '@mui/icons-material/BookmarkBorder';

// type Props = {
//   id: number;
//   //  image: string;
//   name: string;
//   price: number;
//   // per100gPrice: string;
//   shipping: string;
//   // rating: number; // 주석 처리: 하드코딩된 값이므로 주석 처리
//   // bookmarkCount: number; // 주석 처리: 하드코딩된 값이므로 주석 처리
// };

// const CategoryList = ({
//   id,
//   // image,
//   name,
//   price,
//   // per100gPrice,
//   shipping
//   // rating,
//   // bookmarkCount
  
// }: Props) => {
//   const [bookmarked, setBookmarked] = useState(false);
//   // const [bookmarkCount, setBookmarkCount] = useState<number>(0);
//   const userId = localStorage.getItem('userId'); // 사용자 ID를 가져옴 (필요시 구현)
//   const serverUri = import.meta.env.VITE_SERVER_URI;

//   const handleBookmarkClick = async () => {
//     // setBookmarkCount((prevCount) =>
//     //   bookmarked ? prevCount - 1 : prevCount + 1
//     // );
//     try {
//       if (bookmarked) {
//         // 북마크 삭제
//         await axios.delete(`/api/v1/users/${userId}/bookmarks/${id}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
//           }
//         });
//         setBookmarked(false);
//         alert('북마크가 삭제되었습니다.');
//       } else {
//         // 북마크 추가
//         await axios.post(
//           `/api/v1/users/${userId}/bookmarks`,
//           { userId, productName: name },
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
//             }
//           }
//         );
//         setBookmarked(true);
//         alert('북마크가 추가되었습니다.');
//       }
//     } catch (error: any) {
//       if (error.response) {
//         if (error.response.status === 400) {
//           alert('유효하지 않은 데이터입니다.');
//         } else if (error.response.status === 401) {
//           alert('로그인이 필요합니다.');
//         } else if (error.response.status === 500) {
//           alert('서버 오류가 발생했습니다.');
//         }
//       } else {
//         alert('네트워크 오류가 발생했습니다.');
//       }
//     }
//   };

//   return (
//     <Container>
//       <ImageContainer>
//         <img
//           //  src={image}
//           alt={name}
//           style={{ width: '100%', height: '100%', borderRadius: '10px' }}
//         />
//       </ImageContainer>
//       <InfoContainer>
//         <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{name}</div>
//         <PriceContainer>
//           <PriceText>{getNumberWithComma(price)}원</PriceText>
//         </PriceContainer>
//         {/* <SmallText>[100g 당 {per100gPrice}원]</SmallText> */}
//         <SmallText>{'배송비 : ' + shipping}</SmallText>

//         <BookmarkCountWrapper>
//           <IconButton
//             onClick={(e) => {
//               e.stopPropagation(); // 클릭 이벤트가 부모로 전달되는 것을 방지
//               handleBookmarkClick();
//             }}
//             style={{ paddingLeft: '10px' }}
//           >
//             {bookmarked ? <Bookmark /> : <BookmarkBorder />}
//           </IconButton>
//           {/* <BookmarkCount>{bookmarkCount}</BookmarkCount> */}
//         </BookmarkCountWrapper>
//         {/* <BookmarkContainer onClick={(e) => e.stopPropagation()}>
//           <Rating value={rating} readOnly />
//         </BookmarkContainer> */}
//       </InfoContainer>
//     </Container>
//   );
// };

// export default CategoryList;


import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import axios from 'axios';
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

type Props = {
  id: number;
  name: string;
  price: number;
  shipping: string;
};

const CategoryList = ({
  id,
  name,
  price,
  shipping
}: Props) => {
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const serverUri = import.meta.env.VITE_SERVER_URI;

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
        const userIdResponse = await axios.get(
          `${serverUri}/api/v1/users/kakao/${encodeURIComponent(kakao_Id)}/id`,
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
            setBookmarked(bookmarkResponse.data.some((bookmark: any) => bookmark.productId === id));
          }
        } else {
          throw new Error('User ID를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('Error fetching user ID or bookmark status:', error);
      }
    };

    authenticateAndFetchUserId();
  }, [id, serverUri]);

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
          `${serverUri}/api/v1/users/${userId}/bookmarks/${id}`,
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
          `${serverUri}/api/v1/users/${userId}/bookmarks`,
          { productName: name },
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
    <Container>
      <ImageContainer>
        <img
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
            onClick={(e) => {
              e.stopPropagation();
              handleBookmarkClick();
            }}
            style={{ paddingLeft: '10px' }}
          >
            {bookmarked ? <Bookmark /> : <BookmarkBorder />}
          </IconButton>
        </BookmarkCountWrapper>
      </InfoContainer>
    </Container>
  );
};

export default CategoryList;
