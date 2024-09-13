import React from 'react';
import Footer from '../components/layoutWrapper/footer';
import Header from '../components/layoutWrapper/header';
import { Outlet, useLocation } from 'react-router-dom';
import { Background, Container } from './styles';

const OutLetContainer = () => {
  const location = useLocation();

  let pageTitle = '';

  if (location.pathname.includes('/bookmark')) {
    pageTitle = '북마크 상품';
  } else if (location.pathname.includes('/myPage')) {
    pageTitle = '마이페이지';
  } else if (location.pathname.includes('/comingSoon')) {
    pageTitle = '알람';
  } else if (location.pathname.includes('/recentlyView')) {
    pageTitle = '최근 본 상품';
  } else if (location.pathname.includes('/category/today')) {
    pageTitle = '오늘의 최저가';
  } else if (location.pathname.includes('/category/popular')) {
    pageTitle = '인기 급상승';
  } else if (location.pathname.includes('/category/recommend')) {
    pageTitle = 'MD의 추천템';
  }

  return (
    <Background>
      <Container>
        <Header pageTitle={pageTitle} />
        <Outlet />
      </Container>
      <Footer />
    </Background>
  );
};

export default OutLetContainer;
