import { styles } from './styles';
import Lottie from 'lottie-react';
import loadingmain from '@/../public/assets/animations/loadingmain.json';
import loading from '@/../public/assets/animations/loading.json';
import searchingloading from '@/../public/assets/animations/searchingloading.json';
import noResults from '@/../public/assets/animations/noResults.json';

export const LoadingSpinner = () => (
  <div style={styles.loadingContainer}>
    <Lottie animationData={loadingmain} style={styles.loadingVideo} />
  </div>
);

export const LoadingProduct = () => {
  return (
    <div style={styles.productContainer}>
      <Lottie animationData={loading} style={styles.productVideo} />
    </div>
  );
};

export const LoadingSearch = () => {
  return (
    <div style={styles.searchContainer}>
      <Lottie animationData={searchingloading} style={styles.searchVideo} />
    </div>
  );
};

export const NoResultsSpinner = () => {
  return (
    <div style={styles.noResultsContainer}>
      <Lottie animationData={noResults} style={styles.noResultsAnimation} />
      <div style={styles.noResultsTextContainer}>
        <p style={styles.noResultsTitle}>검색 결과가 없습니다.</p>
        <p style={styles.noResultsSubtitle}>다른 검색어를 입력해 보세요.</p>
      </div>
    </div>
  );
};
