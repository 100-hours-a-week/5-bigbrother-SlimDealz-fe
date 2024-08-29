import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { FooterContainer } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
const Footer = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setValue(0);
                break;
            case '/recentlyView':
                setValue(1);
                break;
            case '/notifications':
                setValue(2);
                break;
            case '/bookmark':
                setValue(3);
                break;
            case '/myPage':
                setValue(4);
                break;
            default:
                setValue(0);
        }
    }, [location.pathname]);
    const isAuthenticated = () => {
        const token = localStorage.getItem('jwtToken');
        return token !== null;
    };
    const handleNavigation = (newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/comingSoon');
                break;
            case 2:
                navigate('/comingSoon');
                break;
            case 3:
                navigate('/bookmark');
                break;
            case 4:
                if (isAuthenticated()) {
                    navigate('/myPage');
                }
                else {
                    navigate('/signIn');
                }
                break;
            default:
                navigate('/');
        }
    };
    const shouldShowNavigationIcon = () => {
        return ['/category', '/searchResults', '/bookmark'].some((path) => location.pathname.startsWith(path));
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (_jsxs(FooterContainer, { children: [_jsx("div", { style: {
                    width: 390
                }, children: _jsxs(BottomNavigation, { showLabels: true, value: value, onChange: (event, newValue) => {
                        handleNavigation(newValue);
                    }, sx: {
                        '& .Mui-selected': {
                            color: '#112f08 !important'
                        },
                        '& .MuiBottomNavigationAction-root': {
                            color: '#5c5b5b'
                        }
                    }, children: [_jsx(BottomNavigationAction, { label: "Home", icon: _jsx(HomeOutlinedIcon, {}) }), _jsx(BottomNavigationAction, { label: "Recents", icon: _jsx(ArchiveOutlinedIcon, {}) }), _jsx(BottomNavigationAction, { label: "Notifications", icon: _jsx(NotificationsRoundedIcon, {}) }), _jsx(BottomNavigationAction, { label: "Bookmarks", icon: _jsx(BookmarkRoundedIcon, {}) }), _jsx(BottomNavigationAction, { label: "My page", icon: _jsx(AccountCircleOutlinedIcon, {}) })] }) }), shouldShowNavigationIcon() && (_jsx(Fab, { color: "primary", "aria-label": "scroll back to top", onClick: scrollToTop, sx: {
                    position: 'fixed',
                    bottom: 80,
                    right: 16,
                    backgroundColor: '#FFC0CB',
                    '&:hover': {
                        backgroundColor: '#FFB6C1'
                    }
                }, children: _jsx(NavigationIcon, {}) }))] }));
};
export default Footer;
