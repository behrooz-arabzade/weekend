import React, { FC, useState } from 'react'
import { Container, Grid, IconButton, Typography } from '@mui/material';




//Css(Style Sheet)
import useFeedPostFooter from './useStyle';



//Icons
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';




//InterFace

interface IFeedPostFooter {
    reactionCount: number;
    currentReactionId: number;
    onSaveClicked: () => void;
    onCommentsClicked: () => void;
}

const FeedPostFooter: FC<IFeedPostFooter> = ({
    reactionCount,
    currentReactionId,
    onSaveClicked,
    onCommentsClicked
}) => {

    const { classes, cx } = useFeedPostFooter();

    const [reaction, setReaction] = useState<number>(reactionCount);

    const [click, setClick] = useState<boolean>(true)

    const clickComment = () => {
        onCommentsClicked();
    };

    const savedClick = () => {
        onSaveClicked();
    }

    const likeClick = () => {
        console.log(currentReactionId)
        if (click) {
            setReaction(reactionCount + 1);
            setClick(false);
        }
        else {
            setReaction(reaction - 1);
            setClick(true);
        }
    }

    console.log(reactionCount)
    return (
        <Container>
            <Grid display="flex" justifyContent="space-between">
                <Grid display="flex">
                    <Grid>
                        <IconButton onClick={clickComment} aria-label="comment">
                            <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
                        </IconButton>
                    </Grid>
                    <Grid>
                        <IconButton onClick={likeClick} aria-label="reaction">
                            {/* <ReactionButton/> */}
                        </IconButton>
                    </Grid>
                </Grid>

                <Grid>
                    <IconButton onClick={savedClick} aria-label="bookmark">
                        <BookmarkBorderOutlinedIcon></BookmarkBorderOutlinedIcon>
                    </IconButton>
                </Grid>
            </Grid>
            <Typography fontWeight="bold" ml={2}> <span className={cx(classes.spanLike)}> {reaction} </span> reactions </Typography>
        </Container >
    )
}

export default FeedPostFooter