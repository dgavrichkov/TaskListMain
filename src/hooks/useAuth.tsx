import { createContext, FC, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { dummyLogin } from '../shared/api/dummy';
import { PATHS } from '../shared/constants/paths';
import { useLocalStorage } from './useLocalStorage';

type TAuthData = {
  isAuth: boolean
  login: (data: TLoginData) => void
  logout: () => void
}

type TLoginData = {
  login: string,
  password: string
}

const AuthContext = createContext({} as TAuthData);

export const AuthProvider: FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useLocalStorage("token", '');
  const navigate = useNavigate();

  const value = useMemo(() => {
    const login = async (data: TLoginData) => {
      try {
        const loggedData = await dummyLogin(data.login, data.password);
        console.log('logged data', loggedData);
        setToken(loggedData.token);
        setIsAuth(true);
        navigate(PATHS.PROFILE);
      } catch (error) {
        console.log(error);
      }
    }

    const logout = () => {
      setToken('');
      setIsAuth(false);
      navigate(PATHS.ROOT, { replace: true });
    }

    return {
      isAuth,
      login,
      logout
    }
  }, [navigate, isAuth, setToken]);

  useEffect(() => {
    if(token) {
      setIsAuth(true);
    }
  }, [token])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
