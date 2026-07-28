import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { PrimaryButton } from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import PageHero from "../../components/PageHero/PageHero";
import Reveal from "../../components/Reveal/Reveal";
import SEO from "../../components/SEO/SEO";
import { submitContact } from "../../utils/submitContact";
import styles from "./Contact.module.css";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  subject: "",
  message: ""
};

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
  if (!form.name.trim()) errors.name = "Informe seu nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Informe um e-mail válido.";
  }
  if (!form.phone.trim()) errors.phone = "Informe um telefone.";
  if (!form.city.trim()) errors.city = "Informe sua cidade.";
  if (!form.state.trim()) errors.state = "Informe seu estado.";
  if (!form.subject) errors.subject = "Selecione um assunto.";
  if (form.message.trim().length < 10) {
    errors.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
  }
  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setStatus("");

    if (Object.keys(nextErrors).length) {
      setStatus("Revise os campos indicados antes de continuar.");
      return;
    }

    setSubmitting(true);
    const response = await submitContact(form);
    setStatus(response.message);
    setSubmitting(false);
    if (response.ok) setForm(initialForm);
  };

  return (
    <>
      <SEO
        title="Contato"
        description="Entre em contato com a Vanity Pet para conhecer as fragrâncias, revenda, distribuição, parcerias e atendimento."
        path="/contato"
      />
      <PageHero
        eyebrow="Contato"
        title="Fale com a Vanity Pet."
        text="Envie sua mensagem sobre produtos, revenda, distribuição, parcerias ou atendimento."
        compact
      />

      <section className={`section ${styles.contact}`}>
        <Container className={styles.contactGrid}>
          <Reveal className={styles.info}>
            <span className={styles.kicker}>Atendimento</span>
            <h2>Escolha o canal mais conveniente.</h2>
            <p>
              Use o formulário para falar sobre produtos ou oportunidades
              comerciais. Os contatos diretos abaixo devem ser confirmados antes
              da publicação.
            </p>

            <div className={styles.channels}>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" strokeWidth={1.2} />
                <span>
                  <small>WhatsApp</small>
                  (00) 00000-0000
                </span>
              </a>
              <a href="mailto:comercial@vanitypet.com.br">
                <Mail aria-hidden="true" strokeWidth={1.2} />
                <span>
                  <small>E-mail comercial</small>
                  comercial@vanitypet.com.br
                </span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram aria-hidden="true" strokeWidth={1.2} />
                <span>
                  <small>Instagram</small>
                  @vanitypet
                </span>
              </a>
              <div>
                <Phone aria-hidden="true" strokeWidth={1.2} />
                <span>
                  <small>Atendimento</small>
                  Segunda a sexta, 9h às 18h
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className={styles.formWrap} delay={120}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formHeader}>
                <h2>Preencha seus dados.</h2>
                <p>
                  O formulário valida as informações; o envio será ativado quando
                  o canal oficial for definido.
                </p>
              </div>
              <div className={styles.formGrid}>
                <label>
                  <span>Nome *</span>
                  <input
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <small className="field-error">{errors.name}</small>}
                </label>
                <label>
                  <span>Empresa</span>
                  <input
                    className="form-control"
                    name="company"
                    value={form.company}
                    onChange={updateField}
                    autoComplete="organization"
                  />
                </label>
                <label>
                  <span>E-mail *</span>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <small className="field-error">{errors.email}</small>}
                </label>
                <label>
                  <span>Telefone *</span>
                  <input
                    className="form-control"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && <small className="field-error">{errors.phone}</small>}
                </label>
                <label>
                  <span>Cidade *</span>
                  <input
                    className="form-control"
                    name="city"
                    value={form.city}
                    onChange={updateField}
                    autoComplete="address-level2"
                    aria-invalid={Boolean(errors.city)}
                  />
                  {errors.city && <small className="field-error">{errors.city}</small>}
                </label>
                <label>
                  <span>Estado *</span>
                  <input
                    className="form-control"
                    name="state"
                    value={form.state}
                    onChange={updateField}
                    autoComplete="address-level1"
                    maxLength="2"
                    placeholder="UF"
                    aria-invalid={Boolean(errors.state)}
                  />
                  {errors.state && <small className="field-error">{errors.state}</small>}
                </label>
                <label className={styles.full}>
                  <span>Assunto *</span>
                  <select
                    className="form-control"
                    name="subject"
                    value={form.subject}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.subject)}
                  >
                    <option value="">Selecione uma opção</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <small className="field-error">{errors.subject}</small>
                  )}
                </label>
                <label className={styles.full}>
                  <span>Mensagem *</span>
                  <textarea
                    className="form-control"
                    name="message"
                    value={form.message}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <small className="field-error">{errors.message}</small>
                  )}
                </label>
              </div>

              <div className={styles.formFooter}>
                <p>Ao enviar, você concorda com nossa política de privacidade.</p>
                <PrimaryButton type="submit" disabled={submitting}>
                  {submitting ? "Validando..." : "Validar formulário"}
                </PrimaryButton>
              </div>
              <p className={styles.status} aria-live="polite">
                {status}
              </p>
            </form>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export default Contact;
