import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import axios from 'axios';
export default function MultiActionAreaCard() {
  const [posts,setPosts]=React.useState();
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk3Yjc0MDgwLWQzNTktNGM2OC1iMGQwLWE2NGJjYzNjMjU4NiJ9.fk0xaljZMqm4LbIO_qa25AjKkCoeLhOeaicsBhjIMbU"
  


  const getPostList = async () => {
    const res = await axios({
      method: "GET",
      url: "https://backendmemorex-production.up.railway.app/api/post/list/"
    })
    var result=await res.data
    setPosts(result.posts)

  };
  React.useEffect(() => {
    getPostList()
    
  }, [])


  return (<>
    <Grid container>
    <Typography variant="h4" gutterBottom>
        Publicaciones:
    </Typography>
    </Grid>
    {
      posts && posts.map(
        post=>{
          return (
          <><Card sx={{ maxWidth: 900 ,borderRadius: 3  }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={post.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.text}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
          <Grid paddingTop={2}></Grid></>
      )
    }
    )
    }
    </>
  );
}