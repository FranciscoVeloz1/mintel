import { useState } from "react";
import styles from "./Contact.module.css";

const CONTACT_IMAGE =
  "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const INITIAL = {
  name: "",
  email: "",
  message: "",
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Ingresa tu nombre.";
  }

  if (!values.email.trim()) {
    errors.email = "Ingresa tu correo.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "El correo no es valido.";
  }

  if (!values.message.trim()) {
    errors.message = "Escribe un mensaje.";
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => {
      return {
        ...current,
        [name]: value,
      };
    });

    if (status === "success") {
      setStatus("idle");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setValues(INITIAL);
  }

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className={styles.inner}>
        <div className={styles.card}>
          <img
            src={CONTACT_IMAGE}
            alt=""
            className={styles.image}
          />

          <div className={styles.body}>
            <h2 id="contact-heading" className={styles.title}>
              Contactanos
            </h2>
            <p className={styles.lead}>
              Cuentanos sobre tu proyecto y te respondemos a la brevedad.
            </p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                  Nombre
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={styles.input}
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name ? (
                  <p id="name-error" className={styles.error} role="alert">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>
                  Correo
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={styles.input}
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email ? (
                  <p id="email-error" className={styles.error} role="alert">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.label}>
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className={styles.textarea}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message ? (
                  <p id="message-error" className={styles.error} role="alert">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {status === "success" ? (
                <p className={styles.success} role="status">
                  Gracias. Tu mensaje quedo listo para envio.
                </p>
              ) : null}

              <button type="submit" className={styles.submit}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
