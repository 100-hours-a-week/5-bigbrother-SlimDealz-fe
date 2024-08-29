import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
            colorScheme: 'system',
            isNameRequired: true,
            isEmailRequired: true
        })
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ['localhost', /^https:\/\/slimdealz.store\.io\/api/],
    profilesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsxs(React.StrictMode, { children: [_jsx(GlobalStyles, {}), _jsx(App, {})] }));
reportWebVitals();
