import React, { FC, useState, MouseEvent } from 'react'
import { Button, Typography, Popover, TextField, Grid } from '@mui/material';




//InterFaces
interface IReport {
    open?: boolean;
    onClose: () => void;
}


const Report: FC<IReport> = ({
    open,
    onClose
}) => {

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | boolean | null>(open);

    const [data, setData] = useState({
        subject: "",
        description: "",
    });

    const cheangeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(false);
        onClose();
    };

    const sendHandler = () => {
        console.log(data)
    }

    const openPop = Boolean(anchorEl);
    
    const id = openPop ? 'simple-popover' : undefined;

    return (
        <div>
            <Button color="inherit" aria-describedby={id} variant="contained" onClick={handleClick}>
                Report
            </Button>
            <Popover
                id={id}
                open={openPop}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{ width: "300px" }}
            >
                <Grid>
                    <TextField
                        sx={{ m: 4, width: "200px" }}
                        id="outlined-textarea"
                        label="Subject"
                        onChange={cheangeHandler}
                        name="subject"
                        value={data.subject}
                        multiline
                    />
                    <TextField
                        sx={{ m: 4 }}
                        id="outlined-multiline-static"
                        label="Description"
                        onChange={cheangeHandler}
                        multiline
                        name="description"
                        value={data.description}
                        rows={6}
                    />
                </Grid>
                <Grid 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
                >
                    <Button 
                    onClick={sendHandler} 
                    sx={{ width: "100%" }} 
                    color="inherit"
                    disabled={(data.subject === "" || data.description === "") ? true : false }
                    >
                        <Typography fontWeight="bold">
                            Send
                        </Typography>
                    </Button>
                </Grid>
            </Popover>
        </div>
    )
}

export default Report;