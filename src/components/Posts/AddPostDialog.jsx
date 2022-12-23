import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { getPoliticianList } from './logic/getPoli';

export default function AddPostDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    //console.log(getPoliticianList())
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Publicar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Añadir post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Llene todos los datos.
          </DialogContentText>
          <InputLabel  id="personaje"> Personaje: </InputLabel>
          <Select
            autoFocus
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            fullWidth
            variant='standard'
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <TextField
            margin="dense"
            id="source"
            label="Fuente"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="title"
            label="Título"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="description"
            label="Descripción"
            type="text"
            fullWidth
            multiline
            variant="standard"
          />
          <Button
            variant="contained"
            component="label"
          >
            <div></div>
            Subir imagen
            <input
              type="file"
              hidden
            />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}