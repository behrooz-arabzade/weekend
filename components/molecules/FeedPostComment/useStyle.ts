import { makeStyles } from "tss-react/mui";

const useFeedPostComment = makeStyles()((theme) => ({
    root: {
        maxWidth:"fit-content",
    },
    spanLike:{
        color:theme.palette.baseColor,
    },
    likeIcon:{
        color:theme.palette.baseColor,
    },
}));
export default useFeedPostComment;
