import React, { useState, useEffect } from 'react';
import ProductBookmark from './infoUtils/productBookmark';
import ProductPrice from './infoUtils/productPrice';
import ProductUrl from './infoUtils/productUrl';
import {
  ProductInfoContainer,
  PriceInfoContainer,
  ProductInfoOptionContainer,
  ProductBookmarkContainer,
  ProductUrlContainer
} from './styles';
import { useNavigate } from 'react-router-dom';
import LoginRequiredModal from '@/components/modal/logInModal';

interface ProductInfoProps {
  originalPrice: number;
  productName: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  originalPrice,
  productName
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  
  // 쿠키에서 JWT 토큰을 가져오는 함수
  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  };

  useEffect(() => {
    const jwtToken = getCookie('jwtToken');
    if (jwtToken) {
      setIsAuthenticated(true);
    } else setIsAuthenticated(false);
  }, []);

  const handleBookmarkClick = () => {
    if (!isAuthenticated) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToLogin = () => {
    navigate('/signIn');
  };

  return (
    <ProductInfoContainer>
      {/* <RateInfoContainer>
        <ProductRating />
        <ReviewCount count={1000} />
      </RateInfoContainer> */}
      <PriceInfoContainer>
        <ProductPrice originalPrice={originalPrice} />
        <ProductInfoOptionContainer>
          <ProductBookmarkContainer onClick={handleBookmarkClick}>
            <ProductBookmark productName={productName} />
          </ProductBookmarkContainer>
          <ProductUrlContainer>
            <ProductUrl />
          </ProductUrlContainer>
        </ProductInfoOptionContainer>
      </PriceInfoContainer>
      <LoginRequiredModal
        open={isModalOpen}
        onClose={closeModal}
        onLogin={goToLogin}
      />
    </ProductInfoContainer>
  );
};

export default ProductInfo;
