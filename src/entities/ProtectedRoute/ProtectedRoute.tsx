import { FC } from 'react';
import { useAuth } from '../../hooks/useAuth';

export const ProtectedRoute: FC = ({ children }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <div>Forbidden</div>;
  }

  return (
    <>
      {children}
    </>
  )
};
