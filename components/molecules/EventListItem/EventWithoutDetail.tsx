import React, { FC } from 'react';
import { Card, CardMedia, Typography, CardActions, Button, Grid} from "@mui/material";


//Icon
import TitleIcon from '@mui/icons-material/Title';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';



//InterFace
interface IEventWithoutDetail {

    imageSrc: string;
    eventId: number;
    name: string;
    onEventClicked: (eventId: number) => void;
    startDate: string;
    endDate: string;
    tags: Array<string>;
    startHour: number;
    endHour: number;

}






const EventWithoutDetail:FC<IEventWithoutDetail> = ({

    imageSrc,
    eventId,
    name,
    onEventClicked,
    startDate,
    endDate,
    tags,
    startHour,
    endHour,

}) => {
  return (
    <div>
        
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
        
    </div>
  )
}

export default EventWithoutDetail