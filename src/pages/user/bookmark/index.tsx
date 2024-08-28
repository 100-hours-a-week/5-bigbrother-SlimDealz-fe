import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, CustomBox, CustomButton } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { LoadingProduct } from '@/components/loading';

const UserBookmarkPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const serverUri = import.meta.env.VITE_SERVER_URI;

  useEffect(() => {
    const authenticateAndFetchBookmarks = async () => {
      const jwtToken = localStorage.getItem('jwtToken');
      if (!jwtToken) {
        setIsAuthenticated(false);
        console.log('JWT 토큰이 없습니다.');
        setLoading(false);
        return;
      }

      const kakao_Id = extractKakaoIdFromToken(jwtToken);
      if (!kakao_Id) {
        setIsAuthenticated(false);
        console.log('Kakao_ID를 찾을 수 없습니다.');
        setLoading(false);
        return;
      }

      try {
        // 서버 URI로 요청을 보냅니다.
        const userIdResponse = await axios.get(
          `${serverUri}/api/v1/users/kakao/${encodeURIComponent(kakao_Id)}/id`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            }
          }
        );

        if (userIdResponse.status === 200) {
          setIsAuthenticated(true);
          const userId = userIdResponse.data;

          const bookmarksResponse = await axios.get(
            `${serverUri}/api/v1/users/${userId}/bookmarks`,
            {
              headers: {
                Authorization: `Bearer ${jwtToken}`
              }
            }
          );

          if (bookmarksResponse.status === 200) {
            setBookmarks(bookmarksResponse.data);
          }
        } else {
          throw new Error('User ID를 가져오는 데 실패했습니다.');
        }
      } catch (err: any) {
        if (err.response) {
          if (err.response.status === 400) {
            console.log('Invalid data.');
          } else if (err.response.status === 401) {
            console.log('Unauthorized access.');
          } else if (err.response.status === 500) {
            console.log('Server error occurred.');
          }
        } else {
          console.log('Network error.');
        }
      } finally {
        setLoading(false);
      }
    };

    authenticateAndFetchBookmarks();
  }, []);

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

  if (loading) {
    return <LoadingProduct />;
  }

  if (!isAuthenticated) {
    return (
      <Container>
        <CustomBox>
          <Typography variant="h6" gutterBottom>
            북마크한 상품이 없습니다
          </Typography>
          <Typography variant="body2" color="textSecondary">
            로그인하고 관심 상품의 최저가 소식을 받아보세요.
          </Typography>
          <CustomButton onClick={() => navigate('/signIn')}>
            로그인하기
          </CustomButton>
        </CustomBox>
      </Container>
    );
  }

  return (
    <Container>
      <PageNameTag pageName={`전체 ${bookmarks.length}개`} />
      {bookmarks.map((bookmark: any, index: number) => (
        <CategoryList
          key={index}
          id={bookmark.productId}
          image={bookmark.imageUrl}
          name={bookmark.name}
          shipping={bookmark.shippingFee}
          price={bookmark.prices[0]?.setPrice}
        />
      ))}
    </Container>
  );
};

export default UserBookmarkPage;
