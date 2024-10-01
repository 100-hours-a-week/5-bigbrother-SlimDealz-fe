import React, { useEffect, useState } from 'react';
import { CustomBox, CustomButton } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { LoadingProduct } from '@/components/loading';
import api from '@/axiosInstance';
import { Container } from '@/pages/main/styles';
import { getCookie } from '@/components/utils/cookieUtils';

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
  productId: number;
  productName: string;
  image: string | null;
  shippingFee: string;
  prices: Price[];
  originalPrice: number | null;
  salePrice: number | null;
  discountRate: number | null;
}

const UserBookmarkPage: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie('jwtToken');
    setJwtToken(token);

    if (!token) {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (!jwtToken) return;

      try {
        const response = await api.get(`/v1/users/bookmarks`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });

        if (response.status === 200) {
          setBookmarks(response.data);
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

    if (jwtToken) {
      fetchBookmarks();
    }
  }, [jwtToken]);

  if (loading) {
    return <LoadingProduct />;
  }

  if (!jwtToken) {
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

  if (!bookmarks.length) {
    return (
      <Container>
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
      </Container>
    );
  }

  return (
    <Container>
      <PageNameTag pageName={`전체 ${bookmarks.length}개`} />
      {bookmarks.map((bookmark) => (
        <CategoryList
          key={bookmark.bookmarkId}
          id={bookmark.productId}
          image={bookmark.image || 'default_image_url_here'} // 이미지가 없을 경우 기본 이미지 설정
          productName={bookmark.productName}
          shipping={bookmark.shippingFee}
          price={bookmark.prices[0]?.setPrice}
        />
      ))}
    </Container>
  );
};

export default UserBookmarkPage;
