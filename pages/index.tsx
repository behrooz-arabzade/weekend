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
import UserProfileDetails from 'components/molecules/UserProfileDetails/UserProfileDetails';

//Icons
import Head from "next/head";
import Image from "next/image";

//Css(Style Sheet)
import styles from "../styles/Home.module.css";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const Home: NextPage = () => {
   const UserInfo = {
    picSrc: "Images/Aryan.jpg",
    username: "Aryan_Salemabadi",
    firstname: "Aryan",
    lastname: "Salemabadi",
    country: "Iran",
    city: "Tehran",
    friendCount: 86,
    postTagedCount: 25,
    contactInfo: {
     mobile: "09215531809",
     address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
   }

  return (
    <div className={styles.container}>
        <Grid
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          mt={2}
        >
          <UserProfileDetails
          

           
           onFriendRequestClicked={()=>{

            alert("send  Request Friend")

           }}

           onBlockClicked={()=>{
            alert("user blocked")
           }}

           onFriendsClicked={()=>{
            alert("friends list page")
          }}
        

          UserInfo={UserInfo}

          />
        </Grid>
    </div>
  );
};

export default Home;
