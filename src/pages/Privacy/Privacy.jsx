import { Link } from "react-router";
import LegalPage from "../../components/LegalPage/LegalPage";
import { companyInfo, contactInfo } from "../../config/site";

function Privacy() {
  return (
    <LegalPage
      title="Política de Privacidade"
      description="Saiba como a Vanity Pet trata dados pessoais, preferências de privacidade e informações enviadas pelos canais de contato."
      path="/politica-de-privacidade"
      eyebrow="Privacidade"
      heroText="Informações claras sobre os dados tratados durante sua navegação e nos canais de contato da Vanity Pet."
      intro="Esta Política descreve, de forma transparente, como os dados pessoais podem ser tratados no site institucional da Vanity Pet, em conformidade com a legislação brasileira aplicável."
    >
      <section>
        <h2>1. Quem é responsável pelo site</h2>
        <p>
          A <strong>{companyInfo.legalName}</strong>, inscrita no CNPJ nº
          <strong> {companyInfo.cnpj}</strong>, é a pessoa jurídica responsável
          pela marca Vanity Pet, pela manutenção deste site e pelas decisões
          relacionadas aos tratamentos de dados pessoais aqui descritos.
        </p>
        <p>
          Endereço: {companyInfo.address}. Para assuntos relacionados à
          privacidade e ao exercício dos direitos do titular, entre em contato
          pelo e-mail <a href={contactInfo.emailUrl}>{contactInfo.email}</a>.
        </p>
      </section>

      <section>
        <h2>2. Dados pessoais que podem ser tratados</h2>
        <h3>Dados fornecidos voluntariamente</h3>
        <p>
          No formulário de contato, podem ser preenchidos nome, empresa ou
          estabelecimento, cidade, estado, telefone ou WhatsApp, e-mail,
          assunto e mensagem. O site não envia esses campos para uma base de
          dados própria: as informações permanecem na memória da página e são
          usadas para preparar, no dispositivo do visitante, uma mensagem para
          o WhatsApp.
        </p>
        <h3>Dados técnicos de navegação</h3>
        <p>
          A infraestrutura necessária para entregar e proteger o site pode
          processar informações técnicas como endereço IP, data e horário da
          requisição, página acessada, tipo de navegador, dispositivo e
          registros de segurança. A hospedagem do site utiliza a infraestrutura
          da Vercel para disponibilização, desempenho e segurança.
        </p>
        <h3>Preferência de privacidade</h3>
        <p>
          O navegador armazena a chave <code>vanitypet_cookie_consent</code>,
          com a versão do aviso e as categorias necessárias, de análise e de
          marketing. Na configuração atual, apenas a categoria necessária fica
          ativa.
        </p>
      </section>

      <section>
        <h2>3. Como os dados são obtidos</h2>
        <ul>
          <li>pelo preenchimento voluntário do formulário de contato;</li>
          <li>
            pela abertura de links de WhatsApp, e-mail, Instagram ou outros
            sites externos;
          </li>
          <li>
            por solicitações técnicas realizadas pelo navegador à hospedagem e
            ao serviço externo de fontes Google Fonts;
          </li>
          <li>
            pelo armazenamento local da escolha feita no aviso de privacidade.
          </li>
        </ul>
        <p>
          Buscas no catálogo e no mapa de distribuidores são processadas na
          própria interface. Filtros do catálogo podem aparecer na URL e,
          consequentemente, no histórico do navegador.
        </p>
      </section>

      <section>
        <h2>4. Finalidades e bases legais</h2>
        <p>Os tratamentos podem ocorrer, conforme o contexto, para:</p>
        <ul>
          <li>
            viabilizar o atendimento solicitado e preparar a comunicação pelo
            WhatsApp, inclusive para procedimentos preliminares relacionados a
            uma solicitação comercial;
          </li>
          <li>
            entregar, manter e proteger o site, com base no legítimo interesse
            de oferecer uma navegação segura e funcional, observados a
            necessidade e os direitos do titular;
          </li>
          <li>
            cumprir obrigações legais ou regulatórias e exercer direitos em
            processos, quando aplicável;
          </li>
          <li>
            registrar a preferência sobre o aviso de cookies e evitar sua
            reapresentação desnecessária.
          </li>
        </ul>
        <p>
          No momento, o site não utiliza tecnologias de análise, publicidade ou
          marketing e, portanto, não solicita consentimento para essas
          finalidades.
        </p>
      </section>

      <section>
        <h2>5. Compartilhamento e serviços de terceiros</h2>
        <p>
          Dados podem ser disponibilizados a terceiros somente na medida
          necessária para o recurso escolhido ou para a operação técnica do
          site:
        </p>
        <ul>
          <li>
            <strong>WhatsApp/Meta:</strong> recebe a mensagem e os dados nela
            incluídos quando o visitante decide prosseguir para o WhatsApp;
          </li>
          <li>
            <strong>Google Fonts:</strong> fornece as fontes tipográficas e pode
            receber dados técnicos da requisição, como IP e informações do
            navegador;
          </li>
          <li>
            <strong>Vercel:</strong> infraestrutura de hospedagem configurada
            para disponibilização, desempenho e segurança do site;
          </li>
          <li>
            <strong>Instagram, aplicativo de e-mail e sites externos:</strong>
            passam a tratar dados segundo suas próprias políticas quando o
            visitante acessa voluntariamente esses destinos.
          </li>
        </ul>
        <p>
          A Orion não comercializa os dados pessoais tratados por este site. O
          site também não utiliza Google Analytics, Google Tag Manager, Meta
          Pixel ou plataformas próprias de cadastro.
        </p>
      </section>

      <section>
        <h2>6. Transferências internacionais</h2>
        <p>
          Google, Meta e Vercel possuem operações e infraestrutura em diferentes
          países. Assim, dados técnicos ou informações enviadas voluntariamente
          a esses serviços podem ser processados fora do Brasil, conforme a
          arquitetura e as políticas de cada fornecedor e as salvaguardas
          previstas na legislação aplicável. Os locais de processamento podem
          variar de acordo com a infraestrutura utilizada por cada fornecedor.
        </p>
      </section>

      <section>
        <h2>7. Armazenamento, retenção e descarte</h2>
        <p>
          Os dados preenchidos no formulário permanecem na memória da página
          até serem alterados, a página ser recarregada ou a navegação ser
          encerrada. Ao abrir o WhatsApp, a continuidade do tratamento passa a
          seguir a interação realizada pelo visitante e as regras do serviço.
        </p>
        <p>
          A preferência do aviso permanece no armazenamento local até ser
          apagada pelo usuário ou até uma futura mudança da versão do aviso. Os
          prazos aplicados a registros técnicos de hospedagem e a dados tratados
          por terceiros seguem as finalidades informadas, suas políticas e as
          obrigações legais aplicáveis.
        </p>
      </section>

      <section>
        <h2>8. Segurança</h2>
        <p>
          São adotadas medidas compatíveis com a natureza deste site, incluindo
          minimização do envio de dados e ausência de armazenamento próprio do
          formulário. Nenhum sistema, contudo, é completamente imune a riscos.
        </p>
      </section>

      <section>
        <h2>9. Direitos do titular</h2>
        <p>
          Nos termos da LGPD, o titular pode solicitar, quando cabível,
          confirmação da existência de tratamento, acesso, correção,
          anonimização, bloqueio ou eliminação de dados desnecessários,
          portabilidade, informações sobre compartilhamento, revisão das
          decisões automatizadas e revogação do consentimento.
        </p>
        <p>
          Solicitações devem ser encaminhadas para
          <a href={contactInfo.emailUrl}> {contactInfo.email}</a>. Poderão ser
          solicitadas informações proporcionais para confirmar a identidade do
          requerente e proteger os dados contra acesso indevido. Não há decisão
          automatizada ou perfil comportamental implementado no site atual.
        </p>
      </section>

      <section>
        <h2>10. Crianças e adolescentes</h2>
        <p>
          O site não é direcionado à coleta de dados de crianças ou adolescentes
          e não solicita idade no formulário. Caso um responsável identifique o
          envio indevido de dados de uma criança, poderá solicitar providências
          pelo canal de privacidade informado nesta Política.
        </p>
      </section>

      <section>
        <h2>11. Cookies, alterações e contato</h2>
        <p>
          Informações detalhadas sobre armazenamento local e tecnologias
          semelhantes estão na <Link to="/politica-de-cookies">Política de Cookies</Link>.
          Esta Política poderá ser atualizada para refletir mudanças no site,
          nos fornecedores ou na legislação. A data da versão vigente estará
          sempre indicada no início do documento.
        </p>
        <p>
          Dúvidas e solicitações: <a href={contactInfo.emailUrl}>{contactInfo.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}

export default Privacy;
