import Login from "components/molecules/Login/Login";
import Register from "components/molecules/Register/Register";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useRegisterStyle from "./useStyle";

const RegisterPage: NextPage = () => {
  const { classes, cx } = useRegisterStyle();

  const router = useRouter();

  const handleRegisterCOmpleted = () => {
    router.push("/feed")
  }

  const handleLoginClicked = () => {
    router.push("/login")
  }

  useEffect(() => {
    router.prefetch("/feed")
    router.prefetch("/login")
  }, [])

  const authorized = Boolean(localStorage.getItem("token"))

  if (authorized) {
    router.push("/feed")
    return null;
  }

  return (
    <div className={classes.root}>
      <Register
        onRegisterCompleted={handleRegisterCOmpleted}
        onLoginClicked={handleLoginClicked}
      />
    </div>
  );
};

export default RegisterPage;
