module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {
        ___level_1_1: [1, '2'], // This is fine
        ___level_1_2: [1, { value: '2' }], // This is fine
        ___level_1_3: {
          level_2_1: [1, 2], // This is fine
          level_2_2: ['1', '2'], // This is fine
          level_2_3: [{ value_a: 1 }, { value_b: '2' }], // This is fine
        },
        ___level_1_4: {
          level_2_1: [1, '2'], // This throws
          // level_2_2: [1, { value: '2' }], // This throws
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
