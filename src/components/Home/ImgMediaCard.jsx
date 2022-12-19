import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import keiko from '../../assets/img/Keiko.jpg'

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 700, bgcolor:'inherit' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={keiko}
      />
      <CardContent>
        <Typography gutterBottom variant="h5"  color="white" component="div">
          Keiko
        </Typography>
        <Typography variant="body2" color="white">
        La lideresa de Fuerza Popular tiene múltiples acusaciones y ha estado en prisión preventiva dos veces. Se le imputan actos de corrupción relacionados al dinero recibido por diversas entidades empresariales.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
  );
}
