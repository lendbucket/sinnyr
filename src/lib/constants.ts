export const SITE = {
  name: "Sinnyr",
  url: "https://sinnyrmodels.com",
  description:
    "Sinnyr is a selective creator management agency. We manage adult content creators as professional talent, growing audience, subscribers, and income through a defined system.",
  contact: {
    email: "hello@sinnyrmodels.com",
    leadEmail: "ceo@36west.org",
  },
  legal: {
    entity: "Sinnyr LLC", // Placeholder -- confirm before publishing
  },
} as const;

export const FEE = {
  percentage: 12,
  minimumMonthly: 99,
  label: "12% of earnings or $99/month, whichever is greater",
} as const;

export const NAV = [
  { label: "About", href: "/about" },
  { label: "The Sinnyr Method", href: "/method" },
  { label: "The Path", href: "/the-path" },
  { label: "What You Get", href: "/what-you-get" },
  { label: "Why Sinnyr", href: "/why-sinnyr" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
] as const;

export const COLORS = {
  cream: "#FAF4E8",
  creamAlt: "#F3EAD8",
  ink: "#15110D",
  red: "#ED2100",
  redHover: "#C71C00",
  muted: "#6E665C",
  hairline: "#E5DCCB",
} as const;
