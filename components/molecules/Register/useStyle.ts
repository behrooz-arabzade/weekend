import { makeStyles } from "tss-react/mui";

const useRegisterStyle = makeStyles()((theme) => ({
    root: {
        padding: 10,
        width: "100%",
        maxWidth: 450
    },
    logo: {
        textAlign: "center",
    },
    spanLogo: {
        color: theme.palette.baseColor,
    },
    input: {
        margin: "15px 0px  !important"
    },
    registerButtonOn: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0px",
        borderRadius: "5px",
        background: "#3F50B5",
    },
    registerButtonOff: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0px",
        borderRadius: "5px",
        background: "#3F50B5",
        opacity: 0.5,
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
    forgetButton: {
        display: "flex",
        justifyContent: "center",
    },
    loginButton: {
        display: "flex",
        justifyContent: "center"
    },
    error: {
        color: "red",
        textAlign: "center"
    }
}
));
export default useRegisterStyle;