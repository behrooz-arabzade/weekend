import React, { FC, MouseEventHandler, useState } from "react";
import { Button, Card, TextField, Typography } from "@mui/material";

//Hooks
import useRegisterStyle from "./useStyle";

//InterFaces
interface IRegister {
  onRegisterCompleted: (username: string) => void;
  onLoginClicked: () => void;
}

interface IDataRegister {
  user: string;
  password: string;
  confrimPassword: string;
}

const Register: FC<IRegister> = ({ onRegisterCompleted, onLoginClicked }) => {
  const { classes, cx } = useRegisterStyle();

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string>("");

  const onChangeUser = (e: any) => {
    setUser(e.target.value)
  }
  const onChangePassword = (e: any) => {
    setPassword(e.target.value)
  }
  const onChangeConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = () => {
    setLoading(true)
    // TODO handle register api here
  };

  const loginClickHandler = () => {
    onLoginClicked();
  };

  const resultVarPassword =
    password.length >= 8 &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#$@!%&*?]{8,30}$/.test(
        password
      )
      ? true
      : false;

  const resultVarConfrimPassword = password === confirmPassword ? true : false;

  const resultUser =
    /^(?:[A-Z\d][A-Z\d_-]{2,30}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i.test(
      user
    )
      ? true
      : false;

  return (
    <Card className={cx(classes.root)}>
      <Typography className={cx(classes.logo)}>
        <h2>
          Week<span className={cx(classes.spanLogo)}>End</span>
        </h2>
      </Typography>
      <TextField
        name="user"
        onChange={onChangeUser}
        value={user}
        fullWidth
        variant="outlined"
        label="username or email "
      />
      <br />
      <TextField
        className={cx(classes.input)}
        name="password"
        onChange={onChangePassword}
        value={password}
        fullWidth
        type="password"
        variant="outlined"
        label="password "
      />
      <br />
      <TextField
        fullWidth
        type="password"
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
        name="confrimPassword"
        label="confrim Password"
        variant="outlined"
      />
      <div
        className={cx(
          resultVarPassword && resultVarConfrimPassword && resultUser
            ? classes.registerButtonOn
            : classes.registerButtonOff
        )}
      >
        <Button
          onClick={handleSubmit}
          disabled={
            !(resultVarPassword && resultVarConfrimPassword && resultUser) || loading
          }
          className={cx(
            resultVarConfrimPassword && resultVarPassword && resultUser
              ? classes.ButtonOn
              : classes.ButtonOff
          )}
        >
          <Typography>Register</Typography>
        </Button>
      </div>
      <Typography className={cx(classes.error)}>{error}</Typography>
      <div className={cx(classes.loginButton)}>
        <Button onClick={loginClickHandler} color="inherit">
          <Typography mr={1} color="primary">
            {" "}
            وارد شوید{" "}
          </Typography>{" "}
          <Typography> حساب کاربری دارید؟ </Typography>
        </Button>
      </div>
    </Card>
  );
};

export default Register;
