import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/globalStyles';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_AUTH_TOKEN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
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
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: [
    'localhost',
    /^https:\/\/api\.slimdealz\.store/,
    /^https:\/\/slimdealz\.store/
  ],
  // Set profilesSampleRate to 1.0 to profile every transaction.
  // Since profilesSampleRate is relative to tracesSampleRate,
  // the final profiling rate can be computed as tracesSampleRate * profilesSampleRate
  // For example, a tracesSampleRate of 0.5 and profilesSampleRate of 0.5 would
  // results in 25% of transactions being profiled (0.5*0.5=0.25)
  profilesSampleRate: 1.0,
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
