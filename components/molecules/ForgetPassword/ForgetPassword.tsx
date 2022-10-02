import React, { FC, MouseEventHandler, useState } from "react";
import { Card, Typography, TextField, Button } from "@mui/material";

//CSS(Style Sheets)
import useForgetPassword from "./useStyle";

//Icons
import LockIcon from "@mui/icons-material/Lock";

//InterFaces
interface IForgetPassword {
  onComplete: (message: string) => void;
  onRegisterClicked: () => void;
  onLoginClicked: () => void;
}

interface IDataFrogetPassword {
  email: string;
}

const ForgetPassword: FC<IForgetPassword> = ({
  onComplete,
  onRegisterClicked,
  onLoginClicked,
}) => {
  const { classes, cx } = useForgetPassword();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value)
  };

  const handleSubmit = () => {
    setLoading(true)
    // TODO handle api here
  };

  const handleLoginClick = () => {
    onLoginClicked();
  };

  const handleRegisterClick = () => {
    onRegisterClicked();
  };

  const resultVariEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    ) === true
      ? true
      : false;

  return (
    <Card className={cx(classes.root)}>
      <Typography textAlign="center">
        <LockIcon className={cx(classes.lockIcon)}></LockIcon>
      </Typography>
      <Typography textAlign="center">
        در ورود به حساب کاربری خود مشکلی داشتید ؟
      </Typography>
      <Typography textAlign="center">
        ایمیل یا شماره موبایل خود را وارد کنید تا لینک بازیابی برایتان ارسال شود
      </Typography>
      <TextField
        name="email"
        onChange={onChangeEmail}
        value={email}
        fullWidth
        className={cx(classes.user)}
        variant="outlined"
        label="email "
      />
      <div
        className={cx(
          resultVariEmail ? classes.forgetButtonOn : classes.forgetButtonOff
        )}
      >
        <Button
          onClick={handleSubmit}
          disabled={!resultVariEmail || loading}
          className={cx(resultVariEmail ? classes.ButtonOn : classes.ButtonOff)}
        >
          <Typography>send recovery password</Typography>
        </Button>
      </div>
      <Typography className={cx(classes.error)}>{error}</Typography>
      <div className={cx(classes.loginButton)}>
        <Button onClick={handleLoginClick} color="inherit">
          <Typography>Login</Typography>
        </Button>
      </div>
      <div className={cx(classes.registerButton)}>
        <Button onClick={handleRegisterClick} color="inherit">
          <Typography mr={1} color="primary">
            {" "}
            Register{" "}
          </Typography>
        </Button>
      </div>
    </Card>
  );
};

export default ForgetPassword;
