import type { NextPage } from "next";

// Components
import ForgetPassword from "./../components/molecules/ForgetPassword/ForgetPassword";

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
          <ForgetPassword
            onSubmitClicked={(fg) => {
              console.log("password send to", fg);
            }}
            onRegisterClicked={() => {
              console.log("Register Page");
            }}
            onLoginClicked={() => {
              console.log("Login Page");
            }}
          />
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
