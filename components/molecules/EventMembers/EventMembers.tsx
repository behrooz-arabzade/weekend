import React, { FC } from "react";
import { Card, Avatar, Grid } from "@mui/material";

//Css(Style Sheet)
import useEventMembers from "./useStyle";



//InterFace

interface IEventMembers {

    members: Array<{
        id: number;
        userName: string;
        picSrc: string;
    }>;

}



const EventMembers: FC<IEventMembers> = ({

    members

}) => {

    const { classes, cx } = useEventMembers();

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
                                            onClick={() => {
                                               alert(` go to page ${member.userName} `)
                                            }}

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