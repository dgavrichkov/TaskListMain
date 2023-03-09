import { createContext, FC, useContext, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../shared/constants/paths';
import { TDummyUser } from '../types/DummyUser';
import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext({} as TAuthData);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const value = useMemo(() => {
    const login = async (data: TLoginData) => {
      console.log(data);
      setUser(data);
      navigate(PATHS.PROFILE);
    }

    const logout = () => {
      setUser(null);
      navigate(PATHS.ROOT, { replace: true });
    }

    return {
      user,
      login,
      logout
    }
  }, [user, setUser, navigate]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

type TAuthData = {
  user: TDummyUser;
  login: (data: TLoginData) => void
  logout: () => void
}

type TLoginData = {
  login: string,
  password: string
}
