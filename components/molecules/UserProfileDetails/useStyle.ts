import { makeStyles } from "tss-react/mui";

const useUserProfileDetails = makeStyles()((theme) => ({
    container: {
        width: "100%"
    },
    logoColor: {
        color: theme.palette.baseColor,
    },
    active: {
        borderBottom: `3px solid ${theme.palette.baseColor}`,
        textAlign: "center"
    },
    deactivate: {
        borderBottom: `0px solid ${theme.palette.baseColor}`,
        textAlign: "center"
    },
    modalGroup: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        backgroundColor: '#fff',
        border: '2px solid #000',
        boxShadow: "24",
        padding: "10px",
    },
    Avatar: {
        width: 70,
        height: 70,
    },
    requestFriend: {
        width: 200,
        padding: 1,
    },
    selected: {
        width: "100vw",
        borderRadius: "0 !important",
        marginTop: "15px",
    },

}));
export default useUserProfileDetails;