import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ImgMediaCard from './ImgMediaCard';

function LeftCarousel(props)
{
    var items = [
        {
            name: "Random Name #1",
            image: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            image: "Hello World!"
        },
        {
            name: "Random Name #3",
            image: "Hello World3!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{/*
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.image}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
    */
   return(
    <ImgMediaCard/>
   )
}

export default LeftCarousel ;