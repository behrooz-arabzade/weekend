import type { NextPage } from "next";

// Components
import SearchBox from "../components/molecules/SearchBox/SearchBox";



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
        <Grid display="flex" justifyContent="center" mt={3}>
      <SearchBox title={["pool"]} hint="" defaultValue="" />
      </Grid>
      </Container>
    </div>
  );
};
export default Home;
