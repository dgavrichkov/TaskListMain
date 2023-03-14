import { FC, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { dummyFetchUser, dummyLogin } from './api';
import { PATHS } from '../../shared/constants/paths';
import { AuthContext } from './AuthContext';
import { TDummyUser, TLoginData } from './models';
import { DUMMY_TOKEN, DUMMY_USER_ID } from './constants';

export const AuthProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({} as TDummyUser);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useLocalStorage(DUMMY_TOKEN, '');
  const [userId, setUserId] = useLocalStorage(DUMMY_USER_ID, '');
  const navigate = useNavigate();

  useEffect(() => {
    if(token) {
      setIsAuth(true);
    }
  }, [token])

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      try {
        if (userId) {
          const userResponse = await dummyFetchUser(userId);
          setUser(userResponse);
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    }
    checkAuth()
  }, [userId])

  const login = async (data: TLoginData) => {
    setIsLoading(true);
    try {
      const loggedData = await dummyLogin(data.login, data.password);
      console.log('logged data', loggedData);
      setToken(loggedData.token);
      setUserId(loggedData.id);
      navigate(PATHS.PROFILE);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  const logout = () => {
    setToken('');
    setUserId('');
    setIsAuth(false);
    navigate(PATHS.ROOT, { replace: true });
  }

  return <AuthContext.Provider value={{
    user,
    isAuth,
    isLoading,
    login,
    logout,
    token
  }}>
    {children}
  </AuthContext.Provider>
}
