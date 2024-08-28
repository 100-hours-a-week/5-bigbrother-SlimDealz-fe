import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Title } from './styles';
import { useParams } from 'react-router-dom';
import PriceAlertSetting from '../../components/priceAlertSetting';
import TabsComponent from '../../components/tab';
import ReviewList from '../../components/list/reviewList';
import ImageView from '../../components/image/productImage';
import ProductInfo from '../../components/product/productInfo';
import { InfoContainer } from '../../components/list/categoryList/styles';
import { LoadingProduct } from '@/components/loading';

const DetailPage = () => {
  const { productName } = useParams<{ productName: string }>();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/product-detail?productName=${encodeURIComponent(productName as string)}`
        );
        setProductData(response.data);
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
  }, [productName]);

  if (!productData) {
    return <LoadingProduct />;
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
