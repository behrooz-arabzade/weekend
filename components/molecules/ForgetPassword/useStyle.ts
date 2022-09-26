import { makeStyles } from "tss-react/mui";

const useForgetPassword = makeStyles()((theme) => ({
    root: {
        padding: 10,
        width: "300px",
    },
    spanLogo: {
        color: theme.palette.baseColor,
    },
    lockIcon: {
        fontSize: "100px",
    },
    user: {
        margin: "15px 0px  !important"
    },
    forgetButtonOn: {
        display: "flex",
        justifyContent: "center",
        margin: "5px 0px",
        borderRadius: "5px",
        background: "#3F50B5",
    },
    forgetButtonOff:{
        display: "flex",
        justifyContent: "center",
        margin: "5px 0px",
        borderRadius: "5px",
        background: "#3F50B5",
        opacity:0.5,
    },
    ButtonOn: {
        color: "#fff !important",
        width: "100%",
    },
    ButtonOff: {
        color: "#fff !important",
        width: "100%",
        opacity: 0.5,
    },
    loginButton: {
        display: "flex",
        justifyContent: "center",
    },
    registerButton: {
        display: "flex",
        justifyContent: "center"
    }
}
));
export default useForgetPassword;