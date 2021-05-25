const assert = require('assert');
const colors = require('./src/colors.json');
// import icon from '../components/Logo/icon.png'

module.exports = ({
  accessToken,
  spaceId,
  deterministic = false,
  landingPath = '/'
}) => {
  assert(accessToken, 'Contentful Access Token not provided');
  assert(spaceId, 'Contentful Space ID not provided');

  return {
    siteMetadata: {
      deterministic
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-typescript',
      'gatsby-plugin-styled-components',
      'gatsby-transformer-remark',
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: 'Jesse Krim Portfolio',
          short_name: 'Jesse Krim',
          start_url: landingPath,
          background_color: colors.background,
          theme_color: colors.primary,
          display: 'minimal-ui',
          icon: 'icon.png'
        }
      },
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId,
          accessToken
        }
      }
    ]
  };
};
