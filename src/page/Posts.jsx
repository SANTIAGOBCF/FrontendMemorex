import { Button, Divider, Grid } from '@mui/material'
import React from 'react'
import AddPostDialog from '../components/Posts/AddPostDialog'
import ListPosts from '../components/Posts/ListPosts'



export default function Posts() {
  return (
    <>
        <Grid container spacing={2} paddingTop={4}>
        <Grid>
          <AddPostDialog/>
        </Grid>
        <Grid>
        </Grid>
        <Grid xs={12} paddingTop={4}>  
          <ListPosts/>
        </Grid>
        </Grid>
    </>
  )
}

