import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Section, SectionTitle, ArrowIcon, LogoutButtonContainer, LogoutButton } from './styles';
import PagePreparationModal from '@/components/modal/pagePreparationModal';
import LogoutModal from '@/components/modal/logOutModal';
const MyMainPage = () => {
    const navigate = useNavigate();
    const [isPreModalOpen, setIsPreModalOpen] = useState(false);
    const [isLogModalOpen, setIsLogModalOpen] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            navigate('/signIn');
        }
    }, [navigate]);
    const closePreModal = () => {
        setIsPreModalOpen(false);
    };
    const closeLogModal = () => {
        setIsLogModalOpen(false);
    };
    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        navigate('/signIn');
    };
    return (_jsxs(Container, { children: [_jsxs(Section, { onClick: () => navigate('/information'), children: [_jsx(SectionTitle, { children: "\uB098\uC758 \uD68C\uC6D0\uC815\uBCF4 \uC218\uC815" }), _jsx(ArrowIcon, { children: "\u203A" })] }), _jsxs(Section, { onClick: () => navigate('/bookmark'), children: [_jsx(SectionTitle, { children: "\uB098\uC758 \uBD81\uB9C8\uD06C" }), _jsx(ArrowIcon, { children: "\u203A" })] }), _jsxs(Section, { onClick: () => setIsPreModalOpen(true), children: [_jsx(SectionTitle, { children: "\uB098\uC758 \uC54C\uB78C" }), _jsx(ArrowIcon, { children: "\u203A" })] }), _jsx(LogoutButtonContainer, { children: _jsx(LogoutButton, { onClick: () => setIsLogModalOpen(true), children: "\uB85C\uADF8\uC544\uC6C3" }) }), isPreModalOpen && _jsx(PagePreparationModal, { onClose: closePreModal }), isLogModalOpen && (_jsx(LogoutModal, { onClose: closeLogModal, onLogout: handleLogout }))] }));
};
export default MyMainPage;
