import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head'
import LoginControl from "@/components/home/LoginControl";

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
            </Head>
            <main className={"main"}>
                <LoginControl/>
            </main>
        </>
    )
}
