import React, { useState, FC } from 'react';
import { Grid, Typography, TextField, Button, Rating } from "@mui/material";



//InterFace

interface IEventCommentSend {

    onSubmitClicked: (rate:number, comment:string) => void;

}


const EventCommentSend:FC<IEventCommentSend> = ({

    onSubmitClicked

}) => {

    const [text, setText] = useState<string>("");

    const [value, setValue] = useState<number>(0);

    const submitClick = () => {

        onSubmitClicked(value, text)

    }


    return (
        <div>
            <Grid display="flex" justifyContent="space-between">
                <Grid>
                    <Typography
                        component="p"
                        variant="h6"
                        fontWeight={700}
                        color="primary"
                    >
                        Send Comment
                    </Typography>
                </Grid>
                <Grid mt={1}>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Grid>
            </Grid>
            <Grid mt={2}>
                <TextField
                    label="Comment"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    value={text}
                    onChange={e => setText(e.target.value)}
                    multiline
                    minRows={4}
                />

            </Grid>

            <Grid
                display="flex"
                justifyContent="center"
                mt={2}
            >
                <Button onClick={submitClick} variant="contained">
                    <Typography
                        fontWeight="bold"
                    >
                        Send
                    </Typography>
                </Button>

            </Grid>


        </div>
    )
}

export default EventCommentSend;