import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { Router } from './Router';
import { StyleProvider } from './providers/StyleProvider';
import { AuthProvider } from './providers/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary } from '../shared/ui/ErrorBoundary';

const queryClient = new QueryClient();

export const App: FC = function () {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading="null" persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <StyleProvider>
                  <Router />
                </StyleProvider>
              </AuthProvider>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
