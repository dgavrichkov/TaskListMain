import { createContext, useContext } from 'react';
import { TAuthData, TDummyUser } from './models';

export const AuthContext = createContext<TAuthData>({
  user: {} as TDummyUser,
  isLoading: false,
  login: () => {},
  logout: () => {},
  token: '',
});

AuthContext.displayName = 'DummyAuthContext';

export const useAuth = () => useContext(AuthContext);
