import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import usePersistedState from "../hooks/usePersistedState";

interface ThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [persistedTheme, setPersistedTheme] = usePersistedState(
    "theme",
    "system"
  );
  const [theme, setSelectedTheme] = useState(persistedTheme);
  const setTheme = useCallback((theme: string) => {
    setSelectedTheme(theme);
    setPersistedTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const panelContext = useContext(ThemeContext);
  if (!panelContext) {
    throw new Error("usePanel must be used within a PanelContextProvider");
  }

  return panelContext;
};
export default ThemeContext;
