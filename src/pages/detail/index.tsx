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
import LoadingSpinner from '@/components/utils/scrollToTop/loadingSpinner';

const DetailPage = () => {
  const { productName } = useParams<{ productName: string }>();
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState<string | null>(null);

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
            setError('Product not found');
          } else {
            setError('Server error');
          }
        } else {
          setError('Network error');
        }
      }
    };

    fetchProductData();
  }, [productName]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!productData) {
    return <LoadingSpinner />;
  }

  const { image, name, prices } = productData;
  const { setPrice } = prices[0];

  return (
    <Container>
      <ImageView src={image} alt={name} />
      <InfoContainer>
        <div style={{ fontSize: '20px', fontWeight: 'bold', width: '300px' }}>
          {name}
        </div>
      </InfoContainer>
      <ProductInfo originalPrice={setPrice} />
      {/* <PriceAlertSetting /> */}
      <TabsComponent />
      {/* <Title>리뷰</Title>
      <ReviewList /> */}
    </Container>
  );
};

export default DetailPage;
