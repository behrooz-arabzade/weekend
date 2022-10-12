import React, { FC } from 'react';
import { Card, CardMedia, Typography, CardContent, CardActions, Button, Grid } from "@mui/material";



//Icon
import TitleIcon from '@mui/icons-material/Title';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';


//InterFace

interface IEventGrid {

    subject: string;
    name: string;
    eventId: number;
    imageSrc: string;
    onEventClicked: (eventId: number) => void;

}




const EventGridItem: FC<IEventGrid> = ({

    subject,
    name,
    eventId,
    imageSrc,
    onEventClicked

}) => {
    return (
        <div>

            <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={imageSrc}
                    alt={name}
                />
                <CardContent>
                    <Grid display="flex">
                        <TitleIcon></TitleIcon>
                        <Typography
                            gutterBottom
                            component="div"
                            fontWeight={700}
                        >
                            Subject : {subject}
                        </Typography>
                    </Grid>
                    <Grid
                        display="flex"
                        alignItems="center"
                    >
                        <PeopleAltOutlinedIcon color="inherit"></PeopleAltOutlinedIcon>
                        <Typography
                            variant="body2"
                            mx={1}
                            fontWeight={700}
                        >
                            Event Name : {name}
                        </Typography>
                    </Grid>
                </CardContent>
                <Grid display="flex" justifyContent="center">
                    <CardActions>
                        <Button
                            size="small"
                            onClick={() => {

                                onEventClicked(eventId)

                            }}> More </Button>
                    </CardActions>
                </Grid>
            </Card>
        </div>
    )
}

export default EventGridItem;