export async function submitContact(payload) {
  // Ponto único de integração futura com Formspree, serviço de e-mail ou API.
  // O payload é mantido para que a assinatura da função já esteja pronta.
  await Promise.resolve(payload);
  return {
    ok: true,
    message:
      "Formulário validado com sucesso. O envio será ativado quando o canal oficial for definido."
  };
}
