import React, { FC } from "react";
import { Button, Card, Grid, Typography, Avatar } from '@mui/material';




//Icon
import TitleIcon from '@mui/icons-material/Title';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';




//Css(Style Sheet)
import useEventDetails from "./useStyle";


//InterFace

interface IEventDetails {
    event: {
        subject: string;
        TimeEvent: string;
        time: string;
        creator: string;
        city: string;
        maximumMember: string;
        dateRegistration: string;
        timeRegistration: string;
        address: string;
        description: string;
    };

    users: Array<{
        profile: string;
    }>

}


const EventDetails: FC<IEventDetails> = ({
    event,
    users
}) => {

    const {classes, cx} = useEventDetails();

    return (
        <div>


            <Card sx={{ width: "300px" }}>
                <Grid p={4}>
                    <Grid>
                        <Typography fontWeight="bold">
                            <Grid display="flex">
                                <TitleIcon></TitleIcon>
                                Subject : {event.subject}
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid mt={2}>
                        <Typography fontWeight="bold">
                            <Grid display="flex" >
                                <CalendarTodayOutlinedIcon></CalendarTodayOutlinedIcon>
                                Date :   <span style={{ color: "orange" }}>{event.TimeEvent}</span>
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid mt={2}>
                        <Typography fontWeight="bold">
                            <Grid display="flex">
                                <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
                                Creator : {event.creator}
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid mt={2}>
                        <Typography fontWeight="bold" color="#F3E5F5">
                            <Grid display="flex">
                                <AccessTimeOutlinedIcon></AccessTimeOutlinedIcon>
                                Time : {event.time}
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid mt={2}>
                        <Typography fontWeight="bold">
                            <Grid display="flex">
                                <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                                City : {event.city}
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid mt={2}>
                        <Typography fontWeight="bold">
                            <Grid display="flex" >
                                <PeopleAltOutlinedIcon></PeopleAltOutlinedIcon>
                                MaximumMember : {event.maximumMember}
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid mt={2}>
                        <Typography fontWeight="bold">
                            <Grid display="flex">
                                <AppRegistrationOutlinedIcon></AppRegistrationOutlinedIcon>
                                DateRegistration : {event.dateRegistration}
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid mt={2}>
                        <Typography fontWeight="bold">
                            <Grid display="flex">
                                <MoreTimeOutlinedIcon></MoreTimeOutlinedIcon>
                                TimeRegistration : {event.timeRegistration}
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid mt={3}>
                        <Typography fontWeight="bold">
                            <Grid display="flex">
                                <BusinessOutlinedIcon></BusinessOutlinedIcon>
                                Address : {event.address}
                            </Grid>
                        </Typography>
                    </Grid>
                    <Grid mt={3}>
                        <Typography fontWeight="bold">
                            <Grid display="flex">
                                <DescriptionOutlinedIcon></DescriptionOutlinedIcon>
                                Description : {event.description}
                            </Grid>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid display="flex" justifyContent="center" m={2}>
                    <Button variant="contained">
                        <Typography fontWeight="bold" onClick={() => {

                            alert("Enter")
                        }}
                        >
                            Participation
                        </Typography>
                    </Button>
                </Grid>
            </Card>
            <Grid mx={1} mt={2}>
                <Typography fontWeight="bold">
                    <Grid display="flex" >
                        <PeopleAltOutlinedIcon></PeopleAltOutlinedIcon>
                        Members
                    </Grid>
                </Typography>
            </Grid>
            <Grid>
                <Card
                    className={cx(classes.member)}
                    sx={{ }}
                >
                    <Grid display="flex" sx={{ overflowX: "auto" }} >
                        {
                            users.map((user, index) => {
                                return (
                                    <Grid key={index} mx={2}>
                                        <Avatar src={user.profile} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Card>
            </Grid>
        </div>
    )
}

export default EventDetails;