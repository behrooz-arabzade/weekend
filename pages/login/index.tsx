import Login from "components/molecules/Login/Login";
import type { NextPage } from "next";
import { useRouter } from "next/router";
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
