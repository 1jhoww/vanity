import { Link } from "react-router";
import LegalPage from "../../components/LegalPage/LegalPage";
import { companyInfo, contactInfo } from "../../config/site";

function Terms() {
  return (
    <LegalPage
      title="Termos de Uso"
      description="Consulte as condições de utilização do site institucional da Vanity Pet, seus conteúdos, produtos e canais externos."
      path="/termos-de-uso"
      eyebrow="Termos"
      heroText="Condições claras para a utilização responsável do site institucional e de seus conteúdos."
      intro="Estes Termos disciplinam o acesso ao site institucional da Vanity Pet. Ao navegar, o visitante deve utilizar os conteúdos de forma lícita e compatível com as finalidades informativas da página."
    >
      <section>
        <h2>1. Identificação e finalidade</h2>
        <p>
          O site da marca Vanity Pet é mantido pela
          <strong> {companyInfo.legalName}</strong>, inscrita no CNPJ nº
          <strong> {companyInfo.cnpj}</strong>. O site apresenta a marca, suas
          fragrâncias, informações institucionais, canais de contato e uma rede
          de distribuidores. Ele não funciona como loja virtual e não conclui
          compras ou pagamentos.
        </p>
      </section>

      <section>
        <h2>2. Condições gerais de utilização</h2>
        <p>
          O visitante deve usar o site em conformidade com a legislação, a boa-fé
          e estes Termos. Não é permitido tentar comprometer a segurança,
          interferir no funcionamento, acessar áreas não autorizadas, introduzir
          código malicioso ou usar o conteúdo para finalidade ilícita ou que
          viole direitos de terceiros.
        </p>
      </section>

      <section>
        <h2>3. Propriedade intelectual</h2>
        <p>
          Marcas, nomes, logotipos, fotografias, imagens de produtos, textos,
          composição visual e demais materiais exibidos são protegidos pela
          legislação aplicável e pertencem a seus respectivos titulares. O
          acesso ao site não transfere licença, titularidade ou autorização para
          reprodução comercial.
        </p>
        <p>
          É permitida a visualização para fins pessoais e informativos. Qualquer
          reprodução, adaptação, distribuição, exploração comercial ou uso que
          ultrapasse as limitações legais exige autorização prévia do titular
          correspondente.
        </p>
      </section>

      <section>
        <h2>4. Informações sobre produtos</h2>
        <p>
          As descrições de fragrâncias, famílias olfativas, apresentações e
          demais características têm finalidade informativa. Embalagens,
          disponibilidade e especificações podem ser atualizadas. Antes do uso,
          devem prevalecer as informações e orientações constantes no produto e
          em seus materiais oficiais.
        </p>
        <p>
          O conteúdo do site não substitui orientação veterinária ou profissional
          individualizada. Em caso de sensibilidade, reação ou dúvida sobre o uso
          em um animal específico, procure orientação qualificada.
        </p>
      </section>

      <section>
        <h2>5. Distribuidores e disponibilidade</h2>
        <p>
          A página “Onde Encontrar” facilita a localização de distribuidores e
          apresenta os contatos disponíveis na base da marca. Cobertura,
          estoque, condições comerciais, atendimento e disponibilidade devem ser
          confirmados diretamente com o distribuidor. A apresentação de um
          contato não garante disponibilidade imediata de todos os produtos.
        </p>
      </section>

      <section>
        <h2>6. Links e serviços externos</h2>
        <p>
          O site contém links para WhatsApp, Instagram, serviços de e-mail,
          distribuidores e outros domínios. Ao acessá-los, o visitante passa a
          utilizar um ambiente administrado por terceiro, sujeito a seus próprios
          termos, políticas e práticas. A Vanity Pet não controla a continuidade
          ou o conteúdo desses serviços externos.
        </p>
      </section>

      <section>
        <h2>7. Disponibilidade e atualização do site</h2>
        <p>
          São realizados esforços razoáveis para manter o conteúdo correto e o
          site disponível, mas podem ocorrer indisponibilidades, manutenção,
          falhas de conexão ou informações desatualizadas. Correções e melhorias
          podem ser feitas sem aviso prévio, preservados os direitos legalmente
          assegurados aos consumidores e usuários.
        </p>
      </section>

      <section>
        <h2>8. Responsabilidades</h2>
        <p>
          O visitante é responsável pelas informações que decide inserir no
          formulário e pelo uso dos canais externos. A Vanity Pet não responde
          por falhas exclusivamente atribuíveis ao dispositivo ou à conexão do
          usuário, a serviços de terceiros ou a uso contrário a estes Termos.
        </p>
        <p>
          Nenhuma disposição destes Termos exclui responsabilidades que não
          possam ser afastadas pela legislação brasileira, nem limita direitos
          previstos no Código de Defesa do Consumidor quando aplicável.
        </p>
      </section>

      <section>
        <h2>9. Privacidade e cookies</h2>
        <p>
          O tratamento de dados pessoais e o armazenamento de preferências são
          explicados na <Link to="/politica-de-privacidade">Política de Privacidade</Link> e
          na <Link to="/politica-de-cookies">Política de Cookies</Link>, que integram
          estes Termos para fins de transparência.
        </p>
      </section>

      <section>
        <h2>10. Alterações, legislação e contato</h2>
        <p>
          Estes Termos podem ser atualizados para acompanhar mudanças no site ou
          na legislação. A versão vigente será identificada pela data exibida no
          início da página. Aplicam-se as leis da República Federativa do Brasil,
          respeitadas as regras legais de competência e os direitos do
          consumidor.
        </p>
        <p>
          Dúvidas sobre estes Termos podem ser enviadas para
          <a href={contactInfo.emailUrl}> {contactInfo.email}</a>. Correspondências
          podem ser encaminhadas para {companyInfo.address}.
        </p>
      </section>
    </LegalPage>
  );
}

export default Terms;
