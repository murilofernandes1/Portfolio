"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import styles from "./header.module.css";

const sections = ["home", "projects", "about", "contact"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.container}>
      <Link href="#home" className={styles.logoWrapper}>
        <Image src={logo} alt="Logo" height={40} />
      </Link>

      <nav className={styles.navigation}>
        {sections.map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            className={`${styles.navLink} ${
              activeSection === section ? styles.active : ""
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}

        <Link href="/blog" className={styles.navLink}>
          Blog
        </Link>
      </nav>
    </header>
  );
}
