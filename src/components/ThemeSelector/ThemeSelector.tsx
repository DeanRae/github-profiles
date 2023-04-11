import { FC, useState } from "react";
import { useTheme } from "../../contexts/Theme";

const ThemeSelector: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <label htmlFor="theme-select">
      Theme
      <select
        name="theme"
        id="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">OS Default</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
};

export default ThemeSelector;
