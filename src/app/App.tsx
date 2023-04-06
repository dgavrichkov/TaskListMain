import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from "react-redux";
import { store } from '../store';
import { Router } from './Router';
import { StyleProvider } from './providers/StyleProvider';
import { AuthProvider } from './providers/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import {store as store2} from './store';

const queryClient = new QueryClient()

export const App = function () {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Provider store={store2}>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <StyleProvider>
                <Router />
              </StyleProvider>
            </AuthProvider>
          </QueryClientProvider>
        </Provider>
      </Provider>
    </BrowserRouter>
  );
}
