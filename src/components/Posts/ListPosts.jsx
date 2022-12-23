import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

export default function MultiActionAreaCard() {
  return (<>
    <Grid container>
    <Typography variant="h4" gutterBottom>
        Publicaciones:
    </Typography>
    </Grid>
    <Card sx={{ maxWidth: 700,borderRadius: 3  }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/08/21/140821134346_lagartija_cola_624x351_thinkstock.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    <Grid paddingTop={2}></Grid>
    <Card sx={{ maxWidth: 700 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/08/21/140821134346_lagartija_cola_624x351_thinkstock.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </>
  );
}