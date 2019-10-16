module.exports = {
  siteMetadata: {
    title: `Keycodes`,
    description: `A developer resource for getting keyboard key codes. Key codes are numeric values that correspond to physical keys on the keyboard. With JavaScript, we can target these key codes and add events to them in our applications.`,
    author: `@justinjunodev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
