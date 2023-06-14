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
                <meta name="description" content="CareerWings EdTech..."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="CareerWings"/>
                <meta name="author" content="CareerWings WebOps"/>
                <link rel="icon" href="/favicon.ico"/>
                {/**Google tag (gtag.js)**/}
            </Head>
            <Partner/>
            <Mentor/>
            <CategoriesSection/>
            <NewCard/>
            <SectionWithCards/>
            <PricingSection/>
            <Faq/>
            <Footer/>
            <Partner/>
            <Mentor/>
            <CategoriesSection/>
            <NewCard/>
            <SectionWithCards/>
            <PricingSection/>
            <Faq/>
            <Footer/>
        </>
    )
}