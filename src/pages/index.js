import Head from 'next/head';

import Section from '../components/Section/index';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css" />
        <title>Início | Guilherme Lima</title>
      </Head>
      <Section />
    </>
  );
};