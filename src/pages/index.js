import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head'
// import Navbar from '../components/composite/Navbar'
import Faq from '@/components/composite/home/Faq';
import Hero from '@/components/composite/home/Hero';
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
            <Head>
                <title>CareerWings | Home</title>
                <meta name="description" content="CareerWings EdTech..."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="CareerWings"/>
                <meta name="author" content="CareerWings WebOps"/>
                <link rel="icon" href="/favicon.ico"/>
                {/**Google tag (gtag.js)**/}
            </Head>
             {/*<Navbar/>*/}
             <Faq/>
            <Hero/>
             {mentors.map((item, index) => (
                <Mentor key={index}  imgUrl={item[0]} title={item[1]} description={item[2]} />
        ))}
       
       <Partner/>
        </>
    )
}
