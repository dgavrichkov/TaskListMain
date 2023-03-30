import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from "react-redux";
import { THEMES } from "../constants/themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthProvider } from '../entities';
import { store } from '../store';
import { Layout } from './Layout';

const queryClient = new QueryClient()

export const App = function () {
  const theme = useTypedSelector((state) => state.theme)

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeProvider theme={THEMES[theme]}>
            <GlobalStyles />
            <Layout />
          </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
}
