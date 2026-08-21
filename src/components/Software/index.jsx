import { DesktopIcon } from "../icons/DesktopIcon";
import { GaugeIcon } from "../icons/GaugeIcon";
import styles from "./Software.module.css";

const SOFTWARE_IMAGE =
  "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/latam/latin/mkt/pdp/plp-banner/x-pro.png";

export function Software() {
  return (
    <section
      id="software"
      className={styles.section}
      aria-labelledby="software-heading"
    >
      <div className={styles.inner}>
        <div className={styles.media}>
          <img
            src={SOFTWARE_IMAGE}
            alt="Dispositivo con la aplicacion Mintel House"
            className={styles.image}
          />
        </div>

        <div className={styles.copy}>
          <h2 id="software-heading" className={styles.title}>
            La mejor aplicacion de IoT
            <span className={styles.accent}>Mintel House</span>
          </h2>

          <ul className={styles.features}>
            <li className={styles.feature}>
              <DesktopIcon className={styles.icon} />
              <p>
                Aplicacion web agradable a la vista y de facil uso donde
                controlaras todos los elementos de tu hogar.
              </p>
            </li>
            <li className={styles.feature}>
              <GaugeIcon className={styles.icon} />
              <p>
                La aplicacion web cuenta con un rendimiento increible, podras
                utilizarla desde cualquier dispositivo.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
