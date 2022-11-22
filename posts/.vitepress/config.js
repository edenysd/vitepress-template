export default {
  lang: "en-US",
  lastUpdated: true,
  title: "ContDiff",
  titleTemplate: "Upgrading networks to next level",
  description: "Official Page for Continuously Differentiable",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.svg",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Continuously Differentiable",
    sidebar: [
      {
        text: "Main Section",
        items: [{ text: "Get Started", link: "/main-section/get-started" }],
      },
      {
        text: "Blog",
        collapsible: true,
        items: [
          { text: "Post 1", link: "/posts/post1" },
          { text: "Post 2", link: "/posts/post2" },
        ],
      },
    ],
    outline: [2, 3],
    outlineTitle: "Probandooo",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Edenys Deniz González",
    },
  },
  markdown: {
    theme: "material-palenight",
  },
};
