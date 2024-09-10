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
import { getCookie } from '@/components/utils/cookieUtils';

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
