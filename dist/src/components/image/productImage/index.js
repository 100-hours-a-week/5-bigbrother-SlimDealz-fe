import { jsx as _jsx } from "react/jsx-runtime";
import ImageComponent from '../imageView/ImageComponent';
import { ImageViewContainer } from './styles';
const ImageView = ({ src, alt }) => {
    return (_jsx(ImageViewContainer, { children: _jsx(ImageComponent, { src: src, alt: alt, width: "300px", height: "300px" }) }));
};
export default ImageView;
