import { FC } from 'react';
import { useAuth } from '../../app/providers/AuthProvider';

export const ProtectedRoute: FC = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <div>Forbidden, please log in</div>;
  }

  return <>{children}</>;
};
