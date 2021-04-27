import Head from 'next/head';

import Projects from '../components/Projects/index';

export default function Portfolio() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css" />
        <title>Portfólio | Guilherme Lima</title>
      </Head>
      <Projects />
    </>
  );
};