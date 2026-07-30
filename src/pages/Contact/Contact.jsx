import { Instagram, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { PrimaryButton } from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import { contactInfo } from "../../config/site";
import { submitContact } from "../../utils/submitContact";
import styles from "./Contact.module.css";

const initialForm = {
  name: "",
  company: "",
  city: "",
  state: "",
  phone: "",
  email: "",
  subject: "",
  message: ""
};

const fieldOrder = [
  "name",
  "city",
  "state",
  "phone",
  "email",
  "subject",
  "message"
];

const subjects = [
  "Quero revender",
  "Sou distribuidor",
  "Quero conhecer as fragrâncias",
  "Atendimento ao consumidor",
  "Parcerias",
  "Imprensa",
  "Outros"
];

function validate(form) {
  const errors = {};
  const phoneDigits = form.phone.replace(/\D/g, "");

  if (form.name.trim().length < 2) {
    errors.name = "Informe seu nome.";
  }
  if (!form.city.trim()) {
    errors.city = "Informe sua cidade.";
  }
  if (!/^[A-Za-z]{2}$/.test(form.state.trim())) {
    errors.state = "Informe a UF com duas letras.";
  }
  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = "Informe um telefone válido com DDD.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Informe um e-mail válido.";
  }
  if (!form.subject) {
    errors.subject = "Selecione um assunto.";
  }
  if (form.message.trim().length < 10) {
    errors.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
  }

  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const updateField = (event) => {
    const { name } = event.target;
    const value =
      name === "state"
        ? event.target.value.replace(/[^A-Za-z]/g, "").toUpperCase().slice(0, 2)
        : event.target.value;

    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setStatus("");

    if (Object.keys(nextErrors).length) {
      const firstInvalidField = fieldOrder.find((name) => nextErrors[name]);
      setStatus("Revise os campos indicados antes de continuar.");
      window.requestAnimationFrame(() => {
        formElement.elements.namedItem(firstInvalidField)?.focus();
      });
      return;
    }

    const response = submitContact(form);
    setWhatsappUrl(response.url);

    try {
      window.open(response.url, "_blank", "noopener,noreferrer");
      setStatus(response.message);
    } catch {
      setStatus(
        "Não foi possível abrir o WhatsApp automaticamente. Use o link abaixo para continuar."
      );
    }
  };

  const errorProps = (name) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined
  });

  return (
    <>
      <SEO
        title="Contato"
        description="Fale com a Vanity Pet pelo WhatsApp sobre fragrâncias, revenda, distribuição, parcerias e atendimento."
        path="/contato"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          mainEntity: {
            "@type": "Organization",
            name: "Vanity Pet",
            email: contactInfo.email,
            telephone: `+${contactInfo.phoneRaw}`,
            sameAs: [contactInfo.instagramUrl]
          }
        }}
      />

      <header className={styles.opening}>
        <Container className={styles.openingInner}>
          <Reveal>
            <span className={styles.eyebrow}>Contato</span>
            <h1>Vamos conversar.</h1>
          </Reveal>
          <Reveal className={styles.openingCopy} delay={80}>
            <p>
              Produtos, revenda, distribuição ou parcerias: organize sua
              solicitação e continue diretamente pelo WhatsApp oficial.
            </p>
          </Reveal>
        </Container>
      </header>

      <main className={styles.contact}>
        <Container className={styles.contactGrid}>
          <Reveal as="aside" className={styles.info}>
            <span className={styles.eyebrow}>Canais oficiais</span>
            <h2>Fale com a equipe Vanity Pet.</h2>
            <p>
              Escolha um canal direto ou preencha o formulário para iniciar uma
              conversa com as informações já organizadas.
            </p>

            <div className={styles.channels}>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" strokeWidth={1.2} />
                <span>
                  <small>WhatsApp</small>
                  {contactInfo.phoneDisplay}
                </span>
              </a>
              <a href={contactInfo.emailUrl}>
                <Mail aria-hidden="true" strokeWidth={1.2} />
                <span>
                  <small>E-mail</small>
                  {contactInfo.email}
                </span>
              </a>
              <a
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram aria-hidden="true" strokeWidth={1.2} />
                <span>
                  <small>Instagram</small>
                  {contactInfo.instagramHandle}
                </span>
              </a>
            </div>

            <div className={styles.editorialNote}>
              <span>Atendimento direto</span>
              <p>
                O envio não armazena dados no site. A mensagem é preparada no
                seu dispositivo e aberta no WhatsApp.
              </p>
            </div>
          </Reveal>

          <Reveal className={styles.formWrap} delay={100}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formHeader}>
                <span className={styles.eyebrow}>Sua mensagem</span>
                <h2>Conte o que você precisa.</h2>
                <p>Campos marcados com * são obrigatórios.</p>
              </div>

              <div className={styles.formGrid}>
                <label htmlFor="contact-name">
                  <span>Nome *</span>
                  <input
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    autoComplete="name"
                    {...errorProps("name")}
                  />
                  {errors.name && (
                    <small id="name-error">{errors.name}</small>
                  )}
                </label>

                <label htmlFor="contact-company">
                  <span>Empresa ou estabelecimento</span>
                  <input
                    id="contact-company"
                    name="company"
                    value={form.company}
                    onChange={updateField}
                    autoComplete="organization"
                  />
                </label>

                <label htmlFor="contact-city">
                  <span>Cidade *</span>
                  <input
                    id="contact-city"
                    name="city"
                    value={form.city}
                    onChange={updateField}
                    autoComplete="address-level2"
                    {...errorProps("city")}
                  />
                  {errors.city && (
                    <small id="city-error">{errors.city}</small>
                  )}
                </label>

                <label htmlFor="contact-state">
                  <span>Estado *</span>
                  <input
                    id="contact-state"
                    name="state"
                    value={form.state}
                    onChange={updateField}
                    autoComplete="address-level1"
                    inputMode="text"
                    maxLength="2"
                    placeholder="UF"
                    {...errorProps("state")}
                  />
                  {errors.state && (
                    <small id="state-error">{errors.state}</small>
                  )}
                </label>

                <label htmlFor="contact-phone">
                  <span>Telefone / WhatsApp *</span>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    autoComplete="tel"
                    inputMode="tel"
                    {...errorProps("phone")}
                  />
                  {errors.phone && (
                    <small id="phone-error">{errors.phone}</small>
                  )}
                </label>

                <label htmlFor="contact-email">
                  <span>E-mail *</span>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    autoComplete="email"
                    inputMode="email"
                    {...errorProps("email")}
                  />
                  {errors.email && (
                    <small id="email-error">{errors.email}</small>
                  )}
                </label>

                <label className={styles.full} htmlFor="contact-subject">
                  <span>Assunto *</span>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={updateField}
                    {...errorProps("subject")}
                  >
                    <option value="">Selecione uma opção</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <small id="subject-error">{errors.subject}</small>
                  )}
                </label>

                <label className={styles.full} htmlFor="contact-message">
                  <span>Mensagem *</span>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={updateField}
                    {...errorProps("message")}
                  />
                  {errors.message && (
                    <small id="message-error">{errors.message}</small>
                  )}
                </label>
              </div>

              <div className={styles.formFooter}>
                <p>
                  Ao continuar, consulte nossa{" "}
                  <Link to="/politica-de-privacidade">
                    política de privacidade
                  </Link>
                  .
                </p>
                <PrimaryButton type="submit">
                  Enviar pelo WhatsApp
                </PrimaryButton>
              </div>

              <div className={styles.status} aria-live="polite">
                {status && <p>{status}</p>}
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir WhatsApp novamente
                  </a>
                )}
              </div>
            </form>
          </Reveal>
        </Container>
      </main>
    </>
  );
}

export default Contact;
