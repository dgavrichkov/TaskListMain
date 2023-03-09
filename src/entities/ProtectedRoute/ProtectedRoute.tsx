import { FC } from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import { PATHS } from '../../shared/constants/paths';

export const ProtectedRoute: FC = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={PATHS.ROOT} />;
  }

  return (
    <>
      {children}
    </>
  )
};
