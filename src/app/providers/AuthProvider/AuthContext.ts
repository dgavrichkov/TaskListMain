import { createContext, useContext } from 'react';
import { TAuthData, TUser } from './models';

export const AuthContext = createContext<TAuthData>({
  user: {} as TUser,
  isLoading: false,
  token: '',
  login: () => console.log(''),
  logout: () => console.log(''),
});

AuthContext.displayName = 'DummyAuthContext';

export const useAuth = (): TAuthData => useContext(AuthContext);
