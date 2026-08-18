import LegalPage from "../../components/LegalPage/LegalPage";
import { COOKIE_CONSENT_KEY } from "../../config/cookieConsent";
import { companyInfo, contactInfo } from "../../config/site";

function CookiePolicy() {
  return (
    <LegalPage
      title="Política de Cookies"
      description="Entenda quais cookies e tecnologias de armazenamento são utilizados no site da Vanity Pet e como gerenciar suas preferências."
      path="/politica-de-cookies"
      eyebrow="Cookies"
      heroText="Uma descrição objetiva das tecnologias realmente presentes no site e das escolhas disponíveis ao visitante."
      intro="O site utiliza apenas o armazenamento local necessário para lembrar a preferência do visitante. Cookies de análise, publicidade ou marketing não são utilizados."
    >
      <section>
        <h2>1. O que são cookies e tecnologias semelhantes</h2>
        <p>
          Cookies são pequenos arquivos gravados pelo navegador durante o acesso
          a um site. Tecnologias semelhantes, como o armazenamento local
          (<code>localStorage</code>), também podem guardar preferências no
          dispositivo, embora tecnicamente não sejam cookies.
        </p>
      </section>

      <section>
        <h2>2. Tecnologias utilizadas</h2>
        <p>
          O site não utiliza Google Analytics, Google Tag Manager, Meta Pixel,
          ferramentas de marketing, rastreamento comportamental ou cookies
          opcionais de desempenho e publicidade.
        </p>
        <p>
          O site usa apenas uma chave de armazenamento local necessária para
          lembrar que o visitante visualizou o aviso e optou por continuar sem
          tecnologias opcionais.
        </p>
      </section>

      <section>
        <h2>3. Tecnologia de armazenamento utilizada</h2>
        <div
          data-legal-table
          role="region"
          aria-label="Tabela de armazenamento usado pelo site"
          tabIndex="0"
        >
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Finalidade</th>
                <th>Categoria</th>
                <th>Duração</th>
                <th>Origem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>{COOKIE_CONSENT_KEY}</code></td>
                <td>
                  Guardar a versão da escolha e indicar que análise e marketing
                  permanecem desativados.
                </td>
                <td>Necessária / preferência</td>
                <td>
                  Até a limpeza do armazenamento pelo usuário ou a atualização
                  da versão do aviso.
                </td>
                <td>Vanity Pet — armazenamento local do navegador</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p data-legal-note>
          Nenhuma tecnologia opcional é carregada com base nessa escolha. As
          preferências são organizadas nas categorias “necessários”, “análise”
          e “marketing” para permitir escolhas claras caso novos recursos sejam
          oferecidos no futuro.
        </p>
      </section>

      <section>
        <h2>4. Categorias consideradas</h2>
        <ul>
          <li>
            <strong>Necessários:</strong> recursos essenciais para a operação ou
            para lembrar uma preferência solicitada pelo visitante. Atualmente,
            somente a escolha do aviso se enquadra aqui.
          </li>
          <li>
            <strong>Análise e desempenho:</strong> poderiam medir uso e
            desempenho, mas não estão ativos no site.
          </li>
          <li>
            <strong>Marketing:</strong> poderiam personalizar publicidade ou
            rastrear campanhas, mas não estão ativos no site.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Recursos e serviços de terceiros</h2>
        <p>
          As fontes do site são carregadas do Google Fonts. Essa conexão pode
          transmitir ao Google dados técnicos necessários à entrega dos
          arquivos, como endereço IP e informações do navegador, mas o site
          não utiliza esse recurso para análise ou marketing.
        </p>
        <p>
          A hospedagem está configurada para Vercel, que pode utilizar
          mecanismos técnicos próprios de segurança e entrega. Links para
          WhatsApp, Instagram, e-mail e outros sites somente levam o visitante a
          ambientes externos quando ele decide acessá-los. Cookies eventualmente
          utilizados nesses domínios são regidos pelas políticas dos respectivos
          provedores e não são controlados por este site.
        </p>
      </section>

      <section>
        <h2>6. Como gerenciar a preferência</h2>
        <p>
          Como não há cookies opcionais ativos, o aviso oferece a ação
          “Continuar somente com necessários”. A preferência pode ser revista
          pelo link “Preferências de cookies” no rodapé. Também é possível
          remover a chave de armazenamento nas configurações de privacidade do
          navegador; nesse caso, o aviso será apresentado novamente.
        </p>
        <p>
          Bloquear ou limpar o armazenamento local pode fazer com que o site não
          consiga lembrar a escolha entre visitas, sem impedir o acesso ao
          conteúdo institucional.
        </p>
      </section>

      <section>
        <h2>7. Atualizações e contato</h2>
        <p>
          Esta Política deverá ser atualizada antes da ativação de qualquer nova
          tecnologia de análise, marketing ou outro armazenamento opcional. A
          data vigente é indicada no início da página.
        </p>
        <p>
          A {companyInfo.legalName}, responsável pela marca Vanity Pet, mantém
          esta Política. Dúvidas podem ser encaminhadas para
          <a href={contactInfo.emailUrl}> {contactInfo.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}

export default CookiePolicy;
