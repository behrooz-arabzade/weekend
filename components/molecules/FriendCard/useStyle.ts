import { makeStyles } from "tss-react/mui";

const useFriendCard = makeStyles()((theme) => ({
    root: {
        width:400,
        padding:10,
    },
    pageproperty:{
        position: "absolute",
        color: "#fff",
        background: "#d64b19",
        borderRadius: "25px",
        padding: "0 5px",
 
        transition: "all 0.2s linear",
    }
}));
export default useFriendCard;
