import React, { useState, useEffect } from 'react';
import { Container, ReviewContainer, PaginationContainer } from './styles';
import { Pagination } from '@mui/material';
import api from '@/axiosInstance';

interface Review {
  customerRating: number;
  content: string;
  productSource: string;
  reviewDate: string;
  userName: string;
}

interface ReviewListProps {
  productName: string;
}

const ReviewList: React.FC<ReviewListProps> = ({ productName }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const reviewsPerPage = 3;

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await api.get('/v1/review', {
          params: { productName }
        });

        setReviews(Array.isArray(response.data) ? response.data : []);
        setErrorMessage('');
      } catch (error: any) {
        if (error.response) {
          if (error.response.status === 404) {
            setErrorMessage('리뷰를 찾을 수 없습니다.');
          } else if (error.response.status === 500) {
            setErrorMessage(
              '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
            );
          } else {
            setErrorMessage('알 수 없는 오류가 발생했습니다.');
          }
        } else {
          setErrorMessage(
            '네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.'
          );
        }
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productName]);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const paginatedReviews = reviews.slice(
    (page - 1) * reviewsPerPage,
    page * reviewsPerPage
  );

  if (loading) {
    return <p>리뷰를 불러오는 중입니다...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <Container>
      {paginatedReviews.length > 0 ? (
        paginatedReviews.map((review, index) => (
          <ReviewContainer key={index}>
            <div>
              <h3>{review.content.slice(0, 6)}...</h3>
              <p style={{ color: '#282828' }}>{review.content}</p>
              <small>{`별점: ${review.customerRating} | 출처: ${review.productSource}`}</small>
              <small>{`${review.reviewDate} | ${review.userName}`}</small>
            </div>
          </ReviewContainer>
        ))
      ) : (
        <p>리뷰가 없습니다.</p>
      )}
      <PaginationContainer>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          siblingCount={1}
          boundaryCount={1}
          shape="rounded"
          variant="outlined"
          color="primary"
        />
      </PaginationContainer>
    </Container>
  );
};

export default ReviewList;
