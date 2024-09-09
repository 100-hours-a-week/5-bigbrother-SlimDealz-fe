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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookmarks = async () => {
      const kakaoId = getCookie('kakaoId');

      if (!kakaoId) {
        setLoading(false);
        console.log('Kakao_ID를 찾을 수 없습니다.');
        return;
      }

      try {
        const response = await api.get(`/v1/users/bookmarks`);
        
        if (response.status === 200) {
          setBookmarks(response.data);
        } else {
          throw new Error('북마크 데이터를 가져오는 데 실패했습니다.');
        }
      } catch (error) {
        console.error('북마크 데이터를 가져오는 도중 오류가 발생했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  // 쿠키에서 특정 값을 가져오는 함수
  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  };

  if (loading) {
    return <LoadingProduct />;
  }

  if (!bookmarks.length) {
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
      {bookmarks.map((bookmark) => (
        <CategoryList
          key={bookmark.bookmarkId}
          id={bookmark.productId}
          image={bookmark.image || 'default_image_url_here'} // 기본 이미지 제공
          name={bookmark.productName}
          shipping={bookmark.shippingFee}
          price={bookmark.prices[0]?.setPrice}
          // vendorName={bookmark.prices[0]?.vendor.vendorName} // Added vendor name
        />
      ))}
    </Container>
  );
};

export default UserBookmarkPage;
