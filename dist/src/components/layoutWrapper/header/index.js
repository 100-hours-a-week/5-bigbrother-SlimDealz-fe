import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { forwardRef, useEffect, useRef } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SearchBar from './SearchBar';
import { HeaderContainer, IconContainer, LogoContainer, SearchContainer, PageTitle } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useHeaderHeight } from '@/components/utils/context/headerHeightContext';
import { SearchContext } from '@/components/utils/context/searchContext';
const logo = '/assets/logo.png';
const Header = forwardRef(({ pageTitle }, ref) => {
    const { setHeight } = useHeaderHeight();
    const { setSearchQuery } = React.useContext(SearchContext);
    const navigate = useNavigate();
    const location = useLocation();
    const headerRef = useRef(null);
    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (headerRef.current) {
                const headerHeight = headerRef.current.offsetHeight;
                setHeight(headerHeight);
            }
        });
        if (headerRef.current) {
            resizeObserver.observe(headerRef.current);
        }
        return () => {
            if (headerRef.current) {
                resizeObserver.unobserve(headerRef.current);
            }
        };
    }, [location.pathname, setHeight]);
    const isMainPage = location.pathname === '/';
    const isCategoryPage = location.pathname.startsWith('/category');
    const isProductPage = /^\/product\/\d+$/.test(location.pathname);
    const isSpecialPage = ['/searchInitial', '/searchResults'].some((path) => location.pathname.startsWith(path)) || isProductPage;
    const isSimplePage = [
        '/alarm',
        '/bookmark',
        '/myPage',
        '/information',
        '/recentlyView',
        '/signUp',
        '/signIn'
    ].includes(location.pathname);
    const hasLogo = isMainPage || isCategoryPage;
    useEffect(() => {
        if (headerRef.current) {
            const headerHeight = headerRef.current.offsetHeight;
            setHeight(headerHeight);
        }
        if (isMainPage) {
            setSearchQuery('');
        }
    }, [location.pathname, setHeight, setSearchQuery, isMainPage]);
    const handleLogoClick = () => {
        navigate('/');
    };
    const handleBackClick = () => {
        if (window.history.length > 2) {
            window.history.back();
        }
        else {
            navigate('/', { replace: true });
        }
    };
    return (_jsxs(HeaderContainer, { ref: headerRef, "$hasLogo": hasLogo, children: [(isSpecialPage || isSimplePage || !isMainPage) && (_jsx(IconContainer, { onClick: handleBackClick, "$isHidden": isMainPage, children: _jsx(ArrowBackRoundedIcon, { style: { cursor: 'pointer' } }) })), _jsx(LogoContainer, { "$isCentered": isMainPage || isCategoryPage, "$isSpecialPage": isSpecialPage, "$isSimplePage": isSimplePage, children: hasLogo && (_jsx("img", { src: logo, alt: "Slimdealz logo", onClick: handleLogoClick, style: { cursor: 'pointer' } })) }), isSimplePage && !isCategoryPage && (_jsx(PageTitle, { "$isSpecialPage": isSpecialPage, "$isSimplePage": isSimplePage, children: pageTitle })), (isMainPage || isCategoryPage || isSpecialPage) && (_jsx(SearchContainer, { "$isSpecialPage": isSpecialPage, "$isSimplePage": isSimplePage, children: _jsx(SearchBar, {}) }))] }));
});
export default Header;
