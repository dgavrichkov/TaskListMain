import { FC } from 'react';
import { useAppDispatch } from '../../app/store';
import { toggleTheme } from '../../entities';
import { Button } from '../../shared/ui';

export const ThemeSwitcher: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Button
      disabled
      onClick={() => {
        dispatch(toggleTheme());
      }}
    >
      Switch Theme
    </Button>
  );
};
