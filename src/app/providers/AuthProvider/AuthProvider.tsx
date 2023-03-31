import { FC, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { dummyFetchUser, dummyLogin } from './api';
import { PATHS } from '../../../shared/constants/paths';
import { AuthContext } from './AuthContext';
import { TDummyUser, TLoginData } from './models';
import { DUMMY_TOKEN, DUMMY_USER_ID } from './constants';

export const AuthProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({} as TDummyUser);
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(DUMMY_TOKEN);
    if (token) {
      setToken(token);
      setUserId(JSON.parse(localStorage.getItem(DUMMY_USER_ID) || ''));
    }
  }, []);

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
      localStorage.setItem(DUMMY_TOKEN, loggedData.token);
      setToken(loggedData.token);
      localStorage.setItem(DUMMY_USER_ID, JSON.stringify(loggedData.id));
      setUserId(loggedData.id)
      navigate(PATHS.PROFILE);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  const logout = () => {
    localStorage.setItem(DUMMY_TOKEN, '');
    setToken('');
    localStorage.setItem(DUMMY_USER_ID, '');
    setUserId(null)
    navigate(PATHS.ROOT, { replace: true });
  }

  return <AuthContext.Provider value={{
    user,
    isLoading,
    login,
    logout,
    token
  }}>
    {children}
  </AuthContext.Provider>
}
