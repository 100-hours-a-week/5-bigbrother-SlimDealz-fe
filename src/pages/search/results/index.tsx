import React, { useContext, useEffect, useState } from 'react';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { SearchContext } from '../../../components/utils/context/searchContext';
import { useParams, Link } from 'react-router-dom';
import { LoadingProduct, NoResultsSpinner } from '@/components/loading';
import api from '@/axiosInstance';
import { Container } from '@/pages/main/styles';

const SearchResultsPage: React.FC = () => {
  const { keyword } = useParams<{ keyword: string }>();
  const { setSearchQuery } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (keyword) {
      setSearchQuery(keyword);
      setData([]);
      setLoading(true);
    }
  }, [keyword, setSearchQuery]);

  useEffect(() => {
    if (!keyword) return;

    const fetchData = async () => {
      try {
        const response = await api.get('/v1/search', {
          params: { keyword }
        });

        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err: any) {
        console.log('An error occurred:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <Container>
      <PageNameTag pageName={`"${keyword}" 검색결과: ${data.length}개`} />
      {loading ? (
        <LoadingProduct />
      ) : data.length > 0 ? (
        data.map((item: any, index: number) => (
          <CategoryList
            id={item.id}
            image={item.imageUrl}
            name={item.name}
            shipping={item.shippingFee}
            price={item.prices[0]?.setPrice}
          />
        ))
      ) : (
        <NoResultsSpinner />
      )}
    </Container>
  );
};

export default SearchResultsPage;
