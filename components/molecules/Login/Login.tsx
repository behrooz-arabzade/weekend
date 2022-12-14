import React, { FC, useState } from "react";

import { Button, Card, TextField, Typography } from "@mui/material";

//CSS(Style Sheets)
import useLoginStyle from "./useStyle";
import Api from "services";

interface ILogin {
  onLoginComplete: () => void;
  onRegisterClicked: () => void;
  onForgetPasswordClicked: () => void;
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

  const onUserChange = (e: any) => {
    setUser(e.target.value);
  };

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const submitHandler = () => {
    setLoading(true);

    Api.users
      .login({ username: user, password: password })
      .then((data) => {
        setLoading(false);
        localStorage.setItem("token", data.access_token);
        onLoginComplete();
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  const registerHandler = () => {
    onRegisterClicked();
  };

  const forgetPasswordHandler = () => {
    onForgetPasswordClicked();
  };

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
          onClick={submitHandler}
          className={cx(classes.colorButton)}
          disabled={Boolean(loading)}
        >
          <Typography>Login</Typography>
        </Button>
      </div>
      <Typography className={cx(classes.error)}>{error}</Typography>
      <div className={cx(classes.forgetButton)}>
        <Button onClick={forgetPasswordHandler} color="inherit">
          <Typography>?????? ???????? ?????? ???? ???????????? ?????????? ??</Typography>
        </Button>
      </div>
      <div className={cx(classes.registerButton)}>
        <Button onClick={registerHandler} color="inherit">
          <Typography mr={1} color="primary">
            {" "}
            ?????? ?????? ????????{" "}
          </Typography>{" "}
          <Typography> ???????? ???????????? ?????????????? </Typography>
        </Button>
      </div>
    </Card>
  );
};

export default Login;
