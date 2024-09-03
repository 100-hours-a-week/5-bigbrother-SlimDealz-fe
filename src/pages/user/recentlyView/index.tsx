import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import PageNameTag from '@/components/tag/pageNameTag';
import CategoryList from '@/components/list/categoryList';

const UserRecentlyViewPage = () => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem('recentProducts') || '[]'
    );
    setRecentProducts(storedProducts);
  }, []);

  return (
    <Container>
      <PageNameTag pageName="최근 본 상품" />
      {recentProducts.length > 0 ? (
        recentProducts.map((product: any) => (
          <CategoryList
            key={product.id}
            id={product.id}
            image={product.imageUrl}
            name={product.name}
            shipping={product.shippingFee}
            price={product.prices?.[0]?.setPrice || '가격 없음'}
          />
        ))
      ) : (
        <div>최근 본 상품이 없습니다.</div>
      )}
    </Container>
  );
};

export default UserRecentlyViewPage;
