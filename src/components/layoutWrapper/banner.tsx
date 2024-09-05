import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CarouselIndicators = styled.ol`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1;

  li {
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 5px;
    border-radius: 50%;
    cursor: pointer;
  }

  li.active {
    background-color: #fff;
  }
`;

const CarouselInner = styled.div<{ $activeIndex: number }>`
  display: flex;
  transform: translateX(${(props) => -props.$activeIndex * 100}%);
  transition: transform 0.5s ease-in-out;
`;

const CarouselItem = memo(styled.div<{ $backgroundImage: string }>`
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  background-image: url(${(props) => props.$backgroundImage});
`);

const images = [
  '/assets/banner1.png',
  '/assets/banner2.png',
  '/assets/banner3.png'
];

const Banner = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <CarouselContainer>
      <CarouselIndicators>
        {images.map((_, index) => (
          <li
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => goToSlide(index)}
          ></li>
        ))}
      </CarouselIndicators>

      <CarouselInner $activeIndex={activeIndex}>
        {images.map((image, index) => (
          <CarouselItem key={index} $backgroundImage={image} />
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
});

export default Banner;
