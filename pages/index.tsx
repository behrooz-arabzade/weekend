import type { NextPage } from "next";

// Components
import MainNavigation from "components/molecules/MainNavigation/MainNavigation";
import HomeIcon from "components/molecules/MainNavigation/HomeIcon";
import SearchIcon from "components/molecules/MainNavigation/Search";
import Create from "components/molecules/MainNavigation/Create";
import EventActive from "./../components/molecules/MainNavigation/EventActive";
import MessageIcon from "./../components/molecules/MainNavigation/MessageIcon";

//Icons
import Head from "next/head";
import Image from "next/image";

//Css(Style Sheet)
import styles from "../styles/Home.module.css";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import FeedPostHeader from './../components/molecules/FeedPostHeader/FeedPostHeader';


const dataPosts = [
  {
    id: "234",
    userName: "Aryan_Salemabadi",
    serPicSrc: "/Images/Aryan.jpg",
    date: "September 28, 2022",
    link: "/post",
  },
];


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Container>
        {dataPosts.map(post => {
          return (
            <Grid m="50px 0px"
              key={post.id}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <FeedPostHeader
                key={post.id}
                userName={post.userName}
                userPicSrc={post.serPicSrc}
                date={post.date}
                link={post.link}
                onHideClicked={()=>{
                  console.log("post is hide")
                }}
                onReportClicked={()=>{
                  console.log("post report")
                }}
              />
            </Grid>
          )
        })}
      </Container>
    </div>
  );
};
export default Home;
