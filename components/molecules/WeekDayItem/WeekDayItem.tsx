import React, { FC } from 'react';
import {
    Typography,
    Box,
    Divider,
    Grid,
    IconButton
} from "@mui/material";



//Icon
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';


//InterFace
interface IWeekDay {
    startHour: string;
    startMinute: string;
    endHour: string;
    endMinute: string;
    timeName: string;
    day: string;
}


const WeekDayItem: FC<IWeekDay> = ({
    startHour,
    startMinute,
    endHour,
    endMinute,
    timeName,
    day
}) => {

    const addTime = () => {

        console.log("go to time page");

    };

    const editHandler = () => {

        console.log("go to edit free time")

    }

    return (
        <div>

            <Box
                m={4}
                display="flex"
                justifyContent="space-evenly"
                sx={{
                    borderRadius: 1,
                }}
                boxShadow={1}
            >
                <Grid display="flex" alignItems="center">
                    <Grid display="flex">
                        <Grid mx={1}>
                            <Typography fontWeight="bold">
                                {eval(startHour)}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography fontWeight="bold">
                                :
                            </Typography>
                        </Grid>
                        <Grid mx={1}>
                            <Typography fontWeight="bold">
                                {eval(startMinute)}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography fontWeight="bold">
                        To
                    </Typography>
                    <Grid display="flex">
                        <Grid mx={1}>
                            <Typography fontWeight="bold">
                                {eval(endHour)}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography fontWeight="bold">
                                :
                            </Typography>
                        </Grid>
                        <Grid mx={1}>
                            <Typography fontWeight="bold">
                                {eval(endMinute)}
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
                <Divider orientation="vertical" flexItem color="inherit" />
                <Grid display="flex" alignItems="center">
                    <Grid mx={1}>
                        <Typography fontWeight="bold">
                            {timeName}
                        </Typography>
                        <Typography fontWeight="bold" color="orange">
                            {day}
                        </Typography>
                    </Grid>
                    <Grid 
                    display="flex" 
                    ml={4} 
                    mt={5} 
                    justifyContent="start" 
                    alignItems="end"
                    >
                            <ModeEditOutlineOutlinedIcon onClick={editHandler} color="inherit"></ModeEditOutlineOutlinedIcon>
                    </Grid>
                </Grid>
            </Box>

            <Grid display="flex" justifyContent="center">
                <IconButton onClick={addTime} color="inherit">
                    <ControlPointOutlinedIcon></ControlPointOutlinedIcon>
                </IconButton>
            </Grid>

        </div>
    )
}

export default WeekDayItem;