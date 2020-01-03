require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Steven Smith - Senior Software Engineer`,
    siteTitleAlt: `Steven Smith - Senior Software Engineer`,
    siteHeadline: `Steven Smith - Senior Software Engineer`,
    siteUrl: 'https://kodemaan.github.io',
    siteDescription: 'Personal website for Steven Smith',
    siteLanguage: 'en',
    siteImage: '/banner.jpg',
    author: '@kodemaan'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
