import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import Bookmark from '@mui/icons-material/Bookmark';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
import api from '@/axiosInstance';
import LoginRequiredModal from '@/components/modal/logInModal';
import {
  Container,
  Title,
  GridContainer,
  Card,
  ImagePlaceholder,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  BookmarkIcon
} from './styles';
import { getCookie } from '@/components/utils/cookieUtils';
import {
  truncateString,
  getNumberWithComma
} from '@/components/utils/conversion';

type Price = {
  setPrice: number;
};

type Product = {
  id: number;
  productName: string;
  imageUrl: string;
  prices: Price[];
};

type Props = {
  products: Product[];
};

const ProductCard = ({ products }: Props) => {
  const [bookmarked, setBookmarked] = useState<boolean[]>(
    new Array(products.length).fill(false)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticateAndCheckBookmarks = async () => {
      const jwtToken = getCookie('jwtToken');
      if (!jwtToken) return;

      try {
        const promises = products.map(async (product, index) => {
          const bookmarkResponse = await api.get(`/v1/users/bookmarks/search`, {
            headers: { Authorization: `Bearer ${jwtToken}` },
            params: { productName: product.productName }
          });
          if (bookmarkResponse.status === 200 && bookmarkResponse.data) {
            setBookmarked((prev) => {
              const newBookmarks = [...prev];
              newBookmarks[index] = true;
              return newBookmarks;
            });
          }
        });
        await Promise.all(promises);
      } catch (error: any) {
        console.error(
          'Error checking bookmark status:',
          error.message || error
        );
      }
    };

    authenticateAndCheckBookmarks();
  }, [products]);

  const handleProductClick = (productName: string, id: number) => {
    navigate(`/product/${productName}/${id}`);
  };

  const handleBookmarkClick = async (
    e: React.MouseEvent,
    productName: string,
    index: number
  ) => {
    e.stopPropagation();

    const jwtToken = getCookie('jwtToken');
    if (!jwtToken) {
      setIsModalOpen(true);
      return;
    }

    try {
      if (bookmarked[index]) {
        await api.delete(`/v1/users/bookmarks`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
          params: { productName }
        });
        setBookmarked((prev) => {
          const newBookmarks = [...prev];
          newBookmarks[index] = false;
          return newBookmarks;
        });
        alert('북마크가 삭제되었습니다.');
      } else {
        await api.post(
          `/v1/users/bookmarks`,
          { productName },
          { headers: { Authorization: `Bearer ${jwtToken}` } }
        );
        setBookmarked((prev) => {
          const newBookmarks = [...prev];
          newBookmarks[index] = true;
          return newBookmarks;
        });
        alert('북마크가 추가되었습니다.');
      }
    } catch (error: any) {
      console.error('Error handling bookmark:', error.message || error);
      alert('오류가 발생했습니다.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Title>총 {products.length}개 상품</Title>
      <GridContainer>
        {products.map((product, index) => (
          <Card
            key={`${product.id}-${index}`}
            onClick={() => handleProductClick(product.productName, product.id)}
          >
            <ImagePlaceholder>
              <ProductImage src={product.imageUrl} alt={product.productName} />
            </ImagePlaceholder>
            <ProductInfo>
              <ProductTitle>
                {truncateString(product.productName, 10)}
              </ProductTitle>
              <ProductPrice>
                {getNumberWithComma(product.prices[0]?.setPrice)}원
              </ProductPrice>
            </ProductInfo>
            <BookmarkIcon>
              <IconButton
                onClick={(e) =>
                  handleBookmarkClick(e, product.productName, index)
                }
              >
                {bookmarked[index] ? <Bookmark /> : <BookmarkBorder />}
              </IconButton>
            </BookmarkIcon>
          </Card>
        ))}
      </GridContainer>
      <LoginRequiredModal
        open={isModalOpen}
        onClose={closeModal}
        onLogin={() => {
          closeModal();
          window.location.href = '/signIn';
        }}
      />
    </Container>
  );
};

export default ProductCard;
