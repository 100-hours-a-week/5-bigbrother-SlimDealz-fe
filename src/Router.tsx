import React, { Suspense, memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OutLetContainer from './pages';
import ScrollToTop from './components/utils/scrollToTop/scrollToTop';
import { SearchProvider } from './components/utils/context/searchContext';
import { HeaderHeightProvider } from './components/utils/context/headerHeightContext';
import MainPage from './pages/main';
import MyMainPage from './pages/user/myMain';
import SignInPage from './pages/signIn';
import UserBookmarkPage from './pages/user/bookmark';
import ComingSoon from './components/utils/comingSoon';
import { LoadingSpinner } from './components/loading';

// 동적 import()를 사용한 페이지 컴포넌트 로드
const CategoryPage = React.lazy(() => import('./pages/category'));
const DetailPage = React.lazy(() => import('./pages/detail'));
const SearchInitialPage = React.lazy(() => import('./pages/search/initial'));
const SearchResultsPage = React.lazy(() => import('./pages/search/results'));
const UserAlarmPage = React.lazy(() => import('./pages/user/alarm'));
const UserRecentlyViewPage = React.lazy(
  () => import('./pages/user/recentlyView')
);

const Router = memo(() => {
  return (
    <SearchProvider>
      <HeaderHeightProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<OutLetContainer />}>
                <Route path="/" element={<MainPage />} />
                <Route
                  path="/category/:categoryType"
                  element={<CategoryPage />}
                />
                <Route path="/product/:productName" element={<DetailPage />} />
                <Route path="/searchInitial" element={<SearchInitialPage />} />
                <Route
                  path="/searchResults/:keyword"
                  element={<SearchResultsPage />}
                />
                <Route path="/signIn" element={<SignInPage />} />
                <Route path="/myPage" element={<MyMainPage />} />
                <Route path="/notifications" element={<UserAlarmPage />} />
                <Route path="/bookmark" element={<UserBookmarkPage />} />
                <Route
                  path="/recentlyView"
                  element={<UserRecentlyViewPage />}
                />
                <Route path="/comingSoon" element={<ComingSoon />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HeaderHeightProvider>
    </SearchProvider>
  );
});

export default Router;
