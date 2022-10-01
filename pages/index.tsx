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
import FriendCard from "components/molecules/FriendCard/FriendCard";


//Icons
import Head from "next/head";
import Image from "next/image";

//Css(Style Sheet)
import styles from "../styles/Home.module.css";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";






const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Grid
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FriendCard
            name="Aryan_Salemabadi"
            picSrc="Images/Aryan.jpg"
            variant="request"
            onlineStatus="online"
            onClick={() => { console.log("onClick") }}
            onAcceptRequest={() => { }}
            onRejectRequest={() => { }}
            onRemoveFriend={() => { console.log("onRemoveFriend") }}
            onUnblock={() => { }}
            userId={1}
          />
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
