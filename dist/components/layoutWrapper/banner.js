import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
const CarouselContainer = styled.div `
  position: relative;
  width: 100%;
  overflow: hidden;
`;
const CarouselIndicators = styled.ol `
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
const CarouselInner = styled.div `
  display: flex;
  transform: translateX(${(props) => -props.$activeIndex * 100}%);
  transition: transform 0.5s ease-in-out;
`;
const CarouselItem = styled.div `
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  background-image: url(${(props) => props.$backgroundImage});
`;
const images = [
    '/assets/banner1.png',
    '/assets/banner2.png',
    '/assets/banner3.png'
];
const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const goToSlide = (index) => {
        setActiveIndex(index);
    };
    return (_jsxs(CarouselContainer, { children: [_jsx(CarouselIndicators, { children: images.map((_, index) => (_jsx("li", { className: activeIndex === index ? 'active' : '', onClick: () => goToSlide(index) }, index))) }), _jsx(CarouselInner, { "$activeIndex": activeIndex, children: images.map((image, index) => (_jsx(CarouselItem, { "$backgroundImage": image }, index))) })] }));
};
export default Banner;
