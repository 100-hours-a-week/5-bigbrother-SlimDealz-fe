import { styles } from './styles';

export const LoadingSpinner = () => (
  <div style={styles.loadingContainer}>
    <video
      src="/assets/loadingmain.webm"
      autoPlay
      loop
      muted
      style={styles.loadingVideo}
    />
  </div>
);

export const LoadingProduct = () => {
  return (
    <div style={styles.productContainer}>
      <video autoPlay loop muted style={styles.productVideo}>
        <source src="/public/assets/loading.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export const LoadingSearch = () => {
  return (
    <div style={styles.searchContainer}>
      <video autoPlay loop muted style={styles.searchVideo}>
        <source src="/public/assets/searchingloading.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
