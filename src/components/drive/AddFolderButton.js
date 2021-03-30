import React , {useState} from 'react'
import Button from '@material-ui/core/Button';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import Modal from '@material-ui/core/Modal';


export default function AddFolderButton() {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      


    return (
            

            <Button variant="contained" color="primary" onClick={openModal}>
      <CreateNewFolderIcon/>
      </Button>

    )
}
