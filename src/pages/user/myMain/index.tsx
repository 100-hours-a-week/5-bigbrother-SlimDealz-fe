import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Section,
  SectionTitle,
  ArrowIcon,
  LogoutButtonContainer,
  LogoutButton
} from './styles';
import PagePreparationModal from '@/components/modal/pagePreparationModal';
import LogoutModal from '@/components/modal/logOutModal';
import { deleteCookie, getCookie } from '@/components/utils/cookieUtils';

const MyMainPage = () => {
  const navigate = useNavigate();
  const [isPreModalOpen, setIsPreModalOpen] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);

  useEffect(() => {
    const jwtToken = getCookie('jwtToken'); // 쿠키에서 JWT 토큰을 가져옴
    if (!jwtToken) {
      navigate('/signin');
      return;
    }
  }, [navigate]);

  const closePreModal = () => {
    setIsPreModalOpen(false);
  };

  const closeLogModal = () => {
    setIsLogModalOpen(false);
  };

  const handleLogout = () => {
    deleteCookie('jwtToken');
    localStorage.removeItem('refreshToken');
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/logout?client_id=${import.meta.env.VITE_KAKAO_API_KEY}&logout_redirect_uri=${encodeURIComponent(import.meta.env.VITE_SERVER_URI)}/auth/kakao/logout`;
    window.location.href = KAKAO_AUTH_URL;
    // navigate('/');
  };

  return (
    <Container>
      <Section onClick={() => setIsPreModalOpen(true)}>
        <SectionTitle>나의 회원정보 수정</SectionTitle>
        <ArrowIcon>›</ArrowIcon>
      </Section>

      <Section onClick={() => navigate('/bookmark')}>
        <SectionTitle>나의 북마크</SectionTitle>
        <ArrowIcon>›</ArrowIcon>
      </Section>

      <Section onClick={() => setIsPreModalOpen(true)}>
        <SectionTitle>나의 알람</SectionTitle>
        <ArrowIcon>›</ArrowIcon>
      </Section>

      <LogoutButtonContainer>
        <LogoutButton onClick={() => setIsLogModalOpen(true)}>
          로그아웃
        </LogoutButton>
      </LogoutButtonContainer>

      {isPreModalOpen && <PagePreparationModal onClose={closePreModal} />}
      {isLogModalOpen && (
        <LogoutModal onClose={closeLogModal} onLogout={handleLogout} />
      )}
    </Container>
  );
};

export default MyMainPage;
