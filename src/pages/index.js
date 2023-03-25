import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import Mentor from '../components/Mentor'
import Partner from '../components/Partners'
const mentors=[
    ["","0","0"],
    ["","0","0"],
    ["","0","0"],
    ["","0","0"],
    ["","0","0"],];
export default function Home() {
    return (
        <>
        {mentors.map((item, index) => (
                <Mentor key={index} image={item[0]} colorA={item[1]} colorB={item[2]}/>
        ))}
       
       <Partner/>
       </>
    );
}
