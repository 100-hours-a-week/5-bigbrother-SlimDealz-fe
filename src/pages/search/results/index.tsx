import React, { useContext, useEffect, useState, useRef } from 'react';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { SearchContext } from '../../../components/utils/context/searchContext';
import { useParams } from 'react-router-dom';
import { LoadingProduct, NoResultsSpinner } from '@/components/loading';
import api from '@/axiosInstance';
import { Container } from '@/pages/main/styles';

interface Price {
  setPrice: number;
}

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  shippingFee: string;
  prices: Price[];
}

const SearchResultsPage: React.FC = () => {
  const { keyword } = useParams<{ keyword: string }>();
  const { setSearchQuery } = useContext(SearchContext);
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [lastSeenId, setLastSeenId] = useState<number | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (keyword) {
      setSearchQuery(keyword);
      setData([]);
      setLoading(true);
      setLastSeenId(null);
    }
  }, [keyword, setSearchQuery]);

  const fetchData = async () => {
    try {
      const response = await api.get('/v1/search', {
        params: {
          keyword,
          lastSeenId,
          size: 10
        }
      });

      if (response.status === 200 && response.data.length > 0) {
        const newProducts = response.data;

        setData((prevData) => [...prevData, ...newProducts]);

        const lastProductId = newProducts[newProducts.length - 1].id;
        setLastSeenId(lastProductId);

        if (newProducts.length < 10) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (err: any) {
      console.log('An error occurred:', err.message);
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    if (keyword) {
      fetchData();
    }
  }, [keyword]);

  useEffect(() => {
    console.log(lastSeenId);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore && hasMore) {
          setIsLoadingMore(true);
          fetchData();
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoadingMore, hasMore, lastSeenId]);

  return (
    <Container>
      {loading ? (
        <LoadingProduct />
      ) : data.length > 0 ? (
        <>
          {data.map((item, index) => (
            <CategoryList
              key={`${item.id}-${index}`}
              id={item.id}
              image={item.imageUrl}
              name={item.name}
              shipping={item.shippingFee}
              price={item.prices[0]?.setPrice}
            />
          ))}
          <div ref={loaderRef} style={{ height: '20px', margin: '10px 0' }}>
            {isLoadingMore && <LoadingProduct />}
          </div>
        </>
      ) : (
        <NoResultsSpinner />
      )}
    </Container>
  );
};

export default SearchResultsPage;
