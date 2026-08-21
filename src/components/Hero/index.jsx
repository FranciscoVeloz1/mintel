import styles from "./Hero.module.css";

const HERO_IMAGE =
  "https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.media} aria-hidden="true">
        <img src={HERO_IMAGE} alt="" className={styles.image} />
        <div className={styles.scrim} />
      </div>

      <div className={styles.content}>
        <p className={styles.brand}>Mintel</p>
        <h1 id="hero-heading" className={styles.title}>
          Bienvenidos a Mintel
        </h1>
        <p className={styles.lead}>
          Somos una empresa dedicada a la transformacion digital de nuestros
          hogares a traves del internet de las cosas.
        </p>
        <div className={styles.ctas}>
          <a href="#products" className={styles.primary}>
            Comprar
          </a>
          <a href="#software" className={styles.secondary}>
            Mas informacion
          </a>
        </div>
      </div>
    </section>
  );
}
