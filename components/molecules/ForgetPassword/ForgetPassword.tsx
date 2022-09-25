import React, { FC, MouseEventHandler, useState } from 'react';
import { Card, Typography, TextField, Button } from '@mui/material';





//CSS(Style Sheets)
import useForgetPassword from './useStyle';



//Icons
import LockIcon from '@mui/icons-material/Lock';


//InterFaces

interface IForgetPassword {
    onSubmitClicked: MouseEventHandler<HTMLButtonElement>;
    onRegisterClicked: MouseEventHandler<HTMLButtonElement>;
    onLoginClicked: MouseEventHandler<HTMLButtonElement>;
}


interface IDataFrogetPassword {
    dataForgetPassword: {
        email: string;
    }
}





const ForgetPassword: FC<IForgetPassword> = ({
    onSubmitClicked,
    onRegisterClicked,
    onLoginClicked
}) => {

    const { classes, cx } = useForgetPassword();

    const [dataFogetPassword, setDataForgetPassword] = useState<IDataFrogetPassword["dataForgetPassword"]>({
        email: "",
    });


    const cheangeHandler = (e: any) => {
        setDataForgetPassword({ ...dataFogetPassword, [e.target.name]: e.target.value });
    };
    const submitHandler = () => {
        onSubmitClicked(dataFogetPassword.email);
    };

    const logindHandler = () => {
        onLoginClicked();
    };

    const registerHandler = () => {
        onRegisterClicked();
    };

    const resultVariEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(dataFogetPassword.email) === true ? true : false;

    return (
        <div>
            <Card className={cx(classes.root)}>
                <Typography textAlign="center"><LockIcon className={cx(classes.lockIcon)}></LockIcon></Typography>
                <Typography textAlign="center">در ورود به حساب کاربری خود مشکلی داشتید ؟</Typography>
                <Typography textAlign="center">ایمیل یا شماره موبایل خود را وارد کنید تا لینک بازیابی برایتان ارسال شود</Typography>
                <TextField name="email" onChange={cheangeHandler} value={dataFogetPassword.email} fullWidth className={cx(classes.user)} variant="outlined" label="email " />
                <div className={cx((resultVariEmail) ? classes.forgetButtonOn : classes.forgetButtonOff)}>
                    <Button onClick={submitHandler} disabled={!(resultVariEmail)} className={cx(resultVariEmail ? classes.ButtonOn : classes.ButtonOff)} ><Typography>send recovery password</Typography></Button>
                </div>
                <div className={cx(classes.loginButton)}>
                    <Button onClick={logindHandler} color="inherit"><Typography>Login</Typography></Button>
                </div>
                <div className={cx(classes.registerButton)}>
                    <Button onClick={registerHandler} color="inherit"><Typography mr={1} color="primary"> Register </Typography></Button>
                </div>
            </Card>
        </div>
    )
}

export default ForgetPassword;