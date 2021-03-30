import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Section from '../components/Section';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css" />
        <title>Página inicial | Guilherme Dev</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <Main />
        <Section />
      </div>
      <Footer />
    </>
  )
}