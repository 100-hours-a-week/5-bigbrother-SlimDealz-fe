import React from 'react';

const NoResultsSpinner: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '70vh'
      }}
    >
      <video autoPlay loop muted style={{ width: '50%' }}>
        <source src="/public/assets/noResults.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ fontWeight: 'bold', fontSize: '18px', margin: 0 }}>
          검색 결과가 없습니다.
        </p>
        <p style={{ color: '#666', fontSize: '14px', marginTop: '5px' }}>
          다른 검색어를 입력해 보세요.
        </p>
      </div>
    </div>
  );
};

export default NoResultsSpinner;
