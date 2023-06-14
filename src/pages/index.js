import Head from 'next/head'
import Faq from './Components/Faq';
import Mentor from './Components/mentors';
import Partner from './Components/Partners/Partner';
import CategoriesSection from './Components/Courses-Cards/Couses-Section';
import SectionWithCards from './Components/Know/SectionWithCards';
import NewCard from './Components/Courses-Cards/NewCard';
import PricingSection from './Components/Pricing/price-cards';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
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
            <Navbar/>
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