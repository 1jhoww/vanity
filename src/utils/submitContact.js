import { contactInfo } from "../config/site.js";

export function buildWhatsAppMessage(payload) {
  const lines = [
    "Olá, equipe Vanity Pet!",
    "",
    `Meu nome é ${payload.name.trim()}.`
  ];

  if (payload.company.trim()) {
    lines.push(`Empresa/estabelecimento: ${payload.company.trim()}`);
  }

  lines.push(
    `Cidade/UF: ${payload.city.trim()} - ${payload.state.trim().toUpperCase()}`,
    `Telefone: ${payload.phone.trim()}`,
    `E-mail: ${payload.email.trim()}`,
    `Assunto: ${payload.subject}`,
    "",
    "Mensagem:",
    payload.message.trim()
  );

  return lines.join("\n");
}

export function submitContact(payload) {
  const message = buildWhatsAppMessage(payload);

  return {
    ok: true,
    url: `${contactInfo.whatsappUrl}?text=${encodeURIComponent(message)}`,
    message:
      "O WhatsApp foi aberto com sua mensagem pronta. Seus dados permanecem preenchidos nesta página."
  };
}
