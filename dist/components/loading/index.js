import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styles } from './styles';
export const LoadingSpinner = () => (_jsx("div", { style: styles.loadingContainer, children: _jsx("video", { src: "/assets/loadingmain.webm", autoPlay: true, loop: true, muted: true, style: styles.loadingVideo }) }));
export const LoadingProduct = () => {
    return (_jsx("div", { style: styles.productContainer, children: _jsxs("video", { autoPlay: true, loop: true, muted: true, style: styles.productVideo, children: [_jsx("source", { src: "/public/assets/loading.webm", type: "video/webm" }), "Your browser does not support the video tag."] }) }));
};
export const LoadingSearch = () => {
    return (_jsx("div", { style: styles.searchContainer, children: _jsxs("video", { autoPlay: true, loop: true, muted: true, style: styles.searchVideo, children: [_jsx("source", { src: "/public/assets/searchingloading.webm", type: "video/webm" }), "Your browser does not support the video tag."] }) }));
};
