import React, { FC } from 'react';
import { Card, CardMedia, Typography, CardActions, Button, Grid, Avatar } from "@mui/material";




//Icon
import TitleIcon from '@mui/icons-material/Title';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';



//InterFace
interface IEventListItem {

    imageSrc: string;
    eventId: number;
    name: string;
    onEventClicked: (eventId: number) => void;
    startDate: string;
    endDate: string;
    tags: Array<string>;
    address: string;
    minUser: number;
    maxUser: number;
    startHour: number;
    endHour: number;
    description: string;
    ownerUsername: string;
    ownerPicSrc: string;

}




const EventListItem: FC<IEventListItem> = ({

    imageSrc,
    eventId,
    name,
    onEventClicked,
    startDate,
    endDate,
    tags,
    address,
    minUser,
    maxUser,
    startHour,
    endHour,
    description,
    ownerUsername,
    ownerPicSrc,

}) => {
    return (

        <Card sx={{ maxWidth: "500px" }}>
            <CardMedia
                component="img"
                height="140"
                image={imageSrc}
                alt={name}
            />
            <Grid
                container
            >
                <Grid
                    md={6}
                    xs={6}
                    p={2}
                    item
                >
                    <Grid
                        display="flex"
                        alignItems="center"
                    >
                        <TitleIcon></TitleIcon>
                        <Typography
                            gutterBottom
                            component="div"
                            fontWeight={700}
                            fontSize={15}
                            mx={1}
                        >
                            {

                                tags.map((item, index) => {

                                    return (
                                        <div key={index}>
                                            {item}
                                        </div>
                                    )
                                })

                            }
                        </Typography>
                    </Grid>

                    <Grid
                        display="flex"
                        alignItems="center"
                    >
                        <CelebrationIcon></CelebrationIcon>
                        <Typography
                            variant="body2"
                            component="div"
                            fontWeight={700}
                            fontSize={15}
                            mx={1}
                        >
                            {name}
                        </Typography>
                    </Grid>

                    <Grid
                        display="flex"
                        alignItems="center"
                    >
                        <Avatar
                            src={ownerPicSrc}
                            sx={{ width: "30px", height: "30px" }}
                        />
                        <Typography
                            variant="body2"
                            component="div"
                            fontWeight={700}
                            fontSize={12}
                            mx={1}
                        >
                            {ownerUsername}
                        </Typography>
                    </Grid>



                </Grid>


                <Grid
                    xs={6}
                    sm={6}
                    p={2}
                    item
                >
                    <Grid
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="text.secondary"
                    >

                        <Typography
                            gutterBottom
                            component="div"
                            fontWeight={700}
                            fontSize={10}
                            mx={1}
                        >

                            {startDate} - {endDate}

                        </Typography>
                    </Grid>
                    <Grid
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mt={2}
                    >
                        <AccessTimeIcon></AccessTimeIcon>
                        <Typography
                            variant="body2"
                            component="div"
                            fontWeight={700}
                            fontSize={15}
                            mx={1}
                        >

                            {startHour} - {endHour}

                        </Typography>
                    </Grid>
                    <Grid
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <PeopleAltOutlinedIcon></PeopleAltOutlinedIcon>
                        <Typography
                            variant="body2"
                            component="div"
                            fontWeight={700}
                            fontSize={15}
                            mx={1}
                        >
                            {minUser} - {maxUser}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    display="flex"
                    px={2}
                >
                    <FmdGoodOutlinedIcon></FmdGoodOutlinedIcon>
                    <Typography
                        variant="body2"
                        component="div"
                        fontWeight={700}
                    >
                        {address}
                    </Typography>
                </Grid>
                <Grid
                    display="flex"
                    p={2}
                >
                    <DescriptionOutlinedIcon></DescriptionOutlinedIcon>
                    <Typography
                        variant="body2"
                        component="div"
                        fontWeight={700}
                    >
                        {description}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                display="flex"
                justifyContent="center"
            >
                <CardActions>
                    <Button
                        size="small"
                        onClick={() => {

                            onEventClicked(eventId)

                        }}
                    > More

                    </Button>
                </CardActions>
            </Grid>
        </Card >

    )
}

export default EventListItem;