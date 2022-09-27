import React,
{
    Component,
    FC
} from 'react'

import { useRouter } from "next/router"

import {
    Grid,
    AppBar,
    Button
} from '@mui/material';




//CSS(Style Sheet)
import useMainNavigationStyle from './useStyle';



//InterFace
interface IMainNavigation {
    items: Array<{
        id: string,
        icon: Component
    }>;
    onItemSelected: (id: string) => void;
    selectedItemId: (pathname: string) => void;
}



const MainNavigation: FC<IMainNavigation> = ({
    items,
    onItemSelected,
    selectedItemId
}) => {

    const { classes, cx } = useMainNavigationStyle();

    const router = useRouter();

    const messages = 2;

    console.log(selectedItemId(router.pathname))

    const homeClick = () => {
        onItemSelected(items[0].id);
    };

    const searchClick = () => {
        onItemSelected(items[1].id);
    };

    const createClick = () => {
        onItemSelected(items[2].id);
    };

    const eventActiveClick = () => {
        onItemSelected(items[3].id);
    };

    const messageClick = () => {
        onItemSelected(items[4].id);
    };

    return (
        <AppBar className={cx(classes.root)} color="transparent" position="fixed">
            <Grid padding="5px 0px" container>
                <Grid textAlign="center" item xs={3} >
                    <Button onClick={homeClick} color="inherit">
                        {items[0].icon}
                    </Button>
                </Grid>
                <Grid textAlign="center" item xs={2}>
                    <Button onClick={searchClick} color="inherit">
                        {items[1].icon}
                    </Button>
                </Grid>
                <Grid item xs={2} textAlign="center">
                    <Button onClick={createClick} color="inherit">
                        {items[2].icon}
                    </Button>
                </Grid>
                <Grid onClick={eventActiveClick} textAlign="center" item xs={2}>
                    <Button color="inherit">
                        {items[3].icon}
                    </Button>
                </Grid>
                <Grid textAlign="center" item xs={3}>
                    <Button onClick={messageClick} color="inherit">
                        {items[4].icon}
                        {
                            messages > 0 ?
                                <span className={cx(classes.spanMessage)}>{messages}</span>
                                : ""
                        }
                    </Button>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default MainNavigation;