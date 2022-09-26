import React from 'react'
import { AppBar, Avatar, Card, Container, Divider, Toolbar, Typography } from '@mui/material';



//CSS(Style Sheets)
import useMainHeader from './useStyle';



const MainHeader = () => {

    const { cx, classes } = useMainHeader();

    return (
        <AppBar color="transparent" position="fixed" className={cx(classes.root)}>
            <Divider className={cx(classes.headerDivider)} />
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography component="h4" variant="h5" fontWeight="700" flex={1}>
                        Week<span className={cx(classes.spanLogo)} >End</span>
                    </Typography>
                    <Avatar className={cx(classes.profileImg)} src="/Images/Aryan.jpg" />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MainHeader;