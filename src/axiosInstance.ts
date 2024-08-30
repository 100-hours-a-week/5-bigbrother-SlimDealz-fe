import axios from 'axios';

const serverUri = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: serverUri // 기본 URL 설정
});

export default api;
