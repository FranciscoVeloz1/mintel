import { products } from "../../utils/products";
import { ProductCard } from "../ProductCard";
import styles from "./Products.module.css";

export function Products() {
  return (
    <section
      id="products"
      className={styles.section}
      aria-labelledby="products-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="products-heading" className={styles.title}>
            Productos
          </h2>
          <p className={styles.subtitle}>
            Elige el paquete que encaje con tu hogar o empresa.
          </p>
        </header>

        <div className={styles.grid}>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                features={product.features}
                featured={product.featured}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
