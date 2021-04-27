import '../styles/globals.css';
import styles from '../styles/app.module.css';

import Header from '../components/Header/index';
import Main from '../components/Main/index';
import Footer from '../components/Footer/index';


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;