import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  MallItem,
  MallInfo,
  PriceContainer,
  ShippingFeeContainer
} from './styles';
import { getNumberWithComma } from '@/components/utils/conversion';
import { LoadingSpinner } from '@/components/loading';

interface Vendor {
  vendorName: string;
  vendorUrl: string;
}

interface Price {
  setPrice: number;
  vendor: Vendor;
}

interface MallData {
  id: number;
  name: string;
  category: string;
  shippingFee: number;
  vendorUrl: string;
  prices: Price[];
}

interface TabsComponentProps {
  productName: string;
}

const MallList: React.FC<TabsComponentProps> = ({ productName }) => {
  const [mallData, setMallData] = useState<MallData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMallData = async () => {
      try {
        const response = await axios.get('/api/v1/vendor-list', {
          params: { productName }
        });
        setMallData(response.data);
      } catch (err) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMallData();
  }, [productName]);

  if (loading) return <LoadingSpinner />;

  return (
    <Container>
      {mallData.map((item, index) =>
        item.prices.map((price, idx) => (
          <MallItem
            key={`${index}-${idx}`}
            onClick={() => {
              if (price.vendor.vendorUrl) {
                window.open(price.vendor.vendorUrl, '_blank');
              }
            }}
          >
            <MallInfo>{price.vendor.vendorName}</MallInfo>
            <PriceContainer>
              {`최저가 ${getNumberWithComma(price.setPrice)}원`}
              <ShippingFeeContainer>
                {item.shippingFee
                  ? `배송비: ${getNumberWithComma(item.shippingFee)}원`
                  : '무료배송'}
              </ShippingFeeContainer>
            </PriceContainer>
          </MallItem>
        ))
      )}
    </Container>
  );
};

export default MallList;
