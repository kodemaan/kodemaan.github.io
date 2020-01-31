require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Steven Smith - Senior Software Engineer`,
    siteTitleAlt: `Steven Smith - Senior Software Engineer`,
    siteHeadline: `Steven Smith - Senior Software Engineer`,
    siteUrl: 'https://kodemaan-personal-site.netlify.com',
    siteDescription: 'Personal website for Steven Smith',
    siteLanguage: 'en',
    author: '@kodemaan'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Contact`,
            slug: `/contact`
          },
          {
            title: `Projects`,
            slug: `/projects`
          },
          {
            title: `Resume`,
            slug: `/resume`
          }
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://www.twitter.com/kodemaan`
          },
          {
            name: `Github`,
            url: `https://www.github.com/kodemaan`
          },
          {
            name: `Linkedin`,
            url: `https://linkedin.com/in/steven-smith-b4b5a41b`
          }
        ],
      },
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
