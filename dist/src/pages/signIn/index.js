import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Header, Section, Description, KakaoButton } from './styles';
import { useNavigate } from 'react-router-dom';
const SignInPage = () => {
    const navigate = useNavigate();
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_API_KEY}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_SERVER_URI)}/auth/kakao/callback&response_type=code`;
    if (!import.meta.env.VITE_KAKAO_API_KEY || !import.meta.env.VITE_SERVER_URI) {
        console.error('Kakao API Key or Redirect URI is missing.');
        return (_jsxs(Container, { children: [_jsx(Header, { children: _jsx("img", { src: "/assets/logo.png", alt: "Slimdealz logo" }) }), _jsx(Section, { children: _jsxs(Description, { children: ["\uCE74\uCE74\uC624 \uB85C\uADF8\uC778 \uC124\uC815\uC774", _jsx("br", {}), " \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. ", _jsx("br", {}), "\uD658\uACBD \uBCC0\uC218\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694!"] }) })] }));
    }
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };
    return (_jsxs(Container, { children: [_jsx(Header, { children: _jsx("img", { src: "/assets/logo.png", alt: "Slimdealz logo" }) }), _jsxs(Section, { children: [_jsxs(Description, { children: ["\uAC04\uD3B8\uD558\uAC8C \uB85C\uADF8\uC778\uD558\uACE0 ", _jsx("br", {}), "\uB2E4\uC591\uD55C \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD574\uBCF4\uC138\uC694."] }), _jsxs(KakaoButton, { className: "kakao-login", onClick: handleLogin, children: [_jsx("span", { role: "img", "aria-label": "kakao-logo", children: "\uD83D\uDDE8\uFE0F" }), ' ', "\uCE74\uCE74\uC624 \uB85C\uADF8\uC778"] })] })] }));
};
export default SignInPage;
