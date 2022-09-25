import React, { FC, MouseEventHandler, useState } from 'react'
import { Button, Card, TextField, Typography } from '@mui/material';



//Hooks
import useRegisterStyle from './useStyle';




//InterFaces
interface IRegister{
    onSubmitClicked:MouseEventHandler<HTMLButtonElement>;
    onLoginClicked:MouseEventHandler<HTMLButtonElement>;
}

interface IDataRegister {
    dataRegister: {
        user: string;
        password: string;
        confrimPassword:string;
    }
}

const Register:FC<IRegister> = ({
    onSubmitClicked,
    onLoginClicked
}) => {

    const { classes, cx } = useRegisterStyle();

    const [dataRegister, setDataRegister] = useState<IDataRegister["dataRegister"]>({
        user: "",
        password: "",
        confrimPassword:"",
    });

    const cheangeHandler = (e: any) => {
        setDataRegister({ ...dataRegister, [e.target.name]: e.target.value });
    };

    const clickHandler = () =>{
        onSubmitClicked(dataRegister);
    };
    const loginClickHandler = () => {
        onLoginClicked();
    };

    const resultVarPassword = dataRegister.password.length >= 8 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#$@!%&*?]{8,30}$/.test(dataRegister.password)?true:false;
    
    const resultVarConfrimPassword = dataRegister.password === dataRegister.confrimPassword?true:false;

    const resultUser = /^(?:[A-Z\d][A-Z\d_-]{2,30}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i.test(dataRegister.user)?true:false;
    return (
        <div>

            <Card className={cx(classes.root)}>
                <Typography className={cx(classes.logo)}><h2>Week<span className={cx(classes.spanLogo)}>End</span></h2></Typography>
                <TextField name="user" onChange={cheangeHandler} value={dataRegister.user} fullWidth variant="outlined" label="username or email " />
                <br />
                <TextField className={cx(classes.input)} name="password" onChange={cheangeHandler} value={dataRegister.password} fullWidth type="password" variant="outlined" label="password " />
                <br />
                <TextField fullWidth type="password" value={dataRegister.confrimPassword} onChange={cheangeHandler} name="confrimPassword" label="confrim Password" variant="outlined" />
                <div className={cx((resultVarPassword&&resultVarConfrimPassword&&resultUser)?classes.registerButtonOn:classes.registerButtonOff)}>
                    <Button onClick={clickHandler} disabled={!(resultVarPassword&&resultVarConfrimPassword&&resultUser)} className={cx(resultVarConfrimPassword&&resultVarPassword&&resultUser?classes.ButtonOn:classes.ButtonOff)} ><Typography>Register</Typography></Button>
                </div>
                <div className={cx(classes.loginButton)}>
                    <Button onClick={loginClickHandler} color="inherit"><Typography mr={1} color="primary"> وارد شوید </Typography> <Typography >  حساب کاربری دارید؟ </Typography></Button>
                </div>
            </Card>
        </div>
    )
}

export default Register;