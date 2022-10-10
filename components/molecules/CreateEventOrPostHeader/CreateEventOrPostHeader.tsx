import React, { FC } from 'react'
import { Grid, Button, Typography } from '@mui/material';

//CSS (Style Sheet)
import useCreate from './useStyle';


//InterFace

interface ICreate {

    onPostClicked: () => void;
    onEventClicked: () => void;
    selected?: "Post" | "Event" | "None" | undefined;

}


const CreateEventOrPostHeader: FC<ICreate> = ({

    onPostClicked,
    onEventClicked,
    selected,

}) => {


    const { classes, cx } = useCreate();


    const createPostHandler = () => {

        onPostClicked();
        console.log( selected)

    };

    const createEventHandler = () => {

        onEventClicked();


    }


    return (

            <div
                className={cx(classes.root)}
            >
                <Grid
                    display="flex"
                    p={1}
                >
                    <Button
                        variant="contained"
                        className={cx(classes.addPost)}
                        onClick={createPostHandler}
                        
                    >
                        <Typography
                            component="p"
                            variant="body2"
                            fontWeight={700}
                            color="black"
                        >
                            Add <span style={{color:"#fff"}}>Post</span>
                        </Typography>
                    </Button>
                    <Button 
                    variant="contained" 
                    sx={{ background: "#fff" }} 
                    onClick={createEventHandler}
                    >
                        <Typography
                            component="p"
                            variant="body2"
                            fontWeight={700}
                            color="black"
                        >
                            Create <span className={cx(classes.baseColor)}>Event</span>
                        </Typography>
                    </Button>
                </Grid>
            </div>

    )
}

export default CreateEventOrPostHeader;