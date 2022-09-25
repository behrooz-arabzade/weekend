import
React, { FC, MouseEventHandler, useState } from 'react'

import { TextField } from '@material-ui/core';

import { Button, Card, Typography } from '@mui/material';


//CSS(Style Sheets)
import useLoginStyle from './useStyle';



interface ILogin {
    onSubmitClicked: MouseEventHandler<HTMLButtonElement>;
    onRegisterClicked: MouseEventHandler<HTMLButtonElement>;
    onForgetPasswordClicked: MouseEventHandler<HTMLButtonElement>;
}


interface IData {
    data: {
        user: string;
        password: string;
    }
}

const Login: FC<ILogin> = ({
    onSubmitClicked,
    onRegisterClicked,
    onForgetPasswordClicked,

}) => {

    const { classes, cx } = useLoginStyle();

    const [data, setData] = useState<IData["data"]>({
        user: "",
        password: ""
    });

    const cheangeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const submitHandler = () => {
        onSubmitClicked(data);
    };

    const registerHandler = () => {
        onRegisterClicked();
    };

    const forgetPasswordHandler = () => {
        onForgetPasswordClicked();
    }

    return (
        <div>
            <Card className={cx(classes.root)}>
                <Typography className={cx(classes.logo)}><h2>Week<span className={cx(classes.spanLogo)}>End</span></h2></Typography>
                <TextField name="user" onChange={cheangeHandler} value={data.user} fullWidth className={cx(classes.user)} variant="outlined" label="username or email " />
                <br />
                <TextField name="password" onChange={cheangeHandler} value={data.password} fullWidth type="password" variant="outlined" label="password " />
                <br />
                <div className={cx(classes.loginButton)}>
                    <Button onClick={submitHandler} className={cx(classes.colorButton)} ><Typography>Login</Typography></Button>
                </div>
                <div className={cx(classes.forgetButton)}>
                    <Button onClick={forgetPasswordHandler} color="inherit"><Typography>رمز عبور خود را فراموش کردید ؟</Typography></Button>
                </div>
                <div className={cx(classes.registerButton)}>
                    <Button onClick={registerHandler} color="inherit"><Typography mr={1} color="primary"> ثبت نام کنید  </Typography> <Typography >  حساب کاربری ندارید؟ </Typography></Button>
                </div>

            </Card>
        </div>
    )
}

export default Login;