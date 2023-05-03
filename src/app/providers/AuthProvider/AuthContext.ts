import { createContext, useContext } from 'react';
import { TAuthData, TDummyUser } from './models';

export const AuthContext = createContext<TAuthData>({
  user: {} as TDummyUser,
  isLoading: false,
  token: '',
  login: () => console.log(''),
  logout: () => console.log(''),
});

AuthContext.displayName = 'DummyAuthContext';

export const useAuth = (): TAuthData => useContext(AuthContext);
