import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { Container, ImageContainer, InfoContainer, PriceContainer, PriceText, SmallText, BookmarkCountWrapper } from './styles';
import { getNumberWithComma } from '@/components/utils/conversion';
import Bookmark from '@mui/icons-material/Bookmark';
import BookmarkBorder from '@mui/icons-material/BookmarkBorder';
const CategoryList = ({ id, image, name, price, shipping }) => {
    const [bookmarked, setBookmarked] = useState(false);
    const serverUri = import.meta.env.VITE_SERVER_URI;
    const userId = localStorage.getItem('userId');
    const extractKakaoIdFromToken = (token) => {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join(''));
            const parsedToken = JSON.parse(jsonPayload);
            return parsedToken.kakao_Id || null;
        }
        catch (error) {
            console.error('JWT 토큰 파싱 오류:', error);
            return null;
        }
    };
    const handleBookmarkClick = async () => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
            alert('로그인이 필요합니다.');
            return;
        }
        const kakao_Id = extractKakaoIdFromToken(jwtToken);
        if (!kakao_Id) {
            alert('Kakao ID를 찾을 수 없습니다.');
            return;
        }
        try {
            if (bookmarked) {
                await axios.delete(`${serverUri}/api/v1/users/kakao/${encodeURIComponent(kakao_Id)}/bookmarks`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                    params: { productName: name }
                });
                setBookmarked(false);
                alert('북마크가 삭제되었습니다.');
            }
            else {
                await axios.post(`${serverUri}/api/v1/users/kakao/${encodeURIComponent(kakao_Id)}/bookmarks`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`
                    },
                    params: { productName: name }
                });
                setBookmarked(true);
                alert('북마크가 추가되었습니다.');
            }
        }
        catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    alert('유효하지 않은 데이터입니다.');
                }
                else if (error.response.status === 401) {
                    alert('로그인이 필요합니다.');
                }
                else if (error.response.status === 500) {
                    alert('서버 오류가 발생했습니다.');
                }
            }
            else {
                alert('네트워크 오류가 발생했습니다.');
            }
        }
    };
    return (_jsxs(Container, { children: [_jsx(ImageContainer, { children: _jsx("img", { src: image, alt: name, style: { width: '100%', height: '100%', borderRadius: '10px' } }) }), _jsxs(InfoContainer, { children: [_jsx("div", { style: { fontSize: '16px', fontWeight: 'bold' }, children: name }), _jsx(PriceContainer, { children: _jsxs(PriceText, { children: [getNumberWithComma(price), "\uC6D0"] }) }), _jsx(SmallText, { children: '배송비 : ' + shipping }), _jsx(BookmarkCountWrapper, { children: _jsx(IconButton, { onClick: (e) => {
                                e.stopPropagation();
                                handleBookmarkClick();
                            }, style: { paddingLeft: '10px' }, children: bookmarked ? _jsx(Bookmark, {}) : _jsx(BookmarkBorder, {}) }) })] })] }));
};
export default CategoryList;
