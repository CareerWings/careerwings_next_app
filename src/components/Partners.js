import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Image from 'next/image';

function Partner()
{
    var items = [
        {
            imgurl:"https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg",
        },
        {
            imgurl:"https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg",
        }
    ]

    return (
        <Carousel autoPlay={true} animation="slide">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <Image src={props.item.imgurl} width= {500} height= {300}/>
            <p>{props.item.description}</p>
        </Paper>
    )
}
export default Partner;
