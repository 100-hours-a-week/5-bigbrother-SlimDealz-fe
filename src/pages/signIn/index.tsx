import React from 'react';
import { Container, Section, Description, KakaoButton } from './styles';

const SignInPage = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_API_KEY}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_SERVER_URI)}/auth/kakao/callback&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Container>
      <Section>
        <img
          src="/assets/logo.png"
          alt="Logo"
          style={{ width: '250px', height: 'auto', margin: '60px 0px' }}
        />
        {!import.meta.env.VITE_KAKAO_API_KEY ||
        !import.meta.env.VITE_SERVER_URI ? (
          <Description>
            카카오 로그인 설정이
            <br /> 올바르지 않습니다. <br />
            환경 변수를 확인해 주세요!
          </Description>
        ) : (
          <>
            <Description>
              간편하게 로그인하고 <br />
              다양한 서비스를 이용해보세요.
            </Description>
            <KakaoButton className="kakao-login" onClick={handleLogin}>
              <span role="img" aria-label="kakao-logo">
                🗨️
              </span>{' '}
              카카오 로그인
            </KakaoButton>
          </>
        )}
      </Section>
    </Container>
  );
};

export default SignInPage;
