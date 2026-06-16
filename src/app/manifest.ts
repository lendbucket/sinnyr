import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sinnyr",
    short_name: "Sinnyr",
    description:
      "Selective creator management agency. Apply to be represented.",
    start_url: "/",
    display: "browser",
    theme_color: "#ED2100",
    background_color: "#FAF4E8",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
