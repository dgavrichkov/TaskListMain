import { FC } from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

export const ProtectedRoute: FC = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/TaskListMain" />;
  }

  return (
    <>
      {children}
    </>
  )
};
