import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ProductSliderContainer,
  ProductsWrapper,
  ProductItem,
  ProductImage,
  PriceInfo
} from './styles';
import Skeleton from '@mui/material/Skeleton';
import { LoadingSearch } from '@/components/loading';
import { LeftArrow, RightArrow } from '@/components/utils/arrow';
import { truncateString } from '@/components/utils/conversion';

type Product = {
  id: number;
  productName: string;
  imageUrl: string;
  prices: { setPrice: number }[];
};

type Props = {
  products?: Product[];
};

const ProductSlider = ({ products = [] }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleProductClick = (productName: string) => {
    navigate(`/product/${productName}`);
  };

  return (
    <Container>
      {products.length > 0 ? (
        <ProductSliderContainer>
          <LeftArrow onClick={scrollLeft} />
          <ProductsWrapper ref={scrollRef}>
            {products.map((product, index) => (
              <ProductItem
                key={`${product.id}-${index}`}
                onClick={() => handleProductClick(product.productName)}
              >
                <ImageWithSkeleton
                  src={product.imageUrl}
                  alt={`Product ${product.productName}`}
                />
                <PriceInfo>
                  <h3>{truncateString(product.productName, 10)}</h3>
                  <div className="price-row">
                    <div className="price-label">최저가:</div>
                    <div className="price-value">
                      {product.prices[0].setPrice.toLocaleString()}원
                    </div>
                  </div>
                </PriceInfo>
              </ProductItem>
            ))}
            <RightArrow onClick={scrollRight} />
          </ProductsWrapper>
        </ProductSliderContainer>
      ) : (
        <LoadingSearch />
      )}
    </Container>
  );
};

const ImageWithSkeleton = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          width={140}
          height={140}
          animation="wave"
        />
      )}
      <ProductImage
        src={src}
        alt={alt}
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        width={140}
        height={140}
      />
    </>
  );
};

export default ProductSlider;
