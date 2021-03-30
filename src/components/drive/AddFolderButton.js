import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

export default function AddFolderButton() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('')
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit=(e)=>{

    e.preventDefault();

    closeModal();
    
    alert(name);

  }


  
  return (
    <>
      <Button variant="contained" color="success" onClick={openModal}>
        <CreateNewFolderIcon />
      </Button>
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
                <form Validate autoComplete="off" onSubmit={handleSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="File Name"
                    variant="outlined"
                    helperText="enter file name!"
                    fullWidth

                    onChange={e =>setName(e.target.value)}
                   
                  />

                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
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
                      submit
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
