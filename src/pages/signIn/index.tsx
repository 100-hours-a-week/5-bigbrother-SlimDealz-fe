import React from 'react';
import { Container, Header, Section, Description, KakaoButton } from './styles';
import { useNavigate } from 'react-router-dom';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  // 카카오 로그인 URL을 생성합니다.
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_API_KEY}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_REDIRECT_URI)}/auth/kakao/callback&response_type=code`;

  // 환경 변수가 설정되지 않은 경우 처리
  if (
    !import.meta.env.VITE_KAKAO_API_KEY ||
    !import.meta.env.VITE_REDIRECT_URI
  ) {
    console.error('Kakao API Key or Redirect URI is missing.');
    return (
      <Container>
        <Header>
          <img src="/assets/logo.png" alt="Slimdealz logo" />
        </Header>

        <Section>
          <Description>
            카카오 로그인 설정이
            <br /> 올바르지 않습니다. <br />
            환경 변수를 확인해 주세요!
          </Description>
        </Section>
      </Container>
    );
  }

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
    // navigate('/signUp');
  };

  return (
    <Container>
      <Header>
        <img src="/assets/logo.png" alt="Slimdealz logo" />
      </Header>

      <Section>
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
      </Section>
    </Container>
  );
};

export default SignInPage;
