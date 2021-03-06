import styles from './styles.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="logo.png" alt="" />
      </div>
      <nav className={styles.menu}>
        <Link href="/">
          <a title="index">Home</a>
        </Link>
        <Link href="/portfolio">
          <a title="portfolio">Portfolio</a>
        </Link>
      </nav>
    </header>
  )
}