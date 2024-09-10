import { getToken, onMessage } from 'firebase/messaging';
import React, { useEffect, useState } from 'react';
import { messaging } from '../index';

const NotificationButton: React.FC = () => {
  const [tokenFound, setTokenFound] = useState<boolean>(false);
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      try {
        const token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
        });
        if (token) {
          console.log('FCM Token:', token);
          setFcmToken(token);
          setTokenFound(true);
        } else {
          console.log('No registration token available.');
          setTokenFound(false);
        }
      } catch (error) {
        console.error('An error occurred while retrieving token.', error);
        setTokenFound(false);
      }
    } else {
      console.log('Unable to get permission to notify.');
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    // Foreground 메시지 수신 처리
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Message received in foreground: ', payload);

      // Notification API로 알림 생성
      if (Notification.permission === 'granted') {
        const { title, body, icon } = payload.notification || {};

        new Notification(title || 'New Notification', {
          body: body || 'You have a new message.',
          icon: icon || '/default-icon.png' // 아이콘이 없을 경우 기본 아이콘 사용
        });
      } else {
        console.warn('Notification permission denied.');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {tokenFound ? (
        <h3>Notification Permission Granted</h3>
      ) : (
        <h3>Need Notification Permission</h3>
      )}
      {fcmToken && <p>FCM Token: {fcmToken}</p>}
    </div>
  );
};

export default NotificationButton;
