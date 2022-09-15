/* eslint-disable import/named */
import { Color } from "@mui/material";
import {
  SimplePaletteColorOptions,
  Theme,
  ThemeOptions,
} from "@mui/material/styles";

declare interface ITheme extends Omit<Theme, "palette" | "breakpoints"> {
  palette: any;
  breakpoints: Breakpoints;
  variables: any;
}

declare interface IThemeOptions
  extends Omit<ThemeOptions, "palette" | "breakpoints"> {
  palette: any;
  breakpoints?: BreakpointsOptions;
  typography: TypographyOptions;
}

declare interface any {
  primary: any;
  darkGrey: any;
  darkBlue: any;
  lightGrey: any;
  xLightGrey: any;
  BG: any;
  highlight: any;
  chartGreen: any;
  chartRed: any;
  allowedLabel: any;
  stoppedLabel: any;
  warning: any;
  info: any;
  BG: any;
  white: any;
}

declare type DefaultPalette = SimplePaletteColorOptions &
  Omit<Color, "A100" | "A200" | "A400" | "A700">;
