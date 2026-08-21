import { CheckIcon } from "../icons/CheckIcon";
import styles from "./ProductCard.module.css";

export function ProductCard({ name, price, features, featured = false }) {
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      {featured ? <p className={styles.badge}>Recomendado</p> : null}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>{price}</p>
      <ul className={styles.list}>
        {features.map((feature) => {
          return (
            <li key={feature} className={styles.item}>
              <CheckIcon className={styles.icon} />
              <span>{feature}</span>
            </li>
          );
        })}
      </ul>
      <a href="#contact" className={styles.cta}>
        Adquirir
      </a>
    </article>
  );
}
