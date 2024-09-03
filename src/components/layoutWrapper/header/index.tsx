import React, { forwardRef, useEffect, useRef } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SearchBar from './SearchBar';
import {
  HeaderContainer,
  IconContainer,
  LogoContainer,
  SearchContainer,
  PageTitle,
  MenuItem,
  MenuItemsContainer
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useHeaderHeight } from '@/components/utils/context/headerHeightContext';
import { SearchContext } from '@/components/utils/context/searchContext';

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

  const hasLogo = isMainPage || isCategoryPage;

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
      // 뒤로 갈 히스토리가 있는 경우
      window.history.back();
    } else {
      navigate('/', { replace: true }); // 히스토리가 없으면 메인 페이지로 이동하고, 이동된 히스토리를 삭제
    }
  };

  return (
    <HeaderContainer ref={headerRef} $hasLogo={hasLogo}>
      {(isSpecialPage || isSimplePage || !isMainPage) && (
        <IconContainer onClick={handleBackClick} $isHidden={isMainPage}>
          <ArrowBackRoundedIcon style={{ cursor: 'pointer' }} />
        </IconContainer>
      )}
      <LogoContainer
        $isCentered={isMainPage || isCategoryPage}
        $isSpecialPage={isSpecialPage}
        $isSimplePage={isSimplePage}
      >
        {hasLogo && (
          <img
            src="/assets/logo.png"
            alt="Slimdealz logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
        )}
      </LogoContainer>
      {isSimplePage && !isCategoryPage && (
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
      {isMainPage && (
        <MenuItemsContainer>
          <MenuItem>
            <img src="/assets/icons/chicken.png" alt="chicken" />
            닭가슴살
          </MenuItem>
          <MenuItem>
            <img src="/assets/icons/protein.png" alt="protein" />
            프로틴
          </MenuItem>
          <MenuItem>
            <img src="/assets/icons/salad.png" alt="salad" />
            샐러드
          </MenuItem>
        </MenuItemsContainer>
      )}
    </HeaderContainer>
  );
});

export default Header;
