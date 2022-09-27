import { makeStyles } from "tss-react/mui";

const useMainNavigationStyle = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    display: "flex",
    width: "100%",
  },
  grid: {
    flex: 1,
    padding: 8,
  },
  gridSelected: {
    color: theme.palette.selectedMenuBg,
  },
}));
export default useMainNavigationStyle;
