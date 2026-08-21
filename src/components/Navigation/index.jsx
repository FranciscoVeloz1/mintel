import { useMobileNav } from "../../hooks/useMobileNav";
import { MenuIcon } from "../icons/MenuIcon";
import { CloseIcon } from "../icons/CloseIcon";
import styles from "./Navigation.module.css";

const links = [
  { href: "#products", label: "Productos" },
  { href: "#software", label: "Software" },
  { href: "#about", label: "Acerca de" },
  { href: "#contact", label: "Contacto" },
];

export function Navigation() {
  const { isOpen, toggle, close, navRef } = useMobileNav();

  return (
    <header className={styles.header} ref={navRef}>
      <nav className={styles.nav} aria-label="Principal">
        <a href="#home" className={styles.brand} onClick={close}>
          Mintel
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          onClick={toggle}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div
          id="primary-menu"
          className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
        >
          <ul className={styles.links}>
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <a href={link.href} className={styles.link} onClick={close}>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className={styles.actions}>
            <a href="#contact" className={styles.ghost} onClick={close}>
              Iniciar sesion
            </a>
            <a href="#contact" className={styles.primary} onClick={close}>
              Registrarse
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
