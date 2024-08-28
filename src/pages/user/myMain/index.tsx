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
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      navigate('/signIn');
    }
  }, [navigate]);

  const closePreModal = () => {
    setIsPreModalOpen(false);
  };

  const closeLogModal = () => {
    setIsLogModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    navigate('/signIn');
  };

  return (
    <Container>
      <Section onClick={() => navigate('/information')}>
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
