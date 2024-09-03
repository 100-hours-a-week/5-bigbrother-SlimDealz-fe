import axios from 'axios';

const serverUri = import.meta.env.VITE_SERVER_URI;

const api = axios.create({
  baseURL: serverUri // 기본 URL 설정
});

export default api;
