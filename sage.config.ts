import { defineSageConfig } from "astro-sage";

export default defineSageConfig({
  site: {
    url: "https://ananymishradev.github.io/",
    title: "Anany",
    description:
      "A Golang developer currently working on systems engineering and distributed systems along with CUDA and RL Environments. I write about my learnings and experiences in the form of blogs.",
    author: "Anany",
    profile: "https://github.com/ananymishradev",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Kolkata",
    dir: "ltr",
  },
  home: {
    title: "Anany",
    intro:
      "For Love of The Game, I write about my experiences here.",
  },
  // Comments are off until the utterances app is installed on this repo.
  posts: { perPage: 8, perIndex: 6, scheduledPostMargin: 15 * 60 * 1000 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: false,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/ananymishradev" },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/ananymishradev",
    },
    { name: "twitter", url: "https://twitter.com/ananymishradev" },
    { name: "mail", url: "mailto:anany.mishra.dev@gmail.com" },
  ],
});
