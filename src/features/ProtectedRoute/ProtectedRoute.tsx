import { FC } from 'react';
import { useAuth } from '../../entities';

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
