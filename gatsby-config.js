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
    author: '@kodemaan',
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
    navigation: [
      {
        title: `Contact`,
        slug: `/contact`
      },
      {
        title: `Projects`,
        slug: `/projects`
      }
    ]
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
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
