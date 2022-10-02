import React, { FC, MouseEventHandler, useEffect, useState } from "react";

import { Button, Card, TextField, Typography } from "@mui/material";

//CSS(Style Sheets)
import useLoginStyle from "./useStyle";
import { useRouter } from "next/router";

interface ILogin {
  onLoginComplete: () => void;
  onRegisterClicked: () => void;
  onForgetPasswordClicked: () => void;
}

interface IData {
  user: string;
  password: string;
}

const Login: FC<ILogin> = ({
  onLoginComplete,
  onRegisterClicked,
  onForgetPasswordClicked,
}) => {
  const { classes, cx } = useLoginStyle();

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const onUserChange = (e: any) => {
    setUser(e.target.value);
  };

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const submitHandler = () => {
    // TODO Handle Login api here
    setLoading(true)
  };

  const registerHandler = () => {
    onRegisterClicked();
  };

  const forgetPasswordHandler = () => {
    onForgetPasswordClicked();
  };

  useEffect(() => {
    router.prefetch("/register")
    router.prefetch("/forget-password")
  }, [])


  return (
    <Card className={cx(classes.root)}>
      <Typography className={cx(classes.logo)}>
        <h2>
          Week<span className={cx(classes.spanLogo)}>End</span>
        </h2>
      </Typography>
      <TextField
        name="user"
        onChange={onUserChange}
        value={user}
        fullWidth
        className={cx(classes.user)}
        variant="outlined"
        label="username or email "
      />
      <br />
      <TextField
        name="password"
        onChange={onPasswordChange}
        value={password}
        fullWidth
        type="password"
        variant="outlined"
        label="password "
      />
      <br />
      <div className={cx(classes.loginButton)}>
        <Button
          disabled={loading}
          onClick={submitHandler}
          className={cx(classes.colorButton)}
        >
          <Typography>Login</Typography>
        </Button>
      </div>
      <Typography className={cx(classes.error)}>{error}</Typography>
      <div className={cx(classes.forgetButton)}>
        <Button onClick={forgetPasswordHandler} color="inherit">
          <Typography>رمز عبور خود را فراموش کردید ؟</Typography>
        </Button>
      </div>
      <div className={cx(classes.registerButton)}>
        <Button onClick={registerHandler} color="inherit">
          <Typography mr={1} color="primary">
            {" "}
            ثبت نام کنید{" "}
          </Typography>{" "}
          <Typography> حساب کاربری ندارید؟ </Typography>
        </Button>
      </div>
    </Card>
  );
};

export default Login;
