import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { styles } from './styles';
import api from '@/axiosInstance';

const UserInformationPage: React.FC = () => {
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

      // 사용자 정보 API 호출
      fetchUserProfile(decodedToken.kakao_Id, jwtToken);
    }
  }, []);

  const fetchUserProfile = async (kakao_Id: string, jwtToken: string) => {
    try {
      const response = await api.get(
        `/v1/users/${encodeURIComponent(kakao_Id)}/profile`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        }
      );
      const { nickname, card, notification_agree } = response.data;

      setNickname(nickname);
      setCard(card);
      setNotification_Agree(notification_agree);
    } catch (error) {
      console.error('사용자 정보를 가져오는 중 오류 발생:', error);
      // 오류 처리 로직 추가 가능 (예: 알림 표시)
    }
  };

  function parseJwt(token: string) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );

      return JSON.parse(jsonPayload);
    } catch (error) {
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

      await axios.put(
        `http://localhost:8080/api/v1/users/${encodeURIComponent(kakao_Id)}/profile`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        }
      );

      // 수정 완료 후 사용자를 다른 페이지로 이동하거나 알림 표시
      alert('회원 정보가 성공적으로 수정되었습니다.');
      navigate('/main'); // 예시: 메인 페이지로 이동
    } catch (error) {
      console.error('사용자 정보를 업데이트하는 중 오류 발생:', error);
      alert('회원 정보 수정 중 오류가 발생했습니다.');
    }
  };

  return (
    <div style={styles.userProfileContainer}>
      <div style={styles.navBar}>
        <button style={styles.navBarButton} onClick={() => navigate(-1)}>
          ←
        </button>
        <h2>회원 정보 수정</h2>
      </div>

      <div style={styles.userInfoSection}>
        <h2>사용자 정보</h2>
        {profileImageUrl && (
          <img
            src={profileImageUrl}
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        )}
        <p>
          <strong>이름:</strong> {name}
        </p>
        <p>
          <strong>역할:</strong> {role}
        </p>
        <p>
          <strong>소셜 ID:</strong> {kakao_Id}
        </p>
      </div>

      <div style={styles.userInfoSection}>
        <h2>수정 가능 란</h2>
        <div style={styles.formGroup}>
          <label style={styles.formGroupLabel}>닉네임:</label>
          <input
            type="text"
            style={styles.formGroupInput}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.formGroupLabel}>카드 정보:</label>
          <input
            type="text"
            style={styles.formGroupInput}
            value={card}
            onChange={(e) => setCard(e.target.value)}
            placeholder="카드 정보를 입력하세요"
          />
        </div>
        <div style={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              checked={notification_agree}
              onChange={(e) => setNotification_Agree(e.target.checked)}
            />
            알림 수신 동의
          </label>
        </div>
        <button style={styles.actionButtonSubmit} onClick={handleSubmit}>
          정보 수정 완료
        </button>
      </div>
    </div>
  );
};

export default UserInformationPage;
