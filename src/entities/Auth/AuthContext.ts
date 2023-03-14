import { createContext, useContext } from "react";
import { TAuthData, TDummyUser } from './models';

export const AuthContext = createContext<TAuthData>({
  user: {} as TDummyUser,
  isAuth: false,
  isLoading: false,
  login: () => {},
  logout: () => {},
  token: '',
});

export const useAuth = () => useContext(AuthContext);
