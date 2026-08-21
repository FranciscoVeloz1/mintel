import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brand}>Mintel</p>
        <nav className={styles.links} aria-label="Legal">
          <a href="#about">Terminos de Uso</a>
          <a href="#about">Declaracion de Privacidad</a>
          <a href="#contact">Centro de Ayuda</a>
        </nav>
      </div>
    </footer>
  );
}
