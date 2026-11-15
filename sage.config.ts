import { defineSageConfig } from "astro-sage";

export default defineSageConfig({
  site: {
    url: "https://ananymishradev.github.io/",
    title: "AstroSage",
    description:
      "A readability-first Astro blog theme: serif type, warm paper, and a pinned table of contents.",
    author: "Anany Mishra",
    profile: "https://github.com/ananymishradev",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Kolkata",
    dir: "ltr",
  },
  home: {
    title: "AstroSage",
    intro:
      "A quiet, warm theme for long-form technical writing. Serif type set for reading, math and code that look like they belong, and a table of contents that keeps its place.",
  },
  // Comments are off until the utterances app is installed on this repo.
  posts: { perPage: 8, perIndex: 6, scheduledPostMargin: 15 * 60 * 1000 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: false,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/ananymishradev" },
    { name: "linkedin", url: "https://www.linkedin.com/in/ananymishra" },
  ],
});
