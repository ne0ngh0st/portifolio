/** Ordem dos slides — manter alinhado a `id` nas seções e ao `SlideRail` / Nav. */
export const PRESENTATION_SLIDES = [
  { slug: "top", label: "Início", step: "01" },
  { slug: "sobre", label: "Sobre", step: "02" },
  { slug: "autopel", label: "Autopel", step: "03" },
  { slug: "seguranca", label: "Segurança", step: "04" },
  { slug: "linux", label: "Linux", step: "05" },
  { slug: "stack", label: "Stack", step: "06" },
  { slug: "linkedin", label: "LinkedIn", step: "07" },
  { slug: "rodape", label: "Fim", step: "08" },
] as const;

export type PresentationSlideSlug = (typeof PRESENTATION_SLIDES)[number]["slug"];
