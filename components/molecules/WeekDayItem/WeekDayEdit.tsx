import React, { useState, useRef,FC } from 'react';
import {
    IconButton,
    Container,
    Grid,
    Typography,
    Button,
    Popper,
    Grow,
    ClickAwayListener,
    MenuList,
    MenuItem,
    ButtonGroup,
    Paper,
    TextField
} from '@mui/material';

//Icon
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


//InterFace
interface IWeekDayEdit {
    onChange: (startHour : number, startMinute:number, endHour:number, endMinute:number, day:string, timeName:string ) => void;
}



const WeekDayEdit:FC<IWeekDayEdit> = ({
    onChange
}) => {

    const options = ["Sat", "Sun", "Mon", "Tus", "Wen", "Thr", "Fri"];

    const [startTimeHour, setStartTimeHour] = useState<number>(0o0);

    const [startTimeMinute, setStartTimeMinute] = useState<number>(0o0)

    const [endTimeHour, setEndTimeHour] = useState<number>(0o0);

    const [endTimeMinute, setEndTimeMinute] = useState<number>(0o0)

    const [open, setOpen] = useState<boolean>(false);

    const anchorRef = useRef<HTMLDivElement>(null);

    const [selectedIndex, setSelectedIndex] = useState<number>(1);

    const [_timeName, set_TimeName] = useState<string>("")


    const upStartHourHandler = () => {

        setStartTimeHour(startTimeHour + 1);

        if (startTimeHour >= 24) setStartTimeHour(0o0);

    };

    const downStartHourHandler = () => {

        setStartTimeHour(startTimeHour - 1);

        if (startTimeHour <= 0) setStartTimeHour(24);

    };

    const upStartMinuteHandler = () => {

        setStartTimeMinute(startTimeMinute + 1);

        if (startTimeMinute >= 59) setStartTimeMinute(0o0);

    };

    const downStartMinuteHandler = () => {

        setStartTimeMinute(startTimeMinute - 1);

        if (startTimeMinute <= 0) setStartTimeMinute(59);


    };

    const upEndHourHandler = () => {

        setEndTimeHour(endTimeHour + 1);

        if (endTimeHour >= 24) setEndTimeHour(0o0);

    };

    const downEndHourHandler = () => {

        setEndTimeHour(endTimeHour - 1);

        if (endTimeHour <= 0) setEndTimeHour(24);

    };

    const upEndMinuteHandler = () => {

        setEndTimeMinute(endTimeMinute + 1);

        if (endTimeMinute >= 59) setEndTimeMinute(0o0);

    };

    const downEndMinuteHandler = () => {

        setEndTimeMinute(endTimeMinute - 1);

        if (endTimeMinute <= 0) setEndTimeMinute(59);

    };

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    const cheangeHandler = (e: any) => {

        set_TimeName(e.target.value);

    };

    const sendHandler = () => {

        onChange(startTimeHour, startTimeMinute , endTimeHour , endTimeMinute , options[selectedIndex], _timeName);
    
    };


    return (
        <div>
            <Container>
                <Grid display="flex" justifyContent="space-evenly">
                    <Grid>
                        <Grid>
                            <IconButton color="inherit" onClick={upStartHourHandler}>
                                <KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon>
                            </IconButton>
                        </Grid>
                        <Grid textAlign="center">
                            <Typography>{startTimeHour}</Typography>
                        </Grid>
                        <Grid>
                            <IconButton color="inherit" onClick={downStartHourHandler}>
                                <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid mb={2} display="flex" alignItems="center">
                        :
                    </Grid>
                    <Grid>
                        <Grid>
                            <IconButton color="inherit" onClick={upStartMinuteHandler}>
                                <KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon>
                            </IconButton>
                        </Grid>
                        <Grid textAlign="center">
                            <Typography>{startTimeMinute}</Typography>
                        </Grid>
                        <Grid>
                            <IconButton color="inherit" onClick={downStartMinuteHandler}>
                                <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography textAlign="center">To</Typography>
                </Grid>
                <Grid display="flex" justifyContent="space-evenly">
                    <Grid>
                        <Grid>
                            <IconButton color="inherit" onClick={upEndHourHandler}>
                                <KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon>
                            </IconButton>
                        </Grid>
                        <Grid textAlign="center">
                            <Typography>{endTimeHour}</Typography>
                        </Grid>
                        <Grid>
                            <IconButton color="inherit" onClick={downEndHourHandler}>
                                <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid mb={2} display="flex" alignItems="center">
                        :
                    </Grid>
                    <Grid>
                        <Grid>
                            <IconButton color="inherit" onClick={upEndMinuteHandler}>
                                <KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon>
                            </IconButton>
                        </Grid>
                        <Grid textAlign="center">
                            <Typography>{endTimeMinute}</Typography>
                        </Grid>
                        <Grid>
                            <IconButton color="inherit" onClick={downEndMinuteHandler}>
                                <KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid display="flex" justifyContent="center" >
                    <ButtonGroup variant="outlined" ref={anchorRef} aria-label="split button">
                        <Button color="inherit" onClick={handleClick}>{options[selectedIndex]}</Button>
                        <Button
                            color="inherit"
                            size="small"
                            aria-controls={open ? 'split-button-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle}
                        >
                            <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>
                    <Popper
                        sx={{
                            zIndex: 1,
                        }}
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList id="split-button-menu" autoFocusItem>
                                            {options.map((option, index) => (
                                                <MenuItem
                                                    key={option}
                                                    selected={index === selectedIndex}
                                                    onClick={(event) => handleMenuItemClick(event, index)}
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Grid>
                <Grid mt={10}>
                    <TextField
                        name="_timeName"
                        onChange={cheangeHandler}
                        value={_timeName}
                        variant="outlined"
                        label="Time Name"
                        sx={{ width: "150px",zIndex:0 }}
                        multiline
                    />
                </Grid>
                <Grid display="flex" justifyContent="space-evenly" mt={10}>
                    <Button variant="contained" onClick={sendHandler}>
                        Enter
                    </Button>
                    <Button color="inherit">
                        Cancel
                    </Button>
                </Grid>
            </Container>
        </div>
    )
}

export default WeekDayEdit;