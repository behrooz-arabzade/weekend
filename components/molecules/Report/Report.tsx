import React, { FC, useState, MouseEvent } from "react";
import { Button, Typography, TextField, Grid, Modal, Box } from "@mui/material";

//Css(Style Sheet)
import useReport from "./useStyle";

//InterFaces
interface IReport {
  open: boolean;
  onClose: () => void;
}

const Report: FC<IReport> = ({ open, onClose }) => {
  const { classes, cx } = useReport();

  const [openModal, setOpenModal] = useState(open);

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => {
    setOpenModal(false);
    onClose();
  };

  const [subject, setSubject] = useState<string>("");

  const [description, setDescription] = useState<string>("");

  const subjectHandler = (e: any) => {
    setSubject(e.target.value);
  };

  const descriptionHandler = (e: any) => {
    setDescription(e.target.value);
  };

  const sendHandler = () => {
    // TODO call api here
  };

  return (
    <div>
      <Button onClick={handleOpen} color="inherit">
        <Typography fontWeight="bold">Report</Typography>
      </Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={cx(classes.modalGroup)}>
          <Grid display="flex" justifyContent="center">
            <TextField
              sx={{ m: 4, width: "200px" }}
              id="outlined-textarea"
              label="Subject"
              onChange={subjectHandler}
              name="subject"
              value={subject}
              multiline
            />
          </Grid>
          <Grid display="flex" justifyContent="center">
            <TextField
              sx={{ m: 4 }}
              id="outlined-multiline-static"
              label="Description"
              onChange={descriptionHandler}
              multiline
              name="description"
              value={description}
              rows={6}
            />
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Button
              sx={{ width: "100%" }}
              color="inherit"
              disabled={subject === "" || description === "" ? true : false}
              onClick={sendHandler}
            >
              <Typography fontWeight="bold">Send</Typography>
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default Report;
