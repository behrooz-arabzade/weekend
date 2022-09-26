import { positions } from "@mui/system";
import { makeStyles } from "tss-react/mui";

const useMainHeader = makeStyles()((theme) => ({
    root: {
        [theme.breakpoints.up("sm")]: {
            display:"none",
        },
    },
    headerDivider: {
        background: theme.palette.baseColor,
        height: "5px"
    },
    spanLogo: {
        color: theme.palette.baseColor,
    },
    profileImg: {
        width: "45px",
        height: "45px",
    }
}
));
export default useMainHeader;