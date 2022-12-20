import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function DeleteModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
    <Button data-testid="buttonDelete" onClick={handleOpen} color="warning" variant="contained">Delete</Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Eliminar cuenta
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Click afuera para cancelar
          </Typography>
          <Box m={2}></Box>
          <Button variant='contained' color="warning">
            SI
          </Button>
        </Box>   
    </Modal>
    </>
  )
}