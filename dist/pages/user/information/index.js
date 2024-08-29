import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { styles } from './styles';
const UserInformationPage = () => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [role, setRole] = useState('');
    const [kakao_Id, setKakao_Id] = useState('');
    const [name, setName] = useState('');
    const [card, setCard] = useState('');
    const [notification_agree, setNotification_Agree] = useState(false);
    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            const decodedToken = parseJwt(jwtToken);
            setName(decodedToken.name);
            setProfileImageUrl(decodedToken.profile_image);
            setRole(decodedToken.role);
            setKakao_Id(decodedToken.kakao_Id);
            fetchUserProfile(decodedToken.kakao_Id, jwtToken);
        }
    }, []);
    const fetchUserProfile = async (kakao_Id, jwtToken) => {
        try {
            const response = await axios.get(`/api/v1/users/${encodeURIComponent(kakao_Id)}/profile`, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            });
            const { nickname, card, notification_agree } = response.data;
            setNickname(nickname);
            setCard(card);
            setNotification_Agree(notification_agree);
        }
        catch (error) {
            console.error('사용자 정보를 가져오는 중 오류 발생:', error);
        }
    };
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
        try {
            const jwtToken = localStorage.getItem('jwtToken');
            if (!jwtToken) {
                throw new Error('JWT 토큰이 없습니다.');
            }
            const updateData = {
                nickname,
                card,
                notification_agree
            };
            await axios.put(`http://localhost:8080/api/v1/users/${encodeURIComponent(kakao_Id)}/profile`, updateData, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            });
            alert('회원 정보가 성공적으로 수정되었습니다.');
            navigate('/main');
        }
        catch (error) {
            console.error('사용자 정보를 업데이트하는 중 오류 발생:', error);
            alert('회원 정보 수정 중 오류가 발생했습니다.');
        }
    };
    return (_jsxs("div", { style: styles.userProfileContainer, children: [_jsxs("div", { style: styles.navBar, children: [_jsx("button", { style: styles.navBarButton, onClick: () => navigate(-1), children: "\u2190" }), _jsx("h2", { children: "\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815" })] }), _jsxs("div", { style: styles.userInfoSection, children: [_jsx("h2", { children: "\uC0AC\uC6A9\uC790 \uC815\uBCF4" }), profileImageUrl && (_jsx("img", { src: profileImageUrl, alt: "Profile", style: { width: '150px', height: '150px', borderRadius: '50%' } })), _jsxs("p", { children: [_jsx("strong", { children: "\uC774\uB984:" }), " ", name] }), _jsxs("p", { children: [_jsx("strong", { children: "\uC5ED\uD560:" }), " ", role] }), _jsxs("p", { children: [_jsx("strong", { children: "\uC18C\uC15C ID:" }), " ", kakao_Id] })] }), _jsxs("div", { style: styles.userInfoSection, children: [_jsx("h2", { children: "\uC218\uC815 \uAC00\uB2A5 \uB780" }), _jsxs("div", { style: styles.formGroup, children: [_jsx("label", { style: styles.formGroupLabel, children: "\uB2C9\uB124\uC784:" }), _jsx("input", { type: "text", style: styles.formGroupInput, value: nickname, onChange: (e) => setNickname(e.target.value), placeholder: "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD558\uC138\uC694" })] }), _jsxs("div", { style: styles.formGroup, children: [_jsx("label", { style: styles.formGroupLabel, children: "\uCE74\uB4DC \uC815\uBCF4:" }), _jsx("input", { type: "text", style: styles.formGroupInput, value: card, onChange: (e) => setCard(e.target.value), placeholder: "\uCE74\uB4DC \uC815\uBCF4\uB97C \uC785\uB825\uD558\uC138\uC694" })] }), _jsx("div", { style: styles.checkboxGroup, children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: notification_agree, onChange: (e) => setNotification_Agree(e.target.checked) }), "\uC54C\uB9BC \uC218\uC2E0 \uB3D9\uC758"] }) }), _jsx("button", { style: styles.actionButtonSubmit, onClick: handleSubmit, children: "\uC815\uBCF4 \uC218\uC815 \uC644\uB8CC" })] })] }));
};
export default UserInformationPage;
