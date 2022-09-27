import React from "react";
import {
  AppBar,
  Avatar,
  Container,
  Divider,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

//CSS(Style Sheets)
import useMainHeaderStyle from "./useStyle";

const MainHeader = () => {
  const { cx, classes } = useMainHeaderStyle();

  const clickHandler = () => {
    console.log("profile page");
  };

  return (
    <AppBar color="transparent" position="fixed" className={cx(classes.root)}>
      <Divider className={cx(classes.headerDivider)} />
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h4" variant="h5" fontWeight="700" flex={1}>
            Week<span className={cx(classes.spanLogo)}>End</span>
          </Typography>
          <Button onClick={clickHandler}>
            <Avatar
              className={cx(classes.profileImg)}
              src="/Images/Aryan.jpg"
            />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainHeader;
