import React, { useEffect, useState } from 'react';
import { Container, CustomBox, CustomButton } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { LoadingProduct } from '@/components/loading';
import api from '@/axiosInstance';

interface Price {
  id: number;
  setPrice: number;
  promotion: string | null;
  productId: number;
  vendor: {
    id: number;
    vendorName: string;
    vendorUrl: string | null;
  };
}

interface Bookmark {
  bookmarkId: number;
  id: number;
  name: string;
  imageUrl: string | null;
  shippingFee: string;
  prices: Price[];
  originalPrice: number | null;
  salePrice: number | null;
  discountRate: number | null;
}

const UserBookmarkPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
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
      } else {
        setIsAuthenticated(true);
      }

      const kakao_Id = extractKakaoIdFromToken(jwtToken);
      if (!kakao_Id) {
        setIsAuthenticated(false);
        console.log('Kakao_ID를 찾을 수 없습니다.');
        setLoading(false);
        return;
      } else {
        setIsAuthenticated(true);
      }

      try {
        const bookmarksResponse = await api.get(
          `/v1/users/kakao/${encodeURIComponent(kakao_Id)}/bookmarks`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            }
          }
        );

        if (bookmarksResponse.status === 200) {
          setIsAuthenticated(true);
          setBookmarks(bookmarksResponse.data);
        } else {
          throw new Error('북마크 데이터를 가져오는 데 실패했습니다.');
        }
      } catch (err: any) {
        if (err.response) {
          if (err.response.status === 400) {
            console.log('잘못된 데이터 요청입니다.');
          } else if (err.response.status === 401) {
            console.log('권한이 없습니다.');
          } else if (err.response.status === 500) {
            console.log('서버 오류가 발생했습니다.');
          }
        } else {
          console.log('네트워크 오류가 발생했습니다.');
        }
      } finally {
        setLoading(false);
      }
    };

    authenticateAndFetchBookmarks();
  }, [serverUri]);

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
      {bookmarks.length < 1 ? (
        <>
          <PageNameTag pageName="전체 0개" />
          <CustomBox>
            <Typography variant="h6" gutterBottom>
              북마크한 상품이 없습니다
            </Typography>
            <Typography variant="body2" color="textSecondary">
              지금 바로 북마크 목록을 생성해보세요.
            </Typography>
            <CustomButton onClick={() => navigate('/')}>
              북마크 하러가기
            </CustomButton>
          </CustomBox>
        </>
      ) : (
        <>
          <PageNameTag pageName={`전체 ${bookmarks.length}개`} />
          {bookmarks.map((bookmark) => (
            <CategoryList
              key={bookmark.bookmarkId}
              id={bookmark.id}
              image={bookmark.imageUrl || 'default_image_url_here'} // Provide a default image if null
              name={bookmark.name}
              shipping={bookmark.shippingFee}
              price={bookmark.prices[0]?.setPrice}
              // vendorName={bookmark.prices[0]?.vendor.vendorName} // Added vendor name
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default UserBookmarkPage;
