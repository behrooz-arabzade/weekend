import { createTheme } from "@mui/material";
import breakpoints from "./breakpoints";
import overrides from "./overrides";
import palette from "./palette";
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

const theme = createTheme(getThemeOptions(palette));

export default theme;
