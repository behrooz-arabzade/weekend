import { makeStyles } from "tss-react/mui";




const useStyle = makeStyles()((theme) => ({
    root: {
        [theme.breakpoints.down("sm")]: {
            width: 300,
          },
          [theme.breakpoints.up("sm")]: {
            width: 500,
          },
    },
  }));
export default useStyle;