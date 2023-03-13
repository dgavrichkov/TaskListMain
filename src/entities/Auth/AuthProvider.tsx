import { FC, useEffect, useMemo, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { dummyFetchUser, dummyLogin } from './api';
import { PATHS } from '../../shared/constants/paths';
import { AuthContext } from './AuthContext';
import { TDummyUser, TLoginData } from './models';

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
    if (token) {
      setIsAuth(true);
    }
  }, [token])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
