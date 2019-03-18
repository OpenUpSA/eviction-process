const purple = require('@material-ui/core/colors/purple');
const green = require('@material-ui/core/colors/green');


const manifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: 'Protest Guide',
    short_name: 'Protest Guide',
    start_url: '/',
    background_color: '#FF9015',
    theme_color: '#FF9015',
    display: 'standalone',
    icon: 'src/images/house-icon.png',
  },
};


const googleFonts = {
  resolve: `gatsby-plugin-google-fonts`,
  options: {
    fonts: [
      'oswald\:400,700',
      'archivo\:400,700',
      'archivo narrow'
    ]
  }
};


const materialUiConfig = {
  resolve: `@wapps/gatsby-plugin-material-ui`,
  options: {
    palette: {
      primary: {
        light: purple[300],
        main: purple[500],
        dark: purple[700],
      },
      secondary: {
        light: green[300],
        main: green[500],
        dark: green[700],
      },
    },
    typography: {
      useNextVariants: true,
    },
  },
}


module.exports = {
  plugins: [
    manifest,
    googleFonts,
    materialUiConfig,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
}
