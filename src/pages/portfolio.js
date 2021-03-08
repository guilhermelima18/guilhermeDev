import Head from 'next/head';
import Header from "./components/Header";

export default function Portfolio() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css" />
                <title>Portfolio | Guilherme Dev</title>
            </Head>
            <Header />
        </>
    )
}