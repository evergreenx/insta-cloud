import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { database } from "../../firebase";
import Tooltip from "@material-ui/core/Tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { useAuth } from "../../contexts/AuthContext";


export default function AddFolderButton({currentFolder}) {
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();
  const [name, setName] = useState("");

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if(currentFolder == null) return
    database.folders.add({
      name: name,
      parentId:currentFolder.id,
      userId: currentUser.uid,
      // path,
      createdAt: database.getCurrentTimestamp(),
    });

    toast.success("Folder created successfully !");
    closeModal();

    // alert(name);

    console.log("it is working now");
  };

  return (
    <>
      <ToastContainer/>
      <Tooltip title="Add Folder">
        <Button variant="contained" color="primary" onClick={openModal}>
          <CreateNewFolderIcon />
        </Button>
      </Tooltip>

      <Modal
        open={open}
        m={2}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 700,
        }}
      >
        <Fade in={open}>
          <Card variant="outlined" className="col-lg-6 mx-auto">
            <CardContent>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  id="outlined-basic"
                  label="File Name"
                  variant="outlined"
                  helperText="enter file name!"
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />

                <CardActions>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={closeModal}
                  >
                    cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={openModal}
                  >
                    add folder
                  </Button>
                </CardActions>
              </form>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </>
  );
}
