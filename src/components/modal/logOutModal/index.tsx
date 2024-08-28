import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #333;
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  text-align: center;
  color: white;
`;

const ModalTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

const ModalMessage = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
`;

const ActionButton = styled.button`
  padding: 10px 50px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

type LogoutModalProps = {
  onClose: () => void;
  onLogout: () => void;
};

const LogoutModal: React.FC<LogoutModalProps> = ({ onClose, onLogout }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalTitle>로그아웃 하시겠습니까?</ModalTitle>
          <hr
            style={{ width: '50px', margin: '10px auto', borderColor: 'white' }}
          />
          <ModalMessage>로그아웃 하시려면 확인을 누르세요.</ModalMessage>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ActionButton onClick={onClose}>취소</ActionButton>
            <ActionButton onClick={onLogout}>확인</ActionButton>
          </div>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default LogoutModal;
