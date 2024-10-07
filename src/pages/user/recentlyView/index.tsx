import React, { useState, useEffect } from 'react';
import CategoryList from '@/components/list/categoryList';
import { useNavigate } from 'react-router-dom';
import { CustomBox, CustomButton } from '../bookmark/styles';
import { Typography } from '@mui/material';
import { Container } from '@/pages/main/styles';

const UserRecentlyViewPage = () => {
  const [recentProducts, setRecentProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem('recentProducts') || '[]'
    );
    const filteredProducts = storedProducts.filter(
      (product: any) => product.prices?.[0]?.setPrice !== undefined
    );
    setRecentProducts(filteredProducts);
  }, []);

  return (
    <Container>
      {recentProducts.length > 0 ? (
        recentProducts.map((product: any) => (
          <CategoryList
            key={product.id}
            id={product.id}
            image={product.imageUrl}
            productName={product.productName}
            shipping={product.shippingFee}
            price={product.prices?.[0]?.setPrice}
          />
        ))
      ) : (
        <>
          <CustomBox>
            <Typography variant="h6" gutterBottom>
              최근 본 상품이 없습니다
            </Typography>
            <Typography variant="body2" color="textSecondary">
              지금 바로 상품을 클릭 해보세요.
            </Typography>
            <CustomButton onClick={() => navigate('/')}>
              상품 보러가기
            </CustomButton>
          </CustomBox>
        </>
      )}
    </Container>
  );
};

export default UserRecentlyViewPage;
