import React, { FC, useState } from "react";
import { Container, Grid, IconButton, Typography } from "@mui/material";

//Css(Style Sheet)
import useFeedPostFooter from "./useStyle";

//Icons
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import UnLike from "components/molecules/ReactionButton/UnLike";
import Like from "components/molecules/ReactionButton/Like";
import Idea from "components/molecules/ReactionButton/Idea";

//Component
import ReactionButton from "components/molecules/ReactionButton/ReactionButton";

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
  onCommentsClicked,
}) => {
  const { classes, cx } = useFeedPostFooter();

  const clickComment = () => {
    onCommentsClicked();
  };

  const savedClick = () => {
    onSaveClicked();
  };

  const handleReactionSelected = (reactionId: number) => {
    // TODO handle reaction clicked
  };

  console.log(reactionCount);

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
            <ReactionButton
              items={[
                {
                  id: 1,
                  icon: <Like />,
                },

                {
                  id: 2,
                  icon: <UnLike />,
                },
                {
                  id: 3,
                  icon: <Idea />,
                },
              ]}
              onReactionSelected={handleReactionSelected}
              selectedItemId={currentReactionId}
            />
          </Grid>
        </Grid>

        <Grid>
          <IconButton onClick={savedClick} aria-label="bookmark">
            <BookmarkBorderOutlinedIcon></BookmarkBorderOutlinedIcon>
          </IconButton>
        </Grid>
      </Grid>
      <Typography fontWeight="bold" ml={2}>
        <span className={cx(classes.spanLike)}> {reactionCount} </span>{" "}
        reactions
      </Typography>
    </Container>
  );
};

export default FeedPostFooter;
