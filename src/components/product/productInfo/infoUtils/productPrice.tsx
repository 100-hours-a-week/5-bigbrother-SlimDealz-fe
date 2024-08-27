import { getNumberWithComma } from '@/components/utils/conversion';
import React from 'react';

interface ProductPriceProps {
  originalPrice: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ originalPrice }) => {
  return (
    <div>
      <p>
        <span style={{ fontSize: '20px', fontWeight: 'bold', padding: '10px' }}>
          {getNumberWithComma(originalPrice)}
          {'  '}원
        </span>
      </p>
    </div>
  );
};

export default ProductPrice;
