import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { styles } from './styles';
const SignUpPage = () => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [role, setRole] = useState('');
    const [kakao_Id, setKakao_Id] = useState('');
    const [name, setName] = useState('');
    const [card, setCard] = useState('');
    const [notification_agree, setNotification_Agree] = useState(false);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const jwtToken = urlParams.get('jwtToken');
        const refreshToken = urlParams.get('refreshToken');
        if (jwtToken && refreshToken) {
            localStorage.setItem('jwtToken', jwtToken);
            localStorage.setItem('refreshToken', refreshToken);
            const decodedToken = parseJwt(jwtToken);
            setName(decodedToken.name);
            setRole(decodedToken.role);
            setKakao_Id(decodedToken.kakao_Id);
            setProfileImageUrl(decodedToken.profile_image);
            const newUrl = window.location.origin + window.location.pathname;
            window.history.replaceState(null, '', newUrl);
        }
    }, []);
    function parseJwt(token) {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64)
                .split('')
                .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
                .join(''));
            return JSON.parse(jsonPayload);
        }
        catch (error) {
            console.error('토큰 파싱 중 오류 발생:', error);
            return null;
        }
    }
    const handleSubmit = async () => {
        const memberData = {
            name,
            nickname,
            kakao_Id,
            profileImage: profileImageUrl,
            role,
            card,
            notification_agree
        };
        try {
            const jwtToken = localStorage.getItem('jwtToken');
            const response = await axios.post(import.meta.env.VITE_SERVER_URI + '/api/v1/users/kakaologin', memberData, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            });
            console.log('회원 정보 저장 성공:', response.data);
            navigate('/');
        }
        catch (error) {
            console.error('회원 정보 저장 실패:', error);
        }
    };
    return (_jsxs("div", { style: styles.userProfileContainer, children: [_jsxs("div", { style: styles.navBar, children: [_jsx("button", { style: styles.navBarButton, onClick: () => navigate(-1), children: "\u2190" }), _jsx("h2", { children: "\uD68C\uC6D0\uAC00\uC785 \uCD94\uAC00 \uC815\uBCF4" })] }), _jsxs("div", { style: styles.userInfoSection, children: [_jsx("h2", { children: "\uC0AC\uC6A9\uC790 \uC815\uBCF4" }), profileImageUrl && (_jsx("img", { src: profileImageUrl, alt: "Profile", style: { width: '150px', height: '150px', borderRadius: '50%' } })), _jsxs("p", { children: [_jsx("strong", { children: "\uC774\uB984:" }), " ", name] }), _jsxs("p", { children: [_jsx("strong", { children: "\uC5ED\uD560:" }), " ", role] }), _jsxs("p", { children: [_jsx("strong", { children: "\uC18C\uC15C ID:" }), " ", kakao_Id] })] }), _jsxs("div", { style: styles.userInfoSection, children: [_jsx("h2", { children: "\uD68C\uC6D0 \uC815\uBCF4 \uC785\uB825" }), _jsxs("div", { style: styles.formGroup, children: [_jsx("label", { style: styles.formGroupLabel, children: "\uB2C9\uB124\uC784:" }), _jsx("input", { type: "text", style: styles.formGroupInput, value: nickname, onChange: (e) => setNickname(e.target.value), placeholder: "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD558\uC138\uC694" })] }), _jsxs("div", { style: styles.formGroup, children: [_jsx("label", { style: styles.formGroupLabel, children: "\uCE74\uB4DC \uC815\uBCF4:" }), _jsx("input", { type: "text", style: styles.formGroupInput, value: card, onChange: (e) => setCard(e.target.value), placeholder: "\uCE74\uB4DC \uC815\uBCF4\uB97C \uC785\uB825\uD558\uC138\uC694" })] }), _jsx("div", { style: styles.checkboxGroup, children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: notification_agree, onChange: (e) => setNotification_Agree(e.target.checked) }), "\uC54C\uB9BC \uC218\uC2E0 \uB3D9\uC758"] }) }), _jsx("button", { style: styles.actionButtonSubmit, onClick: handleSubmit, children: "\uD68C\uC6D0\uAC00\uC785 \uC644\uB8CC" })] })] }));
};
export default SignUpPage;
