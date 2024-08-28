import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ProductSliderContainer,
  Title,
  ProductsWrapper,
  ProductItem,
  ProductImage,
  PriceInfo
} from './styles';
import { LeftArrow, RightArrow } from '../../../components/utils/arrow';
import Skeleton from '@mui/material/Skeleton';
import { LoadingSearch } from '@/components/loading';

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  originalPrice: number;
  salePrice: number;
  discountRate: number;
};

type Props = {
  title: string;
  products?: Product[]; // API로 받은 제품들을 받을 수 있도록 props 추가
};

const ProductSlider = ({ title, products = [] }: Props) => {
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

  const handleTitleClick = () => {
    if (title === 'MY BOOKMARKS') {
      navigate(`/bookmark`);
    } else if (title === '최저가') {
      navigate(`/lowest-price`);
    } else if (title === '맞춤상품추천') {
      navigate(`/recommended`);
    }
  };

  const handleProductClick = (productName: string) => {
    navigate(`/product/${productName}`);
  };

  return (
    <Container>
      <Title onClick={handleTitleClick}>{title}</Title>
      {products.length > 0 ? (
        <ProductSliderContainer>
          <LeftArrow onClick={scrollLeft} />
          <ProductsWrapper ref={scrollRef}>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                onClick={() => handleProductClick(product.name)}
              >
                <ImageWithSkeleton
                  src={product.imageUrl}
                  alt={`Product ${product.name}`}
                />
                <PriceInfo>
                  <div>판매가: {product.originalPrice.toLocaleString()}원</div>
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
          width={200}
          height={200}
          animation="wave"
        />
      )}
      <ProductImage
        src={src}
        alt={alt}
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)} // 에러 발생 시에도 스켈레톤을 숨김
        width={150}
        height={150}
      />
    </>
  );
};

export default ProductSlider;