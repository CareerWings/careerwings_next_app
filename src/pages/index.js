import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head'
import Navbar from '../components/composite/Navbar'
import Faq from '@/components/composite/home/Faq';
import Hero from '@/components/composite/home/Hero';
import Mentor from '../components/Mentor'
import Partner from '../components/Partners'

const items = [
    {
      title: 'Item 1',
      image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
    {
      title: 'Item 2',
      image: 'https://picsum.photos/id/238/200/300',
    },
    {
      title: 'Item 3',
      image: 'https://picsum.photos/id/239/200/300',
    },
  ];
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
            <Navbar/>
            <Hero/>
            <Mentor/>
            <Partner items={items}/>
            <Faq/>
        </>
    )
}