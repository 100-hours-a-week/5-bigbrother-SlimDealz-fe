export const styles = {
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 9999
  },
  loadingVideo: {
    maxWidth: '80%',
    maxHeight: '80%'
  },
  productContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
  },
  productVideo: {
    width: '50%'
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh'
  },
  searchVideo: {
    width: '100%'
  },
  noResultsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
    height: '70vh'
  },
  noResultsAnimation: {
    width: '50%'
  },
  noResultsTextContainer: {
    textAlign: 'center' as 'center',
    marginTop: '20px'
  },
  noResultsTitle: {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: 0
  },
  noResultsSubtitle: {
    color: '#666',
    fontSize: '14px',
    marginTop: '5px'
  }
};
