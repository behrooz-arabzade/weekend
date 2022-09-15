import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints";
import overrides from "./overrides";
import defaultPalette from "./palettes/defaultPalette";
import { IThemeOptions } from "./types/theme";
import typography from "./typography";

const defaultTheme = createTheme({
  breakpoints,
});

export const getThemeOptions = (palette: any): IThemeOptions => {
  return {
    palette,
    typography: { ...typography(defaultTheme) },
    spacing: 4,
    components: overrides,
    breakpoints,
    shape: { borderRadius: 6 },
  };
};

export const lightTheme = createTheme(getThemeOptions(defaultPalette));

const baseTheme = createTheme(getThemeOptions(defaultPalette));

export default baseTheme;
