import { useContext } from "react";
import { themeContext } from "../providers/ThemeProvider";

const useTheme = () => useContext(themeContext);

export default useTheme;
