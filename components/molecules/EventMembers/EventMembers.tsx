import React, { FC } from "react";
import { Card, Avatar, Grid } from "@mui/material";

//Css(Style Sheet)
import useEventMembers from "./useStyle";



//InterFace

interface IMember {
    id: number;
    userName: string;
    picSrc: string;
}

interface IEventMembers {
    members: Array<IMember>;
}



const EventMembers: FC<IEventMembers> = ({

    members

}) => {

    const { classes, cx } = useEventMembers();

    const handleMemberClick = (member: IMember) => () => {

    }

    return (
        <div>

            <Grid>
                <Card
                    className={cx(classes.members)}
                >
                    <Grid display="flex" sx={{ overflowX: "auto" }} >
                        {
                            members.map(member => {
                                return (
                                    <Grid
                                        key={member.id}
                                        mx={2}
                                    >
                                        <Avatar
                                            src={member.picSrc}
                                            onClick={handleMemberClick(member)}
                                        />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Card>
            </Grid>

        </div>
    )
}

export default EventMembers;