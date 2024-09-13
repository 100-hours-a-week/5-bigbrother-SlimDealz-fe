import React, { useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FiBox } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsBookmark } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { FooterContainer, StyledNavAction, CenterIconWrapper } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { getCookie } from '@/components/utils/cookieUtils';

interface NavActionProps {
  icon: JSX.Element;
  label: string;
  active: boolean;
  onClick: () => void;
}

const CustomBottomNavigationAction: React.FC<NavActionProps> = ({
  icon,
  label,
  active,
  onClick
}) => (
  <StyledNavAction $active={active} onClick={onClick}>
    {icon}
    <span>{label}</span>
  </StyledNavAction>
);

const Footer = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [value, setValue] = useState(0);
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

  const shouldShowNavigationIcon = () => {
    return ['/category', '/searchResults', '/bookmark'].some((path) =>
      location.pathname.startsWith(path)
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <FooterContainer>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <CustomBottomNavigationAction
          icon={<AiOutlineHome />}
          label="홈"
          active={value === 0}
          onClick={() => handleNavigation(0)}
        />
        <CustomBottomNavigationAction
          icon={<FiBox />}
          label="최근본상품"
          active={value === 1}
          onClick={() => handleNavigation(1)}
        />
        <CenterIconWrapper
          $active={value === 2}
          onClick={() => handleNavigation(2)}
        >
          <IoMdNotificationsOutline />
        </CenterIconWrapper>

        <CustomBottomNavigationAction
          icon={<BsBookmark />}
          label="북마크 상품"
          active={value === 3}
          onClick={() => handleNavigation(3)}
        />
        <CustomBottomNavigationAction
          icon={<FaRegUserCircle />}
          label="마이페이지"
          active={value === 4}
          onClick={() => handleNavigation(4)}
        />
      </div>
      {shouldShowNavigationIcon() && (
        <Fab
          color="primary"
          aria-label="scroll back to top"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 75,
            right: 16,
            height: '30px',
            width: '36px',
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
