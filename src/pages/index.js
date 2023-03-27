import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import Mentor from '../components/Mentor'
import Partner from '../components/Partners'
const mentors=[
    ["https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg","Ambuja Cement","Cement Company","Sasata nhi sabse acha"],
    ["https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg","Ambuja Cement","Cement Company","Sasata nhi sabse acha"],
    ["https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg","Ambuja Cement","Cement Company","Sasata nhi sabse acha"],
    ["https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg","Ambuja Cement","Cement Company","Sasata nhi sabse acha"],
    ["https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky.jpg","Ambuja Cement","Cement Company","Sasata nhi sabse acha"],];
export default function Home() {
    return (
        <>
        {mentors.map((item, index) => (
                <Mentor key={index}  title={item[1]} subtitle={item[2]} content={item[3]}/>
        ))}
       
       <Partner/>
       </>
    );
}
