import ForgetPassword from "components/molecules/ForgetPassword/ForgetPassword";
import Login from "components/molecules/Login/Login";
import Register from "components/molecules/Register/Register";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import useForgetPasswordStyle from "./useStyle";

const ForgetPasswordPage: NextPage = () => {
  const { classes, cx } = useForgetPasswordStyle();

  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const handleCompleted = (message: string,) => {
    enqueueSnackbar(message)
    router.push("/login")
  }

  const handleLoginClicked = () => {
    router.push("/login")
  }

  const handleRegisterClicked = () => {
    router.push("/register")
  }

  useEffect(() => {
    router.prefetch("/login")
    router.prefetch("/register")
  }, [])

  const authorized = Boolean(localStorage.getItem("token"))

  if (authorized) {
    router.push("/feed")
    return null;
  }

  return (
    <div className={classes.root}>
      <ForgetPassword
        onComplete={handleCompleted}
        onLoginClicked={handleLoginClicked}
        onRegisterClicked={handleRegisterClicked}
      />
    </div>
  );
};

export default ForgetPasswordPage;
