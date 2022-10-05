import React, { useEffect, useState, FC } from 'react'
import { Card, Grid, Typography, Container, Avatar, TextField, Button } from '@mui/material';



//CSS(Style Sheet)
import useUserProfileEditForm from './useStyle';



interface IUserProfileEditForm {
    currentUserInfo: {
        picSrc: string;
        username: string;
        firstname: string;
        lastname: string;
        email: string;
        country: string;
        city: string;
        contactInfo: {
            mobile: string;
            address: string;
        };
    };
    onSaveClicked: (data: string) => void;
}



const UserProfileEditForm: FC<IUserProfileEditForm> = ({
    currentUserInfo,
    onSaveClicked,
}) => {

    const { classes, cx } = useUserProfileEditForm();

    const [data, setData] = useState({
        PicSrc: currentUserInfo.picSrc,
        user: currentUserInfo.username,
        firstName: currentUserInfo.firstname,
        lastName: currentUserInfo.lastname,
        email: currentUserInfo.email,
        phone: currentUserInfo.contactInfo.mobile,
        verificationCode: "",
        country: currentUserInfo.country,
        city: currentUserInfo.city,
        address: currentUserInfo.contactInfo.address,
    });

    const [selectedImage, setSelectedImage] = useState<null>(null);

    const [imageUrl, setImageUrl] = useState<null>(null);

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    const cheangeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const saveClick = () => {
        onSaveClicked(data);
    }

    const uploadImage = (e:any) => {
        setSelectedImage(e.target.files[0])
    }

    const emailVari =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email) 
    ?
    true
    :
    false;

    const phoneVari = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(data.phone)
    ?
    true
    :
    false;

    return (
        <Card className={cx(classes.root)}>
            <Container>
                <Grid p={2}>
                    <Typography fontWeight="bold">
                        Edit Profile
                    </Typography>
                </Grid>
                <Grid
                    display="flex"
                    justifyContent="center"
                >
                    <Avatar
                        src={data.PicSrc}
                        className={cx(classes.Avatar)}
                    />
                </Grid>
                <Grid
                    display="flex"
                    justifyContent="center"
                    mt={2}
                >
                    <Button color="inherit" component="label">
                        <Typography fontWeight="bold">
                            Edit Image
                        </Typography>
                        <input
                            hidden
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={uploadImage}
                        />
                    </Button>
                </Grid>
                <Grid my={5} mx={1}>
                    <TextField
                        disabled
                        name="user"
                        onChange={cheangeHandler}
                        value={data.user}
                        fullWidth
                        variant="outlined"
                        label="userName"
                    />
                </Grid>
                <Grid my={5} mx={1}>
                    <TextField
                        name="firstName"
                        onChange={cheangeHandler}
                        value={data.firstName}
                        fullWidth
                        variant="outlined"
                        label="First Name"
                    />
                </Grid>
                <Grid my={5} mx={1}>
                    <TextField
                        name="lastName"
                        onChange={cheangeHandler}
                        value={data.lastName}
                        fullWidth
                        variant="outlined"
                        label="Last Name"
                    />
                </Grid>
                <Grid my={5} mx={1}>
                    <TextField
                        name="email"
                        onChange={cheangeHandler}
                        value={data.email}
                        fullWidth
                        variant="outlined"
                        label="Email"
                    />
                </Grid>
                <Grid my={5} mx={1}>
                    <TextField
                        name="phone"
                        onChange={cheangeHandler}
                        value={data.phone}
                        fullWidth
                        variant="outlined"
                        label="Phone"
                    />
                </Grid>
                <Grid
                    display="flex"
                    justifyContemt="space-between"
                    alignItems="center"
                >
                    <TextField
                        name="verificationCode"
                        onChange={cheangeHandler}
                        value={data.verificationCode}
                        variant="outlined"
                        label="verificationCode"
                    />
                    <Button sx={{ margin: "5px" }}>
                        <Typography
                            fontSize={13}
                            fontWeight="bold"
                        >
                            Enter Code
                        </Typography>
                    </Button>
                </Grid>
                <Grid my={5} mx={1}>
                    <TextField
                        name="country"
                        onChange={cheangeHandler}
                        value={data.country}
                        fullWidth
                        variant="outlined"
                        label="Country"
                    />
                </Grid>
                <Grid my={5} mx={1}>
                    <TextField
                        name="city"
                        onChange={cheangeHandler}
                        value={data.city}
                        fullWidth
                        variant="outlined"
                        label="City"
                    />
                </Grid>
                <Grid my={5} mx={1}>
                    <TextField
                        name="address"
                        onChange={cheangeHandler}
                        value={data.address}
                        fullWidth
                        variant="outlined"
                        label="Address"
                        multiline={true}
                        rows={5}
                    />
                </Grid>
                <Grid>
                    <Button fullWidth onClick={saveClick} disabled={!emailVari && !phoneVari}>
                        <Typography fontWeight="bold" textAlign="center">
                            Edit
                        </Typography>
                    </Button>
                </Grid>
            </Container>

        </Card>
    )
}

export default UserProfileEditForm;