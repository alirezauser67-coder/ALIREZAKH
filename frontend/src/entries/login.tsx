import { createRoot } from 'react-dom/client';
import { message } from 'antd';
import 'antd/dist/reset.css';
import '@/styles/motion.css';

import { setupHttp } from '@/api/http-init';
import { applyDocumentTitle } from '@/utils';
import { readyI18n } from '@/i18n/react';
import { ThemeProvider } from '@/hooks/useTheme';
import { QueryProvider } from '@/api/QueryProvider';
import LoginPage from '@/pages/login/LoginPage';

setupHttp();
applyDocumentTitle();

const messageContainer = document.getElementById('message');
if (messageContainer) {
  message.config({ getContainer: () => messageContainer });
}

readyI18n().then(() => {
  const root = document.getElementById('app');
  if (root) {
    createRoot(root).render(
      <ThemeProvider>
        <QueryProvider>
          <LoginPage />
        </QueryProvider>
      </ThemeProvider>,
    );
  }
  const splash = document.getElementById('ak-splash');
  if (splash) {
    splash.classList.add('fade-out');
    setTimeout(() => splash.remove(), 600);
  }
});
