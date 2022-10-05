import { makeStyles } from "tss-react/mui";

const useRegisterStyle = makeStyles()((theme) => ({
    root: {
        padding: 10,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
}
));
export default useRegisterStyle;
