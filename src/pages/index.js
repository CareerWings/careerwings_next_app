import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head'
import { Link } from "react-scroll";
import Navbar from '../components/composite/Navbar'
import Faq from '@/components/composite/home/Faq';
import Hero from '@/components/composite/home/Hero';
import Mentor from '../components/Mentor'
import Partner from '../components/Partners'
import InternshipCard from '../components/internship-card';
import { Grid } from '@material-ui/core';
export default function Home() {
    return (
        <>
            <Head>
                <title>CareerWings | Home</title>
                <meta name="description" content="CareerWings EdTech..." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="CareerWings" />
                <meta name="author" content="CareerWings WebOps" />
                <link rel="icon" href="/favicon.ico" />
                {/**Google tag (gtag.js)**/}
            </Head>
           
                <Grid container spacing={1}>
                    <Grid item xs={12} md={3}>
                        <Navbar />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Hero />
                                <InternshipCard />
                                <Mentor />
                                <Link to="partners" smooth={true} duration={500}>
                                    <Partner />
                                </Link>
                                <Faq />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </>
    )
}
