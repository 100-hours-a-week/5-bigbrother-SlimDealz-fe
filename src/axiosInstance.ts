import axios from 'axios';
import { getCookie } from './components/utils/cookieUtils';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true // 쿠키를 전송하기 위해 필요
});

// JWT 토큰 갱신을 위한 함수
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken'); // 쿠키에서 Refresh Token을 가져옴
    const jwtToken = getCookie('jwtToken');
    if (!refreshToken) {
      throw new Error('Refresh Token이 없습니다.');
    }

    const response = await api.post(
      '/refresh',
      {}, // 요청 바디는 비어있음
      {
        headers: {
          Authorization: `Bearer ${jwtToken}` // Refresh Token을 Authorization 헤더에 추가
        },
        withCredentials: true, // 쿠키를 포함하기 위한 옵션
        params: { refreshToken }
      }
    );

    const newAccessToken = response.data.accessToken;
    // 새 Access Token을 쿠키에 저장
    document.cookie = `jwtToken=${newAccessToken}; Path=/; SameSite=None; Secure`;
    return newAccessToken;
  } catch (error) {
    console.error('Failed to refresh access token', error);
    throw error;
  }
};

// Axios 요청 인터셉터 설정
api.interceptors.request.use(
  (config) => {
    const jwtToken = getCookie('jwtToken'); // 쿠키에서 JWT 토큰을 가져옴

    // JWT 토큰이 있고, /refresh 요청이 아닌 경우 Authorization 헤더에 토큰을 추가
    if (jwtToken && config.url && !config.url.includes('/refresh')) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Axios 응답 인터셉터 설정
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401 오류가 발생하면 토큰 갱신 시도
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest); // 원래 요청을 새 토큰으로 재시도
      } catch (refreshError) {
        // 갱신 실패 시, 로그인 페이지로 리다이렉트
        window.location.href = '/signin';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
