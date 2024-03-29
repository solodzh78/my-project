import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Контейнер root не найден. Не удалось вмонтировать реакт приложение');
}

const root = createRoot(container);

root.render(
  // <StrictMode>
  <ErrorBoundary>
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  </ErrorBoundary>,
  // </StrictMode>,
);
