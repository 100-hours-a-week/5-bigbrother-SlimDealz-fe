// firebase-messaging-sw.js
importScripts(
  'https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js'
);

// Firebase 초기화 - 이 부분에서 값을 외부에서 전달받아야 합니다.
self.addEventListener('install', (event) => {
  console.log('Service Worker 설치 완료');
  event.waitUntil(self.skipWaiting());
});

// Firebase 초기화 설정 전달
self.addEventListener('message', (event) => {
  const firebaseConfig = event.data;

  if (firebaseConfig && firebaseConfig.apiKey) {
    firebase.initializeApp(firebaseConfig);

    const messaging = firebase.messaging();

    // 백그라운드에서 수신한 푸시 알림 처리
    messaging.onBackgroundMessage((payload) => {
      console.log(
        '[firebase-messaging-sw.js] 백그라운드 메시지 받음: ',
        payload
      );

      const notificationTitle =
        payload.notification.title || 'New Notification';
      const notificationOptions = {
        body: payload.notification.body || 'You have a new message.',
        icon: payload.notification.icon || '/default-icon.png' // 기본 아이콘 설정
      };

      // 브라우저 알림을 표시
      self.registration.showNotification(
        notificationTitle,
        notificationOptions
      );
    });
  }
});
