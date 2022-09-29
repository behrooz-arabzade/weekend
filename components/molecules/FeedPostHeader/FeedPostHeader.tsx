import React, { FC, useState } from 'react'
import { Card, CardHeader, Avatar, IconButton, Menu, MenuItem } from '@mui/material';


//Icon
import MoreVertIcon from '@mui/icons-material/MoreVert';



//Css(Style Sheet)
import useFeedPostHeader from './useStyle';


//InterFace

interface IFeedPostHeader {
    userName: string;
    userPicSrc: string;
    date: string;
    link: string;
    onHideClicked: () => void;
    onReportClicked: () => void;
}


const FeedPostHeader: FC<IFeedPostHeader> = ({
    userName,
    userPicSrc,
    date,
    link,
    onHideClicked,
    onReportClicked

}) => {

    const { classes, cx } = useFeedPostHeader();

    const [anchorEl, setAnchorEl] = useState<null>(null);

    const [hide , setHide] = useState<boolean>(false)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const linkClick = () => {
        console.log(link);
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

    return (
        <Card className={cx(classes.root)} hidden={hide}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={userPicSrc} />
                }
                action={
                    <IconButton
                        aria-label="more"
                        onClick={handleClick}
                        aria-haspopup="true"
                        aria-controls="long-menu"
                    >
                        <MoreVertIcon onClick={handleClick}></MoreVertIcon>
                    </IconButton>
                }
                title={userName}
                subheader={date}
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={anchorEl}
                onClose={handleClose}
            >
                <MenuItem onClick={linkClick}>Link</MenuItem>
                <MenuItem onClick={reportHandler}>Report</MenuItem>
                <MenuItem onClick={hideHandler}>Hide</MenuItem>
            </Menu>
        </Card>
    )
}

export default FeedPostHeader;