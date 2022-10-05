import React, { FC, useState } from 'react'
import { Card, Grid, Avatar, Typography, IconButton, Button, CardActionArea, ButtonBase } from '@mui/material';

//Css(Style Sheet)
import useFriendCardStyle from './useStyle';


//Icon
import CheckIcon from '@mui/icons-material/Check';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

//InterFace

interface IFriendCard {
    name: string;
    userId: number,
    picSrc: string;
    variant: "anonymous" | "friend" | "block" | "request";
    onlineStatus: string;
    onClick: (id: number) => void,
    onRemoveFriend: (id: number) => void,
    onUnblock: (id: number) => void,
    onAcceptRequest: (id: number) => void,
    onRejectRequest: (id: number) => void,
}



const FriendCard: FC<IFriendCard> = ({
    name,
    userId,
    picSrc,
    variant,
    onlineStatus,
    onClick,
    onRemoveFriend,
    onUnblock,
    onAcceptRequest,
    onRejectRequest
}) => {

    const { classes, cx } = useFriendCardStyle();

    const [hide, setHide] = useState<boolean>(false);

    const removeFriendClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onRemoveFriend(userId)
    }

    const removeBlockClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onUnblock(userId)
    }

    const acceptClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onAcceptRequest(userId)
    };

    const rejectClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onRejectRequest(userId)
    }

    const handleClick = () => {
        onClick(userId);
    }

    return (
        <Card onClick={handleClick} className={cx(classes.root)} hidden={hide}>
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
                            <Button className={cx(classes.removeBtn)} onClick={removeFriendClick}>
                                <Typography color="black" fontWeight="bold">remove</Typography>
                            </Button>
                            :
                            variant === "block"
                                ?
                                <Button className={cx(classes.removeBtn)} onClick={removeBlockClick}>
                                    <Typography color="black" fontWeight="bold">unblock</Typography>
                                </Button>
                                :
                                // variant === "anonymous"
                                //     ?
                                //     <Button className={cx(classes.removeBtn)} onClick={request}>
                                //         <Typography color="black" fontWeight="bold"><span>+</span> request</Typography>
                                //     </Button>
                                //     :
                                variant === "request"
                                    ?
                                    <Grid>
                                        <IconButton color="error" onClick={rejectClick}>
                                            <Typography fontWeight="bold">
                                                <ClearOutlinedIcon></ClearOutlinedIcon>
                                            </Typography>
                                        </IconButton>
                                        <IconButton color="success" onClick={acceptClick}>
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
    )
}

export default FriendCard;