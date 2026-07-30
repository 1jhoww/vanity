export const fragranceFamilies = [
  { id: "all", label: "Todas" },
  { id: "floral", label: "Florais" },
  { id: "fruity", label: "Frutadas" },
  { id: "gourmand", label: "Doces / Gourmand" },
  { id: "fresh", label: "Frescas / Cítricas" },
  { id: "intense", label: "Intensas / Elegantes" }
];

const artworkDimensions = {
  baby: { width: 1536, height: 1024 },
  "black-cherry": { width: 1536, height: 1024 },
  "black-vanity": { width: 1536, height: 1024 }
};

const catalogArtworkFraming = {
  baby: { scale: 1.14, position: "center 49%" },
  "black-cherry": { scale: 1.12, position: "center 49%" },
  "black-vanity": { scale: 1.12, position: "center 49%" }
};

const presentations = [{ volume: "50 ml" }, { volume: "500 ml" }];

export function getInspirationText(fragrance) {
  return fragrance.inspirationType === "exclusive"
    ? `Exclusivo Vanity Pet — ${fragrance.inspiration}`
    : `Inspirado em ${fragrance.inspiration}`;
}

export function normalizeCatalogSearch(value = "") {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("pt-BR");
}

function fragrance({
  id,
  name,
  familyId,
  inspirationType,
  inspiration,
  shortDescription,
  aliases = []
}) {
  const family =
    fragranceFamilies.find((item) => item.id === familyId)?.label ?? "";
  const dimensions = artworkDimensions[id] ?? { width: 1254, height: 1254 };
  const framing = catalogArtworkFraming[id] ?? {
    scale: 1,
    position: "center"
  };
  const reference =
    inspirationType === "exclusive"
      ? `criação exclusiva Vanity Pet com referência em ${inspiration}`
      : `fragrância Vanity Pet inspirada em ${inspiration}`;

  return {
    id,
    name,
    slug: id,
    aliases,
    route: `/produtos/${id}`,
    familyId,
    family,
    inspirationType,
    inspiration,
    catalogArtwork: {
      src: `/images/catalogo/${id}.png`,
      ...dimensions,
      ...framing
    },
    images: {
      primary: `/images/catalogo/${id}.png`,
      gallery: [`/images/catalogo/${id}.png`]
    },
    shortDescription,
    description: shortDescription,
    concept: "",
    profile: [],
    sensation: "",
    usage: "",
    olfactoryNotes: { top: [], heart: [], base: [] },
    sizes: presentations.map((presentation) => ({ ...presentation })),
    seo: {
      title: name,
      description: `Conheça ${name}, ${reference}, disponível em 50 ml e 500 ml.`
    },
    available: true
  };
}

