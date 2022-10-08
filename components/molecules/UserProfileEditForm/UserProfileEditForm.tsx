import React, { useEffect, useState, FC } from "react";
import {
  Card,
  Grid,
  Typography,
  Container,
  Avatar,
  TextField,
  Button,
} from "@mui/material";

//CSS(Style Sheet)
import useUserProfileEditForm from "./useStyle";
import IUser from "interfaces/user";

interface IUserProfileEditForm {
  currentUserInfo: IUser;
}

const UserProfileEditForm: FC<IUserProfileEditForm> = ({ currentUserInfo }) => {
  const { classes, cx } = useUserProfileEditForm();

  const [data, setData] = useState(currentUserInfo);
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState<null>(null);

  const [variCode, setVariCode] = useState<boolean>(false);

  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleVerificationCodeChange = (e: any) => {
    setVerificationCode(e.target.value);
  };

  const handleVerificationCodeEnter = () => {
    setLoading(true);
    // Handle verificationCode send to api here
  };

  const handleSaveClick = () => {
    setLoading(true);
    // TODO call api here
    // onSaveClicked(data);
  };

  const uploadImage = (e: any) => {
    setLoading(true);
    // TODO upload image with api
    // setSelectedImage(e.target.files[0]);
  };

  const variCodeClick = () => {
    setVariCode(true);
  };

  const emailVari =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      data.email
    )
      ? true
      : false;

  const phoneVari = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
    data.contactInfo.mobile
  )
    ? true
    : false;

  return (
    <Card className={cx(classes.root)}>
      <Container>
        <Grid p={2}>
          <Typography fontWeight="bold">Edit Profile</Typography>
        </Grid>
        <Grid display="flex" justifyContent="center">
          <Avatar src={data.picSrc} className={cx(classes.Avatar)} />
        </Grid>
        <Grid display="flex" justifyContent="center" mt={2}>
          <Button color="inherit" component="label" disabled={loading}>
            <Typography fontWeight="bold">Edit Image</Typography>
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
            onChange={changeHandler}
            value={data.username}
            fullWidth
            variant="outlined"
            label="userName"
          />
        </Grid>
        <Grid my={5} mx={1}>
          <TextField
            name="firstName"
            onChange={changeHandler}
            value={data.firstname}
            fullWidth
            variant="outlined"
            label="First Name"
            disabled={loading}
          />
        </Grid>
        <Grid my={5} mx={1}>
          <TextField
            name="lastName"
            onChange={changeHandler}
            value={data.lastname}
            fullWidth
            variant="outlined"
            label="Last Name"
            disabled={loading}
          />
        </Grid>
        <Grid my={4} mx={1}>
          <TextField
            name="email"
            onChange={changeHandler}
            value={data.email}
            fullWidth
            variant="outlined"
            label="Email"
            disabled={loading}
          />
        </Grid>
        <Grid my={4} mx={1}>
          <TextField
            name="phone"
            onChange={changeHandler}
            value={data.contactInfo.mobile}
            fullWidth
            variant="outlined"
            label="Phone"
            disabled={loading}
          />
        </Grid>
        <Grid>
          {
            <Grid display={variCode ? "none" : "block"}>
              <Button
                fullWidth
                onClick={variCodeClick}
                disabled={(!emailVari && !phoneVari) || loading}
              >
                <Typography fontWeight="bold" textAlign="center">
                  Send Code
                </Typography>
              </Button>
            </Grid>
          }
        </Grid>
        <Grid
          style={{
            display: variCode ? "flex" : "none",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            name="verificationCode"
            onChange={handleVerificationCodeChange}
            value={verificationCode}
            variant="outlined"
            label="verificationCode"
            disabled={loading}
          />
          <Button
            sx={{ margin: "5px" }}
            onClick={handleVerificationCodeEnter}
            disabled={loading}
          >
            <Typography fontSize={13} fontWeight="bold">
              Enter Code
            </Typography>
          </Button>
        </Grid>
        <Grid my={4} mx={1}>
          <TextField
            name="country"
            onChange={changeHandler}
            value={data.country}
            fullWidth
            variant="outlined"
            label="Country"
            disabled={loading}
          />
        </Grid>
        <Grid my={5} mx={1}>
          <TextField
            name="city"
            onChange={changeHandler}
            value={data.city}
            fullWidth
            variant="outlined"
            label="City"
            disabled={loading}
          />
        </Grid>
        <Grid my={5} mx={1}>
          <TextField
            name="address"
            onChange={changeHandler}
            value={data.contactInfo.address}
            fullWidth
            variant="outlined"
            label="Address"
            multiline={true}
            rows={5}
            disabled={loading}
          />
        </Grid>
        <Grid>
          <Button
            fullWidth
            onClick={handleSaveClick}
            disabled={(!emailVari && !phoneVari) || loading}
          >
            <Typography fontWeight="bold" textAlign="center">
              Edit
            </Typography>
          </Button>
        </Grid>
      </Container>
    </Card>
  );
};

export default UserProfileEditForm;
