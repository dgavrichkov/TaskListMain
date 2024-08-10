import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../shared/constants/paths';
import { loginApi } from './api';
import { AuthContext } from './AuthContext';
import { TUser, TLoginData } from './models';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({} as TUser);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (data: TLoginData) => {
    setIsLoading(true);
    try {
      const dataToPost = {
        identifier: data.login,
        password: data.password,
      };
      const res = await loginApi(dataToPost);
      localStorage.setItem('token', res.jwt);
      localStorage.setItem('user', JSON.stringify(res.user));
      setToken(res.jwt);
      setUser(res.user);

      navigate(PATHS.PROFILE);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.setItem('token', '');
    setToken('');
    navigate(PATHS.ROOT, { replace: true });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') as string);

    if (token && user) {
      setToken(token);
      setUser(user as TUser);
    }
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      try {
        if (token) {
          console.log('user logged');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
