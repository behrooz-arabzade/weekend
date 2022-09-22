import { textAlign } from "@mui/system";
import { makeStyles } from "tss-react/mui";




const useSharedStyle = makeStyles()((theme) => ({
    root: {
        [theme.breakpoints.down("sm")]: {
            width: 300,
          },
          [theme.breakpoints.up("sm")]: {
            width: 500,
          },
          direction:"rtl",
          textAlign:"right"
    },
  }));

export default useSharedStyle;