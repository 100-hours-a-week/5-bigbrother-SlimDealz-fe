import React from 'react';
import ImageComponent from '../imageView/ImageComponent';
import { ImageViewContainer } from './styles';

interface ImageViewProps {
  src: string;
  alt: string;
}

const ImageView: React.FC<ImageViewProps> = ({ src, alt }) => {
  return (
    <ImageViewContainer>
      <ImageComponent src={src} alt={alt} width="300px" height="auto" />
    </ImageViewContainer>
  );
};

export default ImageView;
