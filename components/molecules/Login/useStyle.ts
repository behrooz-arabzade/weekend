import { makeStyles } from "tss-react/mui";

const useLoginStyle = makeStyles()((theme) => ({
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
    user: {
        margin: "15px 0px  !important"
    },
    loginButton: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0px",
        borderRadius: "5px",
        background: "#3F50B5",
    },
    colorButton: {
        color: "#fff",
        width: "100%",
    },
    forgetButton: {
        display: "flex",
        justifyContent: "center",
    },
    registerButton: {
        display: "flex",
        justifyContent: "center"
    },
    error: {
        color: "red"
    }
}
));
export default useLoginStyle;
