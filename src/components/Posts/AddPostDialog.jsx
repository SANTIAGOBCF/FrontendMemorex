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
import { postsImage } from "../../https/uploadImage";
import { addPost } from '../../https/postPost';

export default function AddPostDialog() {
  const [open, setOpen] = React.useState(false);
  const [politicianList,setPoliticianList]=React.useState();
  const [posts,setPosts]=React.useState();
  const [file, setFile] = React.useState();
  const { register, handleSubmit } = useForm();
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3Yjc0MDgwLWQzNTktNGM2OC1iMGQwLWE2NGJjYzNjMjU4NiJ9.fk0xaljZMqm4LbIO_qa25AjKkCoeLhOeaicsBhjIMbU"
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
    postsImage(valor).then((res) => add(res, data),
    );
    setOpen(false);
    //alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };
  const add = async (res, data) => {
    data.profile_image = res.URL
    console.log(data)
    const res2 = await axios({
      method: "POST",
      body:{
        politician_id: data.politician_id,
        image: data.profile_image,
        source: data.source,
        text: data.text,
        title: data.title
      },
      url: "https://backendmemorex-production.up.railway.app/api/post/add/",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res2.data

  }

  const handleClose = () => {
    setOpen(false);
  };
  const getPoliticianList = async () => {
    const res = await axios({
      method: "GET",
      url: "https://backendmemorex-production.up.railway.app/api/politician/list/",
      headers: {
        Authorization: `Bearer ${token}`
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
          <InputLabel  id="dsda"> Personaje: </InputLabel>
          <Select
            autoFocus
            labelId="demo-simple-select-label"
            id="politician_id"
            label=""
            fullWidth
            variant='standard'
            {...register("politician_id")}
          >
            {
              politicianList && politicianList.map(
                  politician=>{
                    return <MenuItem value={politician.id}>{politician.name}</MenuItem>
                  }
              )
            }
            <MenuItem value={"b1105505-102e-41c0-b919-48f8b0c99dba"}>Lopez Aliaga</MenuItem>
          </Select>
          <TextField
            margin="dense"
            id="source"
            label="Fuente"
            type="text"
            fullWidth
            variant="standard"
            {...register("source")}
          />
          <TextField
            margin="dense"
            id="title"
            label="Título"
            type="text"
            fullWidth
            variant="standard"
            {...register("title")}
          />
          <TextField
            margin="dense"
            id="text"
            label="Descripción"
            type="text"
            fullWidth
            multiline
            variant="standard"
            {...register("text")}
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