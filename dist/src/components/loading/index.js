import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styles } from './styles';
import Lottie from 'lottie-react';
import loadingmain from '@/../public/assets/animations/loadingmain.json';
import loading from '@/../public/assets/animations/loading.json';
import searchingloading from '@/../public/assets/animations/searchingloading.json';
import noResults from '@/../public/assets/animations/noResults.json';
export const LoadingSpinner = () => (_jsx("div", { style: styles.loadingContainer, children: _jsx(Lottie, { animationData: loadingmain, style: styles.loadingVideo }) }));
export const LoadingProduct = () => {
    return (_jsx("div", { style: styles.productContainer, children: _jsx(Lottie, { animationData: loading, style: styles.productVideo }) }));
};
export const LoadingSearch = () => {
    return (_jsx("div", { style: styles.searchContainer, children: _jsx(Lottie, { animationData: searchingloading, style: styles.searchVideo }) }));
};
export const NoResultsSpinner = () => {
    return (_jsxs("div", { style: styles.noResultsContainer, children: [_jsx(Lottie, { animationData: noResults, style: styles.noResultsAnimation }), _jsxs("div", { style: styles.noResultsTextContainer, children: [_jsx("p", { style: styles.noResultsTitle, children: "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." }), _jsx("p", { style: styles.noResultsSubtitle, children: "\uB2E4\uB978 \uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574 \uBCF4\uC138\uC694." })] })] }));
};
