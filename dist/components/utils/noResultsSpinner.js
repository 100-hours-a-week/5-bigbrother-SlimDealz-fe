import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const NoResultsSpinner = () => {
    return (_jsxs("div", { style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '70vh'
        }, children: [_jsxs("video", { autoPlay: true, loop: true, muted: true, style: { width: '50%' }, children: [_jsx("source", { src: "/public/assets/noResults.webm", type: "video/webm" }), "Your browser does not support the video tag."] }), _jsxs("div", { style: { textAlign: 'center', marginTop: '20px' }, children: [_jsx("p", { style: { fontWeight: 'bold', fontSize: '18px', margin: 0 }, children: "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." }), _jsx("p", { style: { color: '#666', fontSize: '14px', marginTop: '5px' }, children: "\uB2E4\uB978 \uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD574 \uBCF4\uC138\uC694." })] })] }));
};
export default NoResultsSpinner;