export const fragrances = [
  fragrance({
    id: "baby",
    name: "Baby",
    familyId: "floral",
    inspirationType: "inspired",
    inspiration: "Mamãe & Bebê — Natura",
    shortDescription:
      "Uma assinatura floral delicada e acolhedora, criada para uma finalização suave e elegante."
  }),
  fragrance({
    id: "flowers",
    name: "Flowers",
    familyId: "floral",
    inspirationType: "inspired",
    inspiration: "La Vie Est Belle — Lancôme",
    shortDescription:
      "Um floral expressivo e luminoso, com presença refinada e sensação de cuidado recém-finalizado."
  }),
  fragrance({
    id: "jasmin",
    name: "Jasmin",
    familyId: "floral",
    inspirationType: "inspired",
    inspiration: "Lily — O Boticário",
    shortDescription:
      "Uma leitura floral envolvente, de elegância serena e acabamento delicadamente perfumado."
  }),
  fragrance({
    id: "you",
    name: "You",
    familyId: "floral",
    inspirationType: "inspired",
    inspiration: "Lady Million — Paco Rabanne",
    aliases: ["fragrancia-18"],
    shortDescription:
      "Uma assinatura floral contemporânea, equilibrada e próxima, pensada para acompanhar diferentes estilos."
  }),
  fragrance({
    id: "black-cherry",
    name: "Black Cherry",
    familyId: "fruity",
    inspirationType: "exclusive",
    inspiration: "Pitanga",
    shortDescription:
      "Uma fragrância frutada de presença marcante, com caráter vibrante e acabamento sofisticado."
  }),
  fragrance({
    id: "mango",
    name: "Mango",
    familyId: "fruity",
    inspirationType: "exclusive",
    inspiration: "Manga",
    shortDescription:
      "Frutada e solar, traduz uma sensação luminosa, alegre e naturalmente envolvente."
  }),
  fragrance({
    id: "strawberry",
    name: "Strawberry",
    familyId: "fruity",
    inspirationType: "exclusive",
    inspiration: "Morango",
    shortDescription:
      "Uma assinatura frutada delicada e vibrante, com doçura equilibrada e personalidade."
  }),
  fragrance({
    id: "watermelon",
    name: "Watermelon",
    familyId: "fruity",
    inspirationType: "exclusive",
    inspiration: "Melancia",
    aliases: ["fragrancia-19"],
    shortDescription:
      "Frescor frutado e leveza definem uma fragrância descontraída, limpa e luminosa."
  }),
  fragrance({
    id: "brown",
    name: "Brown",
    familyId: "gourmand",
    inspirationType: "exclusive",
    inspiration: "Mascavo",
    shortDescription:
      "Uma composição gourmand acolhedora, de doçura elegante e presença confortável."
  }),
  fragrance({
    id: "choc",
    name: "Choc",
    familyId: "gourmand",
    inspirationType: "exclusive",
    inspiration: "Chocolate",
    shortDescription:
      "Um gourmand intenso e envolvente, pensado para uma finalização de personalidade marcante."
  }),
  fragrance({
    id: "illusion",
    name: "Illusion",
    familyId: "gourmand",
    inspirationType: "inspired",
    inspiration: "Fantasy — Britney Spears",
    shortDescription:
      "Doçura sofisticada e sensação cremosa se encontram em uma assinatura envolvente."
  }),
  fragrance({
    id: "sweet",
    name: "Sweet",
    familyId: "gourmand",
    inspirationType: "inspired",
    inspiration: "Angel — Thierry Mugler",
    shortDescription:
      "Uma fragrância gourmand delicada, de presença suave e acabamento irresistivelmente acolhedor."
  }),
  fragrance({
    id: "citric",
    name: "Citric",
    familyId: "fresh",
    inspirationType: "inspired",
    inspiration: "CK One — Calvin Klein",
    shortDescription:
      "Uma assinatura cítrica limpa e vibrante, com frescor imediato e sensação revigorante."
  }),
  fragrance({
    id: "explosion",
    name: "Explosion",
    familyId: "fresh",
    inspirationType: "inspired",
    inspiration: "Invictus — Paco Rabanne",
    shortDescription:
      "Frescor expansivo e energia luminosa para uma finalização leve, viva e contemporânea."
  }),
  fragrance({
    id: "black-vanity",
    name: "Black Vanity",
    familyId: "intense",
    inspirationType: "inspired",
    inspiration: "Bvlgari Black",
    shortDescription:
      "Uma fragrância intensa e elegante, com presença profunda e assinatura inesquecível."
  }),
  fragrance({
    id: "glamour",
    name: "Glamour",
    familyId: "intense",
    inspirationType: "inspired",
    inspiration: "Fahrenheit — Dior",
    shortDescription:
      "Sofisticação e personalidade em uma composição envolvente, criada para finais marcantes."
  }),
  fragrance({
    id: "gold",
    name: "Gold",
    familyId: "intense",
    inspirationType: "inspired",
    inspiration: "One Million — Paco Rabanne",
    shortDescription:
      "Uma assinatura elegante e luminosa, com presença refinada e acabamento premium."
  }),
  fragrance({
    id: "style-g",
    name: "Style-G",
    familyId: "intense",
    inspirationType: "inspired",
    inspiration: "Dolce & Gabbana — D&G",
    shortDescription:
      "Uma composição elegante e marcante, com assinatura refinada e presença contemporânea."
  }),
  fragrance({
    id: "night",
    name: "Night",
    familyId: "intense",
    inspirationType: "inspired",
    inspiration: "Malbec — O Boticário",
    shortDescription:
      "Uma composição intensa e misteriosa, com acabamento profundo e personalidade noturna."
  })
];
