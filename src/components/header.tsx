import Link from "next/link";
import styles from "../app/styles/header.module.css";

export function Header() {
  return (
    <header className={styles.navbar}>
      <Link className={styles.routes} href="/">
        Home
      </Link>
      <Link className={styles.routes} href="/projects">
        Projects
      </Link>
      <Link className={styles.routes} href="/contact">
        Contact
      </Link>
      <Link className={styles.routes} href="/about">
        About Me
      </Link>
    </header>
  );
}
