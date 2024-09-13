import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SliderContainer, Title, MoreButton } from './styles';

interface SliderNameProps {
  title: string;
  showMoreButton?: boolean;
  moreButtonLink?: string;
}

const SliderName: React.FC<SliderNameProps> = ({
  title,
  showMoreButton = false,
  moreButtonLink = '/'
}) => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    if (moreButtonLink) {
      navigate(moreButtonLink);
    }
  };

  return (
    <SliderContainer>
      <Title>{title}</Title>
      {showMoreButton && (
        <MoreButton onClick={handleMoreClick}>더보기 &gt;</MoreButton>
      )}
    </SliderContainer>
  );
};

export default SliderName;
