import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { useForm } from "react-hook-form";

export default function AddPostDialog() {
  const [open, setOpen] = React.useState(false);
  const [politicianList,setPoliticianList]=React.useState();
  const [file, setFile] = React.useState();
  const { register, handleSubmit } = useForm();

  const handleClickOpen = () => {
    
    setOpen(true);
  };

  /*const handleFileChange = (e) => {
    if (e.target.files) {
      console.log("here file")
      setFile(e.target.files[0]);
    }
  };*/

  const onSubmit = async (data) => {
    const valor = new FormData();
    const filename = data.file[0].name;
    valor.append("name", filename);
    valor.append("file", data.file[0]);

    const resul = await axios("https://backendmemorex-production.up.railway.app/api/image/upload", {
        method: "POST",
        valor,
        headers: {
          'Content-Type':  'multipart/form-data'
        }
    })
    //alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

  /*const handleUploadClick = async () => {
    if (!file) {
      return;
    }
    //const valor = new FormData();
    //valor.append('image', $('input[type=file]')[0].files[0]);

    const resu = await axios({
      method: "POST",
      body: file,
      url: "https://backendmemorex-production.up.railway.app/api/image/upload",
      headers: {
        'Content-Type':  'multipart/form-data'
      }
    })
    setOpen(false);
    console.log("false set open")
  };*/

  const handleClose = () => {
    setOpen(false);
  };
  const getPoliticianList = async () => {
    const res = await axios({
      method: "GET",
      url: "https://backendmemorex-production.up.railway.app/api/politician/list/",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3Yjc0MDgwLWQzNTktNGM2OC1iMGQwLWE2NGJjYzNjMjU4NiJ9.fk0xaljZMqm4LbIO_qa25AjKkCoeLhOeaicsBhjIMbU"
      }
    })
    var result=await res.data
    setPoliticianList(result.politician_list)

  };

  React.useEffect(() => {
    getPoliticianList()
    
  }, [])
  

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Publicar
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
            {
              politicianList && politicianList.map(
                  politician=>{
                    return <MenuItem value={politician.name}>{politician.name}</MenuItem>
                  }
              )
            }
            <MenuItem value={"Aliaga"}>Lopez Aliaga</MenuItem>
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
          <input
            type="file" 
            {...register("file")}       
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Aceptar</Button>
        </DialogActions>
      </form>
      </Dialog>
    </div>
  );
}