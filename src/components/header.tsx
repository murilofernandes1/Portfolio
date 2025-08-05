import Link from "next/link";
import "../app/styles/header.module.css";

export function Header() {
  return (
    <header className="container-header">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </header>
  );
}
