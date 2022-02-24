import { Button } from "./Button";

type SwitcherProps = {
  onThemeClick: () => void;
};

const ThemeSwitcher = ({ onThemeClick }: SwitcherProps) => {
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

export { ThemeSwitcher };
