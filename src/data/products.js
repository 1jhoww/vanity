const tones = ["plum", "pearl", "rose", "smoke", "champagne"];

function officialImage(slug, volume) {
  const stem = volume.replace(/\s+/g, "").toLowerCase();
  const base = `/products/fragrances/${slug}/${stem}`;

  return {
    volume,
    image: `${base}.webp`,
    srcSet: `${base}.webp 720w, ${base}@2x.webp 1024w`,
    width: 1024,
    height: 1536
  };
}

function pendingImage(volume) {
  return { volume, image: "", srcSet: "", width: 1024, height: 1536 };
}

function fragrance({ id, name, slug = id, sizes, featured = false, visualTone }) {
  const availableSizes = sizes.filter((size) => size.image);
  const volumes = sizes.map((size) => size.volume).join(" e ");

  return {
    id,
    name,
    slug,
    images: {
      primary: availableSizes[0]?.image ?? "",
      gallery: availableSizes.map((size) => size.image)
    },
    shortDescription: `Disponível nas apresentações de ${volumes}.`,
    description: "Descrição da fragrância em atualização.",
    concept: "",
    family: "",
    profile: [],
    sensation: "",
    usage: "",
    olfactoryNotes: { top: [], heart: [], base: [] },
    sizes,
    collection: "",
    launchDate: "",
    featured,
    isNew: false,
    available: true,
    visualTone
  };
}

const photographedFragrances = [
  ["baby", "Baby"],
  ["black-cherry", "Black Cherry"],
  ["black-vanity", "Black Vanity"],
  ["brown", "Brown"],
  ["choc", "Choc"],
  ["citric", "Citric"],
  ["explosion", "Explosion"],
  ["flowers", "Flowers"],
  ["glamour", "Glamour"],
  ["gold", "Gold"],
  ["illusion", "Illusion"],
  ["jasmin", "Jasmin"],
  ["mango", "Mango"],
  ["night", "Night"],
  ["strawberry", "Strawberry"],
  ["style-g", "Style-G"]
].map(([id, name], index) =>
  fragrance({
    id,
    name,
    sizes: [officialImage(id, "50 ml"), officialImage(id, "500 ml")],
    featured: ["black-vanity", "glamour", "mango", "style-g"].includes(id),
    visualTone: tones[index % tones.length]
  })
);

export const fragrances = [
  ...photographedFragrances,
  fragrance({
    id: "sweet",
    name: "Sweet",
    sizes: [pendingImage("50 ml"), officialImage("sweet", "500 ml")],
    featured: true,
    visualTone: "rose"
  }),
  fragrance({
    id: "fragrancia-18",
    name: "Fragrância em atualização 01",
    slug: "fragrancia-18",
    sizes: [pendingImage("50 ml"), pendingImage("500 ml")],
    visualTone: "smoke"
  }),
  fragrance({
    id: "fragrancia-19",
    name: "Fragrância em atualização 02",
    slug: "fragrancia-19",
    sizes: [pendingImage("50 ml"), pendingImage("500 ml")],
    visualTone: "pearl"
  })
];

export function createPlaceholderFragrances(count = 19) {
  return fragrances.slice(0, count);
}
