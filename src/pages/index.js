import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head'
<<<<<<< Updated upstream
<<<<<<< HEAD
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({subsets: ['latin']})
=======
>>>>>>> 071190f08143a650c34fa90fb8c78e9674cca92f
=======
>>>>>>> Stashed changes
// import Navbar from '../components/composite/Navbar'
import Faq from '@/components/composite/home/Faq';
import Hero from '@/components/composite/home/Hero';

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
        </>
    )
}