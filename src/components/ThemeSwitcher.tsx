import { Button } from "./Button";

type SwitcherProps = {
  onThemeClick: () => void;
};

export const ThemeSwitcher = ({ onThemeClick }: SwitcherProps) => {
  return (
    <Button
      onClick={() => {
        onThemeClick();
      }}
    >
      Switch Theme
    </Button>
  );
};