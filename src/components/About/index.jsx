import { HomeIcon } from "../icons/HomeIcon";
import { WarehouseIcon } from "../icons/WarehouseIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import styles from "./About.module.css";

const pillars = [
  {
    id: "mintel",
    title: "Mintel",
    Icon: HomeIcon,
    body: "Somos una empresa mexicana enfocada en el internet de las cosas. Contamos con varios metodos para transformar tu hogar en una completa maravilla tecnologica.",
  },
  {
    id: "confort",
    title: "Confort house",
    Icon: WarehouseIcon,
    body: "Es nuestra tarjeta especializada en la automatizacion y control de hogares. Este dispositivo se vincula a tu celular, donde controlaras los elementos de tu hogar.",
  },
  {
    id: "house-app",
    title: "Mintel House",
    Icon: PhoneIcon,
    body: "Aplicacion web enfocada en el control de luminarias, contactos, electrodomesticos y agua de tu hogar. Tambien el monitoreo de sensores especiales para el hogar.",
  },
];

export function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="about-heading" className={styles.title}>
            Acerca de
          </h2>
          <p className={styles.subtitle}>
            Hardware, software y acompanamiento para automatizar tu espacio.
          </p>
        </header>

        <div className={styles.grid}>
          {pillars.map(({ id, title, Icon, body }) => {
            return (
              <article key={id} className={styles.pillar}>
                <Icon className={styles.icon} />
                <h3 className={styles.pillarTitle}>{title}</h3>
                <p className={styles.body}>{body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
