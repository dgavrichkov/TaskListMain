import { useActions } from "../hooks/useActions";
import { Button } from "./UI/Button/Button";

export const ThemeSwitcher = () => {
  const { toggleThemeAction } = useActions();

  return (
    <Button
      onClick={() => {
        toggleThemeAction();
      }}
    >
      Switch Theme
    </Button>
  );
};
