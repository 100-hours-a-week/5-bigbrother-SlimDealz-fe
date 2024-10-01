import React, { useEffect, useState } from 'react';
import { Container, Title } from './styles';
import { useParams } from 'react-router-dom';
import PriceAlertSetting from '../../components/priceAlertSetting';
import TabsComponent from '../../components/tab';
import ReviewList from '../../components/list/reviewList';
import ImageView from '../../components/image/productImage';
import ProductInfo from '../../components/product/productInfo';
import { InfoContainer } from '../../components/list/categoryList/styles';
import { LoadingSpinner } from '@/components/loading';
import api from '@/axiosInstance';

const DetailPage = () => {
  const { productName, productId } = useParams<{
    productName: string;
    productId: string;
  }>();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await api.get(
          `/v1/product-detail?productName=${productName as string}&productId=${productId}`
        );
        setProductData(response.data);

        const recentProducts = JSON.parse(
          localStorage.getItem('recentProducts') || '[]'
        );
        const updatedRecentProducts = [
          response.data,
          ...recentProducts.filter(
            (product: any) => product.name !== response.data.name
          )
        ];
        localStorage.setItem(
          'recentProducts',
          JSON.stringify(updatedRecentProducts.slice(0, 10))
        );
      } catch (err: any) {
        if (err.response) {
          if (err.response.status === 404) {
            console.log('Product not found');
          } else {
            console.log('Server error');
          }
        } else {
          console.log('Network error');
        }
      }
    };

    fetchProductData();
  }, [productName, productId]);

  if (!productData) {
    return <LoadingSpinner />;
  }

  const { imageUrl, name, prices } = productData;
  const { setPrice } = prices[0];

  return (
    <Container>
      <ImageView src={imageUrl} alt={name} />
      <InfoContainer>
        <div style={{ fontSize: '20px', fontWeight: 'bold', width: '300px' }}>
          {name}
        </div>
      </InfoContainer>
      <ProductInfo originalPrice={setPrice} productName={name} />
      {/* <PriceAlertSetting /> */}
      <TabsComponent productName={name} />
      {/* <Title>리뷰</Title>
      <ReviewList /> */}
    </Container>
  );
};

export default DetailPage;
