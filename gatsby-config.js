module.exports = {
  siteMetadata: {
    name: "Abdelmounaim portfolio",
    description: "une présentation professionnelle de abdelmounaim bougaze",
    keywords: ["tech", "blog", "frontend developer", "data scientist", "frontend dev", "amorpheuz", "Abdelmounaim bougaze", "react dev", "javascript dev"],
    siteUrl: "https://abdelmounaim-bgz.github.io",
    siteImage: "images/logo.png",
    profileImage: `images/logo.png`,
    lang: `fr`,
    config: {
      sidebarWidth: 300
    },
    

  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts", "projects"]
      }
    },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://amorpheuz.github.io`,
    //   },
    // }
  ]
};
