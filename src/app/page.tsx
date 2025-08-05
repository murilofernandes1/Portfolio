import { Metadata } from "next";
import styles from "../app/styles/home.module.css";

export const metadata: Metadata = {
  title: "Murilo Fernandes Vaz",
  openGraph: {
    title: "Portfolio Murilo Fernandes Vaz",
  },
};
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Murilo Fernandes Vaz</h1>
        <h2 className={styles.subtitle}>Desenvolvedor Front End</h2>
      </div>
    </>
  );
}
