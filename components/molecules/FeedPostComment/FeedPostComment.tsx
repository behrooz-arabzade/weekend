import React, { FC, useState } from 'react'
import { Grid, Typography, Avatar, IconButton, MenuItem, Menu, Box } from '@mui/material';



//CSS(Style sheet)
import useFeedPostComment from './useStyle';



//Icon
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { reactions } from '../ReactionButton/constants';
import ReactionButton from '../ReactionButton/ReactionButton';


//InterFace
interface IFeedPostComment {
    userPicSrc: string;
    userName: string;
    comment: string;
    likeCount: number;
    onHideClicked: () => void;
    onReportClicked: () => void;
    selectedReactionId: number
}


const FeedPostComment: FC<IFeedPostComment> = ({
    userPicSrc,
    userName,
    comment,
    likeCount,
    onHideClicked,
    onReportClicked,
    selectedReactionId
}) => {

    const { classes, cx } = useFeedPostComment();

    const [hide, setHide] = useState<boolean>(false)

    const [anchorEl, setAnchorEl] = useState<null>(null);

    const handleClickMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const reportHandler = () => {
        onReportClicked();
        setAnchorEl(null);
    };

    const hideHandler = () => {
        onHideClicked();
        setHide(true)
        setAnchorEl(null);
    };

    const handleCommentClick = () => {
        // TODO navigate to the post page
    }

    return (
        <Grid
            item
            xs={12}
            m={2}
            className={cx(classes.root)}
            hidden={hide}
        >
            <Box hidden={hide} component="div" display="flex" justifyContent="space-between" >
                <Grid display="flex">
                    <Avatar src={userPicSrc}></Avatar>
                    <Grid mx={2}>
                        <Typography component="span" fontWeight={700} >
                            {userName}
                        </Typography>
                        <Typography mr={1} component="p">
                            {comment}
                        </Typography>
                        <Grid display="flex">
                            <IconButton
                                onClick={handleCommentClick}
                            >
                                <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
                            </IconButton>
                            <ReactionButton
                                items={reactions}
                                selectedItemId={selectedReactionId}
                            />
                            <Typography fontWeight="bold" mt={2}> <span className={cx(classes.spanLike)}> {likeCount} </span> reactions </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid >
                    <IconButton
                        aria-label="more"
                        onClick={handleClickMenu}
                        aria-haspopup="true"
                        aria-controls="long-menu"
                    >
                        <MoreVertIcon onClick={handleClickMenu}></MoreVertIcon>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseMenu}
                    >
                        <MenuItem onClick={reportHandler}>Report</MenuItem>
                        <MenuItem onClick={hideHandler}>Hide</MenuItem>
                    </Menu>
                </Grid>
            </Box>

        </Grid>
    )
}

export default FeedPostComment