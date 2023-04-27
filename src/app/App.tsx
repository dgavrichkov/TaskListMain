import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from './Router';
import { StyleProvider } from './providers/StyleProvider';
import { AuthProvider } from './providers/AuthProvider';
import { persistor, store } from './store';

const queryClient = new QueryClient();

export const App: FC = function () {
  return (
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
  );
};
