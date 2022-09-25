import type { NextPage } from "next";

// Components
import Login from "components/molecules/Login/Login";



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
        <Grid display="flex" sx={{height:"100vh"}} justifyContent="center" alignItems="center" mt={3}>
          <Login onSubmitClicked={(data) => {
            console.log("user login", data)
          }}
            onRegisterClicked={() => {
              console.log("register")
            }}
            onForgetPasswordClicked={()=> {
              console.log("forgetPassword")
            }}
          />
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
