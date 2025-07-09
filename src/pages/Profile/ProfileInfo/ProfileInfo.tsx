import { FC } from 'react';
import { useAuth } from '../../../app/providers/AuthProvider';

export const ProfileInfo: FC = () => {
  const { user } = useAuth();

  return (
    <div>
      {user && (
        <>
          <div>
            <div>
              <span>email</span>
              <div>{user.email}</div>
            </div>
            <div>
              <span>username</span>
              <div>{user.username}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
