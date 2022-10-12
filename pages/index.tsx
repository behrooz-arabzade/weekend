import type { NextPage } from "next";
// Components
import MainNavigation from "components/molecules/MainNavigation/MainNavigation";
import HomeIcon from "components/molecules/MainNavigation/HomeIcon";
import SearchIcon from "components/molecules/MainNavigation/Search";
import Create from "components/molecules/MainNavigation/Create";
import EventActive from "./../components/molecules/MainNavigation/EventActive";
import MessageIcon from "./../components/molecules/MainNavigation/MessageIcon";
import FeedPostFooter from "components/molecules/FeedPostFooter/FeedPostFooter";
import FeedPostHeader from './../components/molecules/FeedPostHeader/FeedPostHeader';
import ReactionButton from "components/molecules/ReactionButton/ReactionButton";
import Like from "components/molecules/ReactionButton/Like";
import UnLike from "components/molecules/ReactionButton/UnLike";
import Idea from "components/molecules/ReactionButton/Idea";
import EventMembers from "components/molecules/EventMembers/EventMembers";

//Icons

//Css(Style Sheet)
import styles from "../styles/Home.module.css";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";


const Home: NextPage = () => {

  const event = {

    subject: "pool",
    image: "Images/pool.jpg",
    TimeEvent: "2022/11/12 - 2022/11/15",
    time: "19 - 21",
    creator: "@Aryan_Salemabadi",
    city: "Tehran",
    maximumMember: "20",
    dateRegistration: "2022/10/12 - 2022/10/15",
    timeRegistration: " 00 - 23 ",
    address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque"

  };

  const users = [
    {
      profile: "Images/Aryan.jpg"
    },
    {
      profile: "Images/Aryan.jpg"
    },
    {
      profile: "Images/Aryan.jpg"
    },
    {
      profile: "Images/Aryan.jpg"
    },
    {
      profile: "Images/Aryan.jpg"
    },
    {
      profile: "Images/Aryan.jpg"
    },
  ]


  return (
    <div className={styles.container}>
      <Container>
        <Grid
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <EventMembers
            members={
              [
                {
                  id: 1,
                  userName: "@Aryan_Salemabadi",
                  picSrc: "Images/Aryan.jpg",
                },
                {
                  id: 2,
                  userName: "@Behrooz_Arabzadeh",
                  picSrc: "Images/Behrooz.png",
                },
                {
                  id: 3,
                  userName: "@SobhanGholami",
                  picSrc: "Images/Sobhan.jpg",
                },

              ]
            }
          />
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
