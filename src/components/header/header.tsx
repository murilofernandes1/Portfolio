"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import styles from "./header.module.css";

export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <header className={styles.container}>
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logoWrapper}>
            <div className={styles.logoBox}>
              <Image src={logo} alt="Logo" height={40} />
            </div>
          </Link>
        </div>

        <div className={styles.navigation}>
          <Link
            href="/"
            className={`${styles.navLink} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="#projects"
            className={`${styles.navLink} ${
              pathname === "#projects" ? styles.active : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="#about"
            className={`${styles.navLink} ${
              pathname === "#about" ? styles.active : ""
            }`}
          >
            About
          </Link>
          <Link
            href="#contact"
            className={`${styles.navLink} ${
              pathname === "#contact" ? styles.active : ""
            }`}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className={`${styles.navLink} ${
              pathname === "/blog" ? styles.active : ""
            }`}
          >
            Blog
          </Link>
        </div>

        {/* <Link
            href="https://github.com/murilofernandes1"
            target="_blank"
            className={styles.iconLink}
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/murilofernandesdev/"
            target="_blank"
            className={styles.iconLink}
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:murilofernandesvaz4@gmail.com"
            className={styles.iconLink}
          >
            <Mail size={20} />
          </Link> */}
      </header>
    </>
  );
}
