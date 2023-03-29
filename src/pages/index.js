import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import Mentor from '../components/Mentor'
import Partner from '../components/Partners'
const mentors=[
    ["https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg","Ambuj Cement","Sasata nhi sbsa acha"],
    ["https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg","Ambuj Cement","Sasata nhi sbsa acha"],
    ["https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg","Ambuj Cement","Sasata nhi sbsa acha"],
    ["https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg","Ambuj Cement","Sasata nhi sbsa acha"],
    ["https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg","Ambuj Cement","Sasata nhi sbsa acha"],];
export default function Home() {
    return (
        <>
        {mentors.map((item, index) => (
                <Mentor key={index}  imgUrl={item[0]} title={item[1]} description={item[2]} />
        ))}
       
       <Partner/>
       </>
    );
}
