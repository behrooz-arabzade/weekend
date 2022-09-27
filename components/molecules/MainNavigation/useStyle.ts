import { makeStyles } from "tss-react/mui";

const useMainNavigationStyle = makeStyles()((theme) => ({
    root:{
        [theme.breakpoints.up("sm")]: {
            display:"none",
        },
        top:"auto",
        bottom:0,
    },
    spanLogo:{
        color: theme.palette.baseColor,
    },
        spanMessage:{
            position: "absolute",
            left: 15,
            top: 3,
            color: "#fff",
            background: theme.palette.baseColor,
            borderRadius: "25px",
            padding: "0 5px",
            fontSize: "0.5rem",
            transition: "all 0.2s linear",
        }
}
));
export default useMainNavigationStyle;