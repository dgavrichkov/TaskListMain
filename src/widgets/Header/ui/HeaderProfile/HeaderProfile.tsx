import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../app/providers/AuthProvider';
import { PATHS } from '../../../../shared/constants/paths';
import { Avatar, Button } from '../../../../shared/ui';

export const HeaderProfile = () => {
  const { token, logout } = useAuth();

  return (
    <>
      {token ? (
        <>
          <Avatar />
          <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to={PATHS.PROFILE}>
            Profile
          </NavLink>
          <Button onClick={logout}>Logout</Button>
        </>
      ) : (
        <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to="login">
          Login
        </NavLink>
      )}
    </>
  );
};
