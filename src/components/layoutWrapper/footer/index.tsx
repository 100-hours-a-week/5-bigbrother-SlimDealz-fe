import React, { useEffect, useState } from 'react';
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
import { getCookie } from '@/components/utils/cookieUtils';

const Footer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
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

    const jwtToken = getCookie('jwtToken');

    if (jwtToken) {
      setIsAuthenticated(true);
    } else setIsAuthenticated(false);
  }, [location.pathname]);

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/recentlyView');
        break;
      case 2:
        navigate('/comingSoon');
        // navigate('/notifications');
        break;
      case 3:
        navigate('/bookmark');
        break;
      case 4:
        if (isAuthenticated) {
          navigate('/myPage');
        } else {
          navigate('/signIn');
        }
        break;
      default:
        navigate('/');
    }
  };

  const shouldShowNavigationIcon = () => {
    return ['/category', '/searchResults', '/bookmark'].some((path) =>
      location.pathname.startsWith(path)
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <div
        style={{
          width: 390
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            handleNavigation(newValue);
          }}
          sx={{
            '& .Mui-selected': {
              color: '#112f08 !important'
            },
            '& .MuiBottomNavigationAction-root': {
              color: '#5c5b5b'
            }
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
          <BottomNavigationAction
            label="Recents"
            icon={<ArchiveOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Notifications"
            icon={<NotificationsRoundedIcon />}
          />
          <BottomNavigationAction
            label="Bookmarks"
            icon={<BookmarkRoundedIcon />}
          />
          <BottomNavigationAction
            label="My page"
            icon={<AccountCircleOutlinedIcon />}
          />
        </BottomNavigation>
      </div>
      {shouldShowNavigationIcon() && (
        <Fab
          color="primary"
          aria-label="scroll back to top"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 80,
            right: 16,
            backgroundColor: '#FFC0CB',
            '&:hover': {
              backgroundColor: '#FFB6C1'
            }
          }}
        >
          <NavigationIcon />
        </Fab>
      )}
    </FooterContainer>
  );
};

export default Footer;
