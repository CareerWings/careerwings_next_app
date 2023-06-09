import React from "react";
import Marquee from "react-fast-marquee";
import { Container } from '@mui/material';


const SliderItems = [
  { id: 1, name: 'Partner 1', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/1000px-BBC_Logo_2021.svg.png' },
  { id: 2, name: 'Partner 2', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png' },
  { id: 3, name: 'Partner 3', src: 'https://1000logos.net/wp-content/uploads/2020/05/AMD-Logo.png' },
  { id: 4, name: 'Partner 4', src: 'https://1000logos.net/wp-content/uploads/2017/02/Intel-Logo-2005.png' },
  { id: 5, name: 'Partner 5', src: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png' },
  { id: 6, name: 'Partner 6', src: 'https://1000logos.net/wp-content/uploads/2017/04/Microsoft-logo.jpg' },
  { id: 7, name: 'Partner 7', src: 'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-blk-500x200-4c25-p@2x.png' },
];
function Partner () {
  return (
    <Container sx={{ mt: 5, mb: 10 }}>
      <div className="partner-marquee">
        <Marquee autoFill={true} play={true}  speed={100}
          direction={"left"} loop={0} >
          {SliderItems.map((item) => {
            return (
              <img src={item.src}
                width={200}
                height={90}
                style={{margin: "0 40px", marginTop: 80}}
                alt={item.name} key={item.id} />
              );
          })}

        </Marquee>
      </div>
    </Container>
  )
}

export default Partner;