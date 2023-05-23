import { FC } from 'react';
import { useAuth } from '../../../app/providers/AuthProvider';
import { Styled } from './styled';

export const ProfileInfo: FC = () => {
  const { user } = useAuth();

  return (
    <Styled.Wrap>
      {user && (
        <>
          <Styled.InfoPanel>
            <Styled.Entry>
              <span>email</span>
              <div>{user.email}</div>
            </Styled.Entry>
            <Styled.Entry>
              <span>username</span>
              <div>{user.username}</div>
            </Styled.Entry>
          </Styled.InfoPanel>
        </>
      )}
    </Styled.Wrap>
  );
};
