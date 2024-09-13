import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/globalStyles';
import * as Sentry from '@sentry/react';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    // Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: 'system',
      isNameRequired: true,
      isEmailRequired: true,
      showBranding: false,
      triggerLabel: '버그 신고하기',
      triggerAriaLabel: '버그 신고하기',
      formTitle: '버그 신고하기',
      submitButtonLabel: '제출',
      cancelButtonLabel: '취소',
      addScreenshotButtonLabel: '사진 등록',
      removeScreenshotButtonLabel: '사진 삭제',
      nameLabel: '제보자',
      namePlaceholder: '이름을 입력해주세요',
      emailLabel: '이메일',
      isRequiredLabel: '(필수)',
      messageLabel: '버그 설명',
      messagePlaceholder:
        '상황을 자세하게 설명해주세요. \n감사히 읽고 수정 조치하겠습니다!',
      successMessageText: '신고가 접수되었어요. 감사합니다!'
    })
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: [
    'localhost',
    /^https:\/\/api\.slimdealz\.store/,
    /^https:\/\/slimdealz\.store/
  ],
  profilesSampleRate: 0, // 프로파일링 비활성화
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
});

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

// Service Worker 등록 및 Firebase 설정 전달
navigator.serviceWorker
  .register('/firebase-messaging-sw.js')
  .then((registration) => {
    // Firebase 메시징 설정 전달
    registration.active?.postMessage(firebaseConfig);

    // FCM 토큰 요청
    getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: registration
    })
      .then((currentToken) => {
        if (currentToken) {
          // console.log('FCM Token:', currentToken);
        } else {
          console.warn('No registration token available.');
        }
      })
      .catch((err) => {
        console.error('An error occurred while retrieving token. ', err);
      });
  })
  .catch((err) => {
    console.error('Service Worker registration failed: ', err);
  });

// Foreground 메시지 수신 처리
onMessage(messaging, (payload) => {
  // console.log('Message received. ', payload);

  // 알림 생성
  if (Notification.permission === 'granted') {
    const { title, body, icon } = payload.notification || {};
    new Notification(title || 'New Notification', {
      body: body || 'You have a new message.',
      icon: icon || '/default-icon.png'
    });
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);

reportWebVitals();
