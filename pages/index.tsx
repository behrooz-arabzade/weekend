import type { NextPage } from "next";
// Components
import ViewType from "components/molecules/ViewType/ViewType";
import GridIcon from "components/molecules/ViewType/GridIcon";
import ListViewWithDetail from "components/molecules/ViewType/ListViewWithDetail";
import ListViewWithoutDetail from "components/molecules/ViewType/ListViewWithoutDetail";

//Icons

//Css(Style Sheet)
import styles from "../styles/Home.module.css";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import UserProfileEditForm from "components/molecules/UserProfileEditForm/UserProfileEditForm";

const Home: NextPage = () => {

  const UserInfoEdit = {
    picSrc: "Images/Aryan.jpg",
    username: "Aryan_Salemabadi",
    firstname: "Aryan",
    email:"aryanavatar1380@fmail.com",
    lastname: "Salemabadi",
    country: "Iran",
    city: "Tehran",
    contactInfo: {
      mobile: "09215531809",
      address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  }

  return (
    <div className={styles.container}>
      <Container>
        <Grid
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ViewType
            items={[
              {
                name: "grid",
                icon: <GridIcon />,
              },
              {
                name: "listview with detail",
                icon: <ListViewWithDetail />,
              },
              {
                name: "listview without detail",
                icon: <ListViewWithoutDetail />,
              },
            ]}
            selectedTypeName="grid"
            onViewTypeClicked={(viewName) => {
              console.log("click to", viewName);
            }}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
