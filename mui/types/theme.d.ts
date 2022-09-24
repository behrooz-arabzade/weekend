import theme from "../theme";

declare module "@mui/material/styles" {
  interface Theme {
    palette: any;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette: any;
  }

  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

declare interface IThemeOptions
  extends Omit<ThemeOptions, "palette" | "breakpoints"> {
  palette: any;
  breakpoints?: BreakpointsOptions;
  typography: TypographyOptions;
}
