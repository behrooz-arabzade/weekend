import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints";
import overrides from "./overrides";
import defaultPalette from "./palettes/defaultPalette";
import { ITheme, IThemeOptions } from "./types/theme";
import typography from "./typography";
import { makeStyles as MUIMakeStyles } from "@mui/styles";
import { ClassNameMap, Styles, WithStylesOptions } from "@mui/styles";
import { DistributiveOmit } from "@mui/types";

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

export function makeStyles<ClassKey extends string = string>(
  style: Styles<ITheme, object, ClassKey>,
  options?: DistributiveOmit<WithStylesOptions<ITheme>, "withTheme">
): (props?: any) => ClassNameMap<ClassKey>;
export function makeStyles<
  Props extends object = object,
  ClassKey extends string = string
>(
  styles: Styles<ITheme, Props, ClassKey>,
  options?: DistributiveOmit<WithStylesOptions<ITheme>, "withTheme">
): (props: Props) => ClassNameMap<ClassKey>;

export function makeStyles(styles: any, options: any) {
  return MUIMakeStyles(styles, options);
}
