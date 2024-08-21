import React, { useState } from 'react';
import styled from 'styled-components';

const colors = {
  vueTeal: '#42b883',
  vueNavy: '#2c3e50',
  gray: '#666a73',
  lightGray: '#f8f8f8'
};

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: ${colors.gray};
  background: ${colors.lightGray};
  font-family: 'Source Sans Pro', sans-serif;
  width: 100%;
`;

const SliderTitle = styled.h2`
  margin-bottom: 20px;
  color: ${colors.vueNavy};
  font-size: 20px;
  font-weight: bold;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const NavButton = styled.button<{ direction: 'left' | 'right' }>`
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: 1px solid ${colors.vueTeal};
  cursor: pointer;
  transition: transform 150ms linear;
  z-index: 2;
  color: ${colors.vueTeal};

  &:before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-top: 2px solid ${colors.vueTeal};
    border-right: 2px solid ${colors.vueTeal};
    transform: ${({ direction }) =>
      direction === 'left' ? 'rotate(-135deg)' : 'rotate(45deg)'};
  }

  ${({ direction }) =>
    direction === 'left'
      ? `
    left: -25px;
  `
      : `
    right: -25px;
  `}
`;

const Cards = styled.div<{ offset: number }>`
  display: flex;
  transition: transform 150ms ease-out;
  transform: translateX(${({ offset }) => offset}px);
`;

const Card = styled.div`
  margin: 0 10px;
  cursor: pointer;
  box-shadow:
    0 4px 15px rgba(40, 44, 53, 0.06),
    0 2px 2px rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 1;
  margin-bottom: 2px;

  img {
    width: 200px;
    height: 200px;
    vertical-align: bottom;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: opacity 150ms linear;
    user-select: none;

    &:hover {
      opacity: 0.5;
    }
  }

  .card-footer {
    padding: 10px;
    text-align: left;

    p {
      margin: 0;
      color: ${colors.vueNavy};
      font-size: 14px;
    }

    .tag {
      font-size: 11px;
      color: ${colors.gray};
      display: inline-block;
      margin-right: 5px;
      &:before {
        content: '•';
        margin-right: 3px;
      }
    }
  }
`;

type TwoSliderProps = {
  items: { name: string; tag: string[] }[];
  title: string;
};

const TwoSlider: React.FC<TwoSliderProps> = ({ items, title }) => {
  const [currentOffset, setCurrentOffset] = useState(0);
  const cardWidth = 220; // Adjust the width of the card to fit the design
  const cardMargin = 20;
  const visibleCards = 3;
  const totalWidth = (cardWidth + cardMargin) * visibleCards;
  const maxOffset = -(items.length - visibleCards) * (cardWidth + cardMargin);

  const moveCarousel = (direction: 'left' | 'right') => {
    if (direction === 'right' && currentOffset > maxOffset) {
      setCurrentOffset(currentOffset - (cardWidth + cardMargin));
    } else if (direction === 'left' && currentOffset < 0) {
      setCurrentOffset(currentOffset + (cardWidth + cardMargin));
    }
  };

  return (
    <SliderWrapper>
      <SliderTitle>{title}</SliderTitle>
      <SliderContainer>
        <NavButton
          direction="left"
          onClick={() => moveCarousel('left')}
          disabled={currentOffset === 0}
        />
        <Cards offset={currentOffset}>
          {items.map((item, index) => (
            <Card key={index}>
              <img src="https://placehold.it/200x200" alt={item.name} />
              <div className="card-footer">
                <p>{item.name}</p>
                {item.tag.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </Cards>
        <NavButton
          direction="right"
          onClick={() => moveCarousel('right')}
          disabled={currentOffset <= maxOffset}
        />
      </SliderContainer>
    </SliderWrapper>
  );
};

export default TwoSlider;
