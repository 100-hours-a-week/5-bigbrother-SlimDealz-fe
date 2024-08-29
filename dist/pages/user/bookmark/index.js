import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, CustomBox, CustomButton } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { LoadingProduct } from '@/components/loading';
const UserBookmarkPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const serverUri = import.meta.env.VITE_SERVER_URI;
    useEffect(() => {
        const authenticateAndFetchBookmarks = async () => {
            const jwtToken = localStorage.getItem('jwtToken');
            if (!jwtToken) {
                setIsAuthenticated(false);
                console.log('JWT 토큰이 없습니다.');
                setLoading(false);
                return;
            }
            const kakao_Id = extractKakaoIdFromToken(jwtToken);
            if (!kakao_Id) {
                setIsAuthenticated(false);
                console.log('Kakao_ID를 찾을 수 없습니다.');
                setLoading(false);
                return;
            }
            try {
                const bookmarksResponse = await axios.get(`${serverUri}/api/v1/users/kakao/${encodeURIComponent(kakao_Id)}/bookmarks`, {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                    },
                });
                if (bookmarksResponse.status === 200) {
                    setIsAuthenticated(true);
                    setBookmarks(bookmarksResponse.data);
                }
                else {
                    throw new Error('북마크 데이터를 가져오는 데 실패했습니다.');
                }
            }
            catch (err) {
                if (err.response) {
                    if (err.response.status === 400) {
                        console.log('잘못된 데이터 요청입니다.');
                    }
                    else if (err.response.status === 401) {
                        console.log('권한이 없습니다.');
                    }
                    else if (err.response.status === 500) {
                        console.log('서버 오류가 발생했습니다.');
                    }
                }
                else {
                    console.log('네트워크 오류가 발생했습니다.');
                }
            }
            finally {
                setLoading(false);
            }
        };
        authenticateAndFetchBookmarks();
    }, [serverUri]);
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
    if (loading) {
        return _jsx(LoadingProduct, {});
    }
    if (!isAuthenticated) {
        return (_jsx(Container, { children: _jsxs(CustomBox, { children: [_jsx(Typography, { variant: "h6", gutterBottom: true, children: "\uBD81\uB9C8\uD06C\uD55C \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4" }), _jsx(Typography, { variant: "body2", color: "textSecondary", children: "\uB85C\uADF8\uC778\uD558\uACE0 \uAD00\uC2EC \uC0C1\uD488\uC758 \uCD5C\uC800\uAC00 \uC18C\uC2DD\uC744 \uBC1B\uC544\uBCF4\uC138\uC694." }), _jsx(CustomButton, { onClick: () => navigate('/signIn'), children: "\uB85C\uADF8\uC778\uD558\uAE30" })] }) }));
    }
    return (_jsxs(Container, { children: [_jsx(PageNameTag, { pageName: `전체 ${bookmarks.length}개` }), bookmarks.map((bookmark) => (_jsx(CategoryList, { id: bookmark.productId, image: bookmark.image || 'default_image_url_here', name: bookmark.productName, shipping: bookmark.shippingFee, price: bookmark.prices[0]?.setPrice }, bookmark.bookmarkId)))] }));
};
export default UserBookmarkPage;
