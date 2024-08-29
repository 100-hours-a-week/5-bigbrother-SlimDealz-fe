import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from '../components/layoutWrapper/footer';
import Header from '../components/layoutWrapper/header';
import { Outlet, useLocation } from 'react-router-dom';
import { useHeaderHeight } from '@/components/utils/context/headerHeightContext';
import { styles } from './styles';
const OutLetContainer = () => {
    const location = useLocation();
    const { height } = useHeaderHeight();
    let pageTitle = '';
    if (location.pathname.includes('/bookmark')) {
        pageTitle = 'BOOKMARKS';
    }
    else if (location.pathname.includes('/myPage')) {
        pageTitle = 'MY PAGE';
    }
    else if (location.pathname.includes('/alarm')) {
        pageTitle = '알람';
    }
    else if (location.pathname.includes('/information')) {
        pageTitle = '회원가입 추가 정보';
    }
    return (_jsxs(_Fragment, { children: [_jsx(Header, { pageTitle: pageTitle }), _jsx(styles.Container, { "$paddingTop": height, children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
};
export default OutLetContainer;
