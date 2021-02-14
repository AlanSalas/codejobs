import { useState, useEffect, createContext } from "react";

export const themeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const applyTheme = () => {
    document.body.classList.toggle(theme);
  };

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      applyTheme();
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      applyTheme();
    }
  };

  useEffect(() => {
    applyTheme();
    // eslint-disable-next-line
  }, [theme]);

  return (
    <themeContext.Provider value={{ handleToggle, applyTheme, theme }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeProvider;
