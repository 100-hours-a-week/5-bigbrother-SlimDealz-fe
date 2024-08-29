import { jsx as _jsx } from "react/jsx-runtime";
const ImageComponent = ({ src, alt, width, height }) => {
    return (_jsx("img", { src: src, alt: alt, style: { width: width || 'auto', height: height || 'auto' } }));
};
export default ImageComponent;
