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

const MyMainPage = () => {
  const navigate = useNavigate();
  const [isPreModalOpen, setIsPreModalOpen] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);

  useEffect(() => {
    const jwtToken = getCookie('jwtToken'); // 쿠키에서 JWT 토큰을 가져옴
    if (!jwtToken) {
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
    deleteCookie('kakaoId')
    localStorage.removeItem('refreshToken');
    navigate('/');
  };
  
  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname};`;
  };
  
  // 쿠키에서 특정 값을 가져오는 함수
  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
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
