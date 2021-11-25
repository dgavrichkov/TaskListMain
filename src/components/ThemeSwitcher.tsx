import React, { FC } from "react";
import { Button } from "./Button";

type SwitcherProps = {
  onThemeClick: () => void;
};

const ThemeSwitcher: FC<SwitcherProps> = ({ onThemeClick }) => {
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
