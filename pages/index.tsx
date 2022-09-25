import type { NextPage } from "next";

// Components
import Register from "components/molecules/Register/Register";



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
        <Grid height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Register
       onSubmitClicked={(rg) => {
        console.log("register",rg)
      }}
      onLoginClicked={()=>{
        console.log("login page")
      }}
      />
      </Grid>
      </Container>
    </div>
  );
};
export default Home;
