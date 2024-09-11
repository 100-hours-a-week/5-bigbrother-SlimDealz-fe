// 쿠키에서 특정 값을 가져오는 함수
export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

// 쿠키 삭제 함수
export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname};`;
};
