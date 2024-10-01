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

  const [productData, setProductData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // productId를 숫자로 변환
        const numericProductId = Number(productId);

        if (isNaN(numericProductId)) {
          console.error('Invalid productId:', productId);
          setError('Invalid product ID');
          return;
        }

        const response = await api.get(
          `/v1/product-detail?productName=${encodeURIComponent(productName as string)}&productId=${numericProductId}`
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
        if (err.response && err.response.status === 404) {
          setError('Product not found');
        } else {
          setError('An error occurred while fetching product data');
        }
      }
    };

    fetchProductData();
  }, [productName, productId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!productData) {
    return <LoadingSpinner />;
  }

  const { imageUrl, productName: name, prices } = productData;
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
      <TabsComponent productName={name} />
    </Container>
  );
};

export default DetailPage;
