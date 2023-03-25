import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Image from 'next/image';

function Partner()
{
    var items = [
        {
            imgurl:"https://5.imimg.com/data5/SELLER/Default/2021/10/CO/NN/OJ/23571748/ambuja-ppc-cement-1000x1000.jpg",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            imgurl:"/vercel.p",
            description: "Hello World!"
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
{
    return (
        <Paper>
            <Image src={props.item.imgurl} width= {500} height= {300}/>
            <p>{props.item.description}</p>
        </Paper>
    )
}
export default Partner;
