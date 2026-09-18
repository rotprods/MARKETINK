export const brand = {
  name: "MARKET.INK",
  displayName: "MARKET.INK",
  claim: "Agenda llena. Marca con tinta.",
  category: "Tattoo Growth OS",
  colors: {
    red: "#DE2727",
    black: "#000000",
    paper: "#FBF8EF",
    olive: "#2B3210",
    neutral: "#E5E2D9",
    white: "#FFFFFF",
  },
  typography: {
    display: '"TAN Tangkiwood", Georgia, "Times New Roman", serif',
    body: '"Garet", Arial, Helvetica, sans-serif',
    utility: 'Arial, Helvetica, sans-serif',
  },
  values: ["Honestidad", "Precisión", "Libertad"] as const,
  motifs: ["signal-arrow", "rose", "needle", "ink-drop", "spark"] as const,
} as const;

export type BrandColor = keyof typeof brand.colors;
