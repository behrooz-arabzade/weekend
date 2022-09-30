import React, { FC, useState } from 'react'
import { Card, Grid, Avatar, Typography, IconButton } from '@mui/material';
import { Badge } from "@mui/joy"


//Css(Style Sheet)
import useFriendCard from './useStyle';


//Icon
import CheckIcon from '@mui/icons-material/Check';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

//InterFace

interface IFriendCard {
    name: string;
    picSrc: string;
    variant: string;
    onlineStatus: string;
}



const FriendCard: FC<IFriendCard> = ({
    name,
    picSrc,
    variant,
    onlineStatus
}) => {

    const { classes, cx } = useFriendCard();

    const [hide, setHide] = useState<boolean>(false);

    const removeFriendClick = () => {
        setHide(true);
        alert("user remove to your friend")
    }

    const removeBlockClick = () => {
        setHide(true);
        alert("user removed to block")
    }

    const request = () => {

        setHide(true);
        alert("send your request");

    };

    const addClick = () => {
        setHide(true);
        alert("user add to friend")
    };

    const rejectClick = () => {
        setHide(true);
        alert("reject user")
    }

    return (
        <Grid>
            <Typography>type of variant</Typography>
            <Card className={cx(classes.root)} hidden={hide}>
                <Grid display="flex" justifyContent="space-between">
                    <Grid display="flex" item>
                        <Avatar src={picSrc} />
                        <Grid>
                            <Typography fontWeight="bold" fontSize={13} ml={2}>{name}</Typography>
                            {
                                 variant === "friend"
                                    ?
                                  
                                    <Typography fontWeight="bold" fontSize={11} ml={2} color={

                                        onlineStatus === "online"
                                        
                                        ?

                                        "green"

                                        :
                                        onlineStatus === "offline"

                                        ?

                                        "gray"

                                        :

                                        "orange"

                                    }> {onlineStatus} </Typography>
                                   
                                    :

                                    ""
                            }
                        </Grid>
                    </Grid>
                    <Grid flexWrap="nowrap" item>
                        {
                            variant === "friend"
                                ?
                                <IconButton onClick={removeFriendClick}>
                                    <Typography color="black" fontWeight="bold"><span>×</span> remove</Typography>
                                </IconButton>
                                :
                                variant === "block"
                                    ?
                                    <IconButton onClick={removeBlockClick}>
                                        <Typography color="black" fontWeight="bold"><span>×</span> remove</Typography>
                                    </IconButton>
                                    :
                                    variant === "anonymous"
                                        ?
                                        <IconButton onClick={request}>
                                            <Typography color="black" fontWeight="bold"><span>+</span> request</Typography>
                                        </IconButton>
                                        :
                                        variant === "request"
                                            ?
                                            <Grid>
                                                <IconButton color="error" onClick={rejectClick}>
                                                    <Typography fontWeight="bold">
                                                        <ClearOutlinedIcon></ClearOutlinedIcon>
                                                    </Typography>
                                                </IconButton>
                                                <IconButton color="success" onClick={addClick}>
                                                    <Typography fontWeight="bold">ّ
                                                        <CheckIcon></CheckIcon>
                                                    </Typography>
                                                </IconButton>
                                            </Grid>
                                            :

                                            ""
                        }

                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default FriendCard;