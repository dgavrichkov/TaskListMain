import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../app/providers/AuthProvider';

export const ProtectedRoute: FC = () => {
  const { token } = useAuth();

  if (!token) {
    return <div>Forbidden, please log in</div>;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
