import React, { FC, useState } from 'react'
import { Grid, Typography, Avatar, IconButton, MenuItem, Menu, Box } from '@mui/material';



//CSS(Style sheet)
import useFeedPostComment from './useStyle';



//Icon
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


//InterFace
interface IFeedPostComment {
    userPicSrc: string;
    userName: string;
    comment: string;
    likeCount: number;
    onHideClicked: () => void;
    onReportClicked: () => void;

}


const FeedPostComment: FC<IFeedPostComment> = ({
    userPicSrc,
    userName,
    comment,
    likeCount,
    onHideClicked,
    onReportClicked

}) => {

    const { classes, cx } = useFeedPostComment();

    const [like, setLike] = useState<number>(likeCount);

    const [click, setClick] = useState<boolean>(true)

    const [anchorEl, setAnchorEl] = useState<null>(null);

    const [hide, setHide] = useState<boolean>(false)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const linkClick = () => {

        setAnchorEl(null);
    };

    const reportHandler = () => {
        onReportClicked();
        setAnchorEl(null);
    };

    const hideHandler = () => {
        onHideClicked();
        setHide(true);
        setAnchorEl(null);
    };

    const likeClick = () => {
        if (click) {
            setLike(likeCount + 1);
            setClick(false);
        }
        else {
            setLike(like - 1);
            setClick(true);
        }
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
                        <Typography mr={1} component="p" variant="p">
                            {comment}
                        </Typography>
                        <Grid display="flex">
                            <IconButton>
                                <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
                            </IconButton>
                            <IconButton onClick={likeClick} aria-label="reaction">
                                {
                                    !click
                                        ?
                                        <FavoriteOutlinedIcon className={cx(classes.likeIcon)}></FavoriteOutlinedIcon>
                                        :
                                        <FavoriteBorderOutlinedIcon className={cx(classes.likeIcon)}></FavoriteBorderOutlinedIcon>
                                }
                            </IconButton>
                            <Typography fontWeight="bold" mt={2}> <span className={cx(classes.spanLike)}> {like} </span> Like </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid >
                    <IconButton
                        aria-label="more"
                        onClick={handleClick}
                        aria-haspopup="true"
                        aria-controls="long-menu"
                    >
                        <MoreVertIcon onClick={handleClick}></MoreVertIcon>
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={anchorEl}
                        onClose={handleClose}
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