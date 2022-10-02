import React, { FC, useState } from 'react'
import { Container, Grid, Avatar, CardMedia, IconButton, Modal, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@material-ui/core';
import { Card } from '@mui/material';




//Css(Style Sheet)
import useUserProfileDetails from './useStyle';

//Icons
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';


//InterFace

interface IUserInfo {
    UserInfo: {
        picSrc: string;
        username: string;
        firstname: string;
        lastname: string;
        country: string;
        city: string;
        friendCount: number;
        postTagedCount: number;
        contactInfo: {
            mobile: string;
            address: string;
        };
    };
    onFriendRequestClicked: () => void;
    onBlockClicked: () => void;
    onFriendsClicked: () => void;
}


const UserProfileDetails: FC<IUserInfo> = ({
    onFriendsClicked,
    UserInfo,
    onFriendRequestClicked,
    onBlockClicked
}) => {


    const { classes, cx } = useUserProfileDetails();


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [posts, setPosts] = useState<boolean>(true);
    const [events, setEvents] = useState<boolean>(false);
    const [mark, setMark] = useState<boolean>(false);


    const clickPosts = () => {

        setPosts(true);
        setEvents(false);
        setMark(false);
    }

    const clickEvents = () => {
        setPosts(false);
        setEvents(true);
        setMark(false);
    }

    const clickMark = () => {
        setPosts(false);
        setEvents(false);
        setMark(true);
    }

    const clickFriends = () => {
        onFriendsClicked();
    };

    const RequestFriendClick = () => {

        onFriendRequestClicked();

    };

    const blockUserClick = () => {

        onBlockClicked();

    }

    return (
        <div>
            <Container>
                <Grid display="flex" alignItems="center" justifyContent="space-evenly">
                    <Grid pr={5} item>
                        <Avatar sx={{ width: 70, height: 70 }} src={UserInfo.picSrc} />
                    </Grid>
                    <Grid item>
                        <Grid display="flex" justifyContent="space-around">
                            <Grid>
                                <Typography mr={5} fontWeight="bold">Posts</Typography>
                                <Typography ml={1} fontWeight="bold" color="orange" >{UserInfo.postTagedCount}</Typography>
                            </Grid>
                            <Grid>
                                <Typography fontWeight="bold" onClick={clickFriends}>Friends</Typography>
                                <Typography textAlign="center" fontWeight="bold" color="orange" >{UserInfo.friendCount}</Typography>
                            </Grid>
                        </Grid>
                        <Grid my={0.5}>
                            <Button onClick={RequestFriendClick}>
                                <Card sx={{ width: 200, padding: 1 }}>
                                    <Typography fontWeight="bold" >Request Friend</Typography>
                                </Card>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid mt={5} >
                    <Typography fontWeight="bold" fontSize="13px" ml={5}>
                        {UserInfo.username}
                    </Typography>
                    <Grid ml={4}>
                        <Grid display="grid" gridTemplateColumns="repeat(3,auto)">
                            <Grid display="flex" alignItems="center">
                                < PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
                                <Typography fontWeight="bold" fontSize="13px">
                                    {UserInfo.firstname} {UserInfo.lastname}
                                </Typography>
                            </Grid>
                            <Grid display="flex" alignItems="center">
                                <LanguageOutlinedIcon></LanguageOutlinedIcon>
                                <Typography fontWeight="bold" fontSize="13px">
                                    {UserInfo.country}
                                </Typography>
                            </Grid>
                            <Grid display="flex" alignItems="center">
                                <PlaceOutlinedIcon></PlaceOutlinedIcon>
                                <Typography fontWeight="bold" fontSize="13px">
                                    {UserInfo.city}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid display="flex" alignItems="center">
                            <StarBorderPurple500OutlinedIcon></StarBorderPurple500OutlinedIcon>
                            <Typography fontWeight="bold" fontSize="13px">
                                Game,Football,
                            </Typography>
                        </Grid>
                        <Grid display="flex" justifyContent="space-between">
                        <Grid display="flex" alignItems="center">
                            <Button color="primary" onClick={handleOpen}>
                                <Typography fontWeight="bold" fontSize="13px">
                                    Contact info
                                </Typography>
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box className={cx(classes.modalGroup)}>
                                        <Grid display="flex" alignItems="center">
                                            <LocalPhoneOutlinedIcon></LocalPhoneOutlinedIcon>
                                            <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="bold">
                                                Mobile
                                            </Typography>
                                        </Grid>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        {UserInfo.contactInfo.mobile}
                                    </Typography>
                                    <Grid display="flex" alignItems="center">
                                            <BusinessOutlinedIcon></BusinessOutlinedIcon>
                                            <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="bold">
                                                Address
                                            </Typography>
                                        </Grid>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        {UserInfo.contactInfo.address}
                                    </Typography>
                                </Box>
                            </Modal>
                        </Grid>
                        <Button color="primary" onClick={blockUserClick}>
                                <Typography fontWeight="bold" fontSize="13px">
                                    Block User
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Card className={cx(classes.selected)}>
                <Grid display="grid" gridTemplateColumns="repeat(3,auto)">
                    <Grid className={(posts) ? cx(classes.active) : cx(classes.deactivate)}>
                        <Typography>
                            <Button onClick={clickPosts}>
                                <ImportContactsIcon></ImportContactsIcon>
                            </Button>
                        </Typography>
                    </Grid>
                    <Grid className={(events) ? cx(classes.active) : cx(classes.deactivate)}>
                        <Button onClick={clickEvents}>
                            <Typography fontWeight="bold" >E<span className={cx(classes.logoColor)}>V</span></Typography>
                        </Button>
                    </Grid>
                    <Grid className={(mark) ? cx(classes.active) : cx(classes.deactivate)}>
                        <Typography>
                            <Button onClick={clickMark}>
                                <TurnedInOutlinedIcon></TurnedInOutlinedIcon>
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
            <Grid display="grid" gridTemplateColumns="repeat(3,auto)" p={5}>
                <Grid m={2}>
                    <CardMedia
                        component="img"
                        height="100"
                        image="Images/post3.jpg"
                        alt="post3"
                    />
                </Grid>
                <Grid m={2}>
                    <CardMedia
                        component="img"
                        height="100"
                        image="Images/post2.jpg"
                        alt="post2"
                    />
                </Grid>
                <Grid m={2}>
                    <CardMedia
                        component="img"
                        height="100"
                        image="Images/post1.jpg"
                        alt="post1"
                    />
                </Grid>
                <Grid m={2}>
                    <CardMedia
                        component="img"
                        height="100"
                        image="Images/post3.jpg"
                        alt="post3"
                    />
                </Grid>
                <Grid m={2}>
                    <CardMedia
                        component="img"
                        height="100"
                        image="Images/post2.jpg"
                        alt="post2"
                    />
                </Grid>
                <Grid m={2}>
                    <CardMedia
                        component="img"
                        height="100"
                        image="Images/post1.jpg"
                        alt="post1"
                    />
                </Grid>
            </Grid>
        </div >
    )
}

export default UserProfileDetails;