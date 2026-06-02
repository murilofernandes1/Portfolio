import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divisor} />
      <div className={styles.container}>
        <p className={styles.name}>
          © {new Date().getFullYear()} <span className={styles.dot}>•</span>{" "}
          <span>Developed by {""}</span>
          <span className={styles.redName}>Murilo Fernandes Vaz</span>
        </p>
      </div>
    </footer>
  );
}
