import React, { forwardRef, useEffect, useRef, useState } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SearchBar from './SearchBar';
import {
  HeaderContainer,
  IconContainer,
  LogoContainer,
  SearchContainer,
  PageTitle
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useHeaderHeight } from '@/components/utils/context/headerHeightContext';
import { SearchContext } from '@/components/utils/context/searchContext';
import MenuItemsContainer from '@/components/list/menuItemsList';

type HeaderProps = {
  pageTitle?: string;
  onBackNavigation?: () => void;
};

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ pageTitle }, ref) => {
  const { setHeight } = useHeaderHeight();
  const { setSearchQuery } = React.useContext(SearchContext);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const stickyPoint = menuRef.current.offsetTop; // 메뉴의 상단 위치
        if (window.scrollY > stickyPoint) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
  const isSpecialPage =
    ['/searchInitial', '/searchResults'].some((path) =>
      location.pathname.startsWith(path)
    ) || isProductPage;

  const isSimplePage = [
    '/alarm',
    '/bookmark',
    '/myPage',
    '/information',
    '/recentlyView',
    '/signUp',
    '/signIn'
  ].includes(location.pathname);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setHeight(headerHeight);
    }

    // Clear search query if on the main page
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
    } else {
      navigate('/', { replace: true });
    }
  };

  const menuItems = [
    { src: '/assets/icons/chicken.png', alt: 'chicken', label: '닭가슴살' },
    { src: '/assets/icons/protein.png', alt: 'protein', label: '프로틴' },
    { src: '/assets/icons/salad.png', alt: 'salad', label: '샐러드' }
  ];

  return (
    <HeaderContainer ref={headerRef}>
      {(isSpecialPage || isSimplePage || !isMainPage) && (
        <IconContainer onClick={handleBackClick} $isHidden={isMainPage}>
          <ArrowBackRoundedIcon style={{ cursor: 'pointer' }} />
        </IconContainer>
      )}
      <LogoContainer
        $isCentered={isMainPage}
        $isSpecialPage={isSpecialPage}
        $isSimplePage={isSimplePage}
      >
        {isMainPage && (
          <img
            src="/assets/logo.png"
            alt="Slimdealz logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
        )}
      </LogoContainer>
      {isSimplePage && (
        <PageTitle $isSpecialPage={isSpecialPage} $isSimplePage={isSimplePage}>
          {pageTitle}
        </PageTitle>
      )}
      {(isMainPage || isCategoryPage || isSpecialPage) && (
        <SearchContainer
          $isSpecialPage={isSpecialPage}
          $isSimplePage={isSimplePage}
        >
          <SearchBar />
        </SearchContainer>
      )}
      {isMainPage && <MenuItemsContainer menuItems={menuItems} />}
    </HeaderContainer>
  );
});

export default Header;
