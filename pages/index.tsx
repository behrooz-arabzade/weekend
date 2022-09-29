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
import FeedPostComment from "components/molecules/FeedPostComment/FeedPostComment";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Grid height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FeedPostComment />
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
