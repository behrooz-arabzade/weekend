import { makeStyles } from "tss-react/mui";

const useTagCardStyle = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
    [theme.breakpoints.up("sm")]: {
      width: 300,
    },
    height: 165,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      width:200,
    },
    [theme.breakpoints.up("sm")]: {
      width: 300,
    },
    height: 125,
  },
  footer: {
    height: 40,
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    backgroundColor: "#fff",
  },
  footerSelected: {
    backgroundColor: theme.palette.selectedTagCard,
  },
  name: {
    flex: 1,
    overflow: "hidden",
    textAlign: "start",
  },
  addIcon: {
    width: 24,
    height: 24,
  },
}));

export default useTagCardStyle;
