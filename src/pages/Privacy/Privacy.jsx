import Container from "../../components/Container/Container";
import PageHero from "../../components/PageHero/PageHero";
import SEO from "../../components/SEO/SEO";
import styles from "./Privacy.module.css";

const sections = [
  {
    title: "1. Informações coletadas",
    text: "Quando os formulários forem integrados, poderemos coletar dados fornecidos voluntariamente, como nome, e-mail, telefone, empresa, cidade, estado, assunto e mensagem. Nesta versão conceitual, nenhum dado é enviado ou armazenado."
  },
  {
    title: "2. Finalidade do uso",
    text: "Os dados poderão ser utilizados para responder solicitações, prestar atendimento, avaliar propostas comerciais, enviar novidades mediante consentimento e aprimorar a experiência do site."
  },
  {
    title: "3. Compartilhamento",
    text: "Dados pessoais não deverão ser comercializados. O compartilhamento poderá ocorrer apenas com prestadores necessários à operação, sob critérios de segurança e confidencialidade, ou quando exigido por lei."
  },
  {
    title: "4. Cookies e tecnologias",
    text: "A versão atual não utiliza cookies de publicidade. Caso ferramentas de análise ou marketing sejam adicionadas, esta política e os mecanismos de consentimento deverão ser atualizados."
  },
  {
    title: "5. Direitos do titular",
    text: "O titular poderá solicitar confirmação de tratamento, acesso, correção, exclusão, portabilidade e informações sobre compartilhamento, conforme a legislação aplicável."
  },
  {
    title: "6. Segurança e retenção",
    text: "Quando houver coleta, serão adotadas medidas proporcionais para proteção dos dados. A retenção ocorrerá apenas pelo período necessário às finalidades informadas e obrigações legais."
  },
  {
    title: "7. Contato e atualizações",
    text: "Dúvidas sobre privacidade poderão ser encaminhadas ao canal oficial que será definido pela Vanity Pet. Esta política deve ser revisada por assessoria jurídica antes da publicação definitiva."
  }
];

function Privacy() {
  return (
    <>
      <SEO
        title="Política de Privacidade"
        description="Consulte as diretrizes conceituais de privacidade e proteção de dados do site Vanity Pet."
        path="/politica-de-privacidade"
      />
      <PageHero
        eyebrow="Transparência"
        title="Política de Privacidade."
        text="Versão conceitual preparada para revisão jurídica e adequação aos canais oficiais da Vanity Pet."
        compact
      />
      <section className={`section ${styles.privacy}`}>
        <Container className={styles.layout}>
          <aside>
            <span>Última atualização</span>
            <strong>Julho de 2026</strong>
            <p>
              Este documento é um texto-base e não substitui uma análise jurídica
              específica.
            </p>
          </aside>
          <article>
            <p className={styles.intro}>
              A Vanity Pet valoriza relações transparentes e o respeito à
              privacidade. Esta política explica, em caráter preliminar, como
              informações pessoais poderão ser tratadas neste site.
            </p>
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </section>
            ))}
          </article>
        </Container>
      </section>
    </>
  );
}

export default Privacy;
