import Login from "components/molecules/Login/Login";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useLoginStyle from "./useStyle";

const LoginPage: NextPage = () => {
  const { classes, cx } = useLoginStyle();

  const router = useRouter();

  const handleLoginComplete = () => {
    router.push("/feed")
  }

  const handleRegisterClicked = () => {
    router.push("/register")
  }

  const handleForgetPasswordClicked = () => {
    router.push("/forget-password")
  }

  useEffect(() => {
    router.prefetch("/register")
    router.prefetch("/forget-password")
  }, [])

  const authorized = Boolean(localStorage.getItem("token"))

  if (authorized) {
    router.push("/feed")
    return null;
  }

  return (
    <div className={classes.root}>
      <Login
        onLoginComplete={handleLoginComplete}
        onRegisterClicked={handleRegisterClicked}
        onForgetPasswordClicked={handleForgetPasswordClicked}
      />
    </div>
  );
};

export default LoginPage;
