import { createContext, FC, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { dummyFetchUser, dummyLogin } from '../shared/api/dummy';
import { PATHS } from '../shared/constants/paths';
import { TDummyUser } from '../types/DummyUser';
import { useLocalStorage } from './useLocalStorage';

type TAuthData = {
  isAuth: boolean
  isLoading: boolean
  user: TDummyUser
  login: (data: TLoginData) => void
  logout: () => void
}

type TLoginData = {
  login: string,
  password: string
}

const AuthContext = createContext({} as TAuthData);

export const AuthProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useLocalStorage("dummyUser", {} as TDummyUser);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useLocalStorage("token", '');
  const navigate = useNavigate();

  const value = useMemo(() => {
    const login = async (data: TLoginData) => {
      setIsLoading(true);
      try {
        const loggedData = await dummyLogin(data.login, data.password);
        console.log('logged data', loggedData);
        setToken(loggedData.token);
        setIsAuth(true);
        const userResponse = await dummyFetchUser(loggedData.id);
        setUser(userResponse);
        navigate(PATHS.PROFILE);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    const logout = () => {
      setToken('');
      setIsAuth(false);
      navigate(PATHS.ROOT, { replace: true });
    }

    // TODO add check auth function with user fetching

    return {
      user,
      isAuth,
      isLoading,
      login,
      logout,
    }
  }, [user, navigate, isAuth, isLoading, setToken, setUser]);

  useEffect(() => {
    if(token) {
      setIsAuth(true);
    }
  }, [token])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
