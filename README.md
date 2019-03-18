# Protest Guide &middot; ![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)

This repository contains all user-facing code used to render the [https://protestguide.org.za](https://protestguide.org.za).

## Getting Started

### Local development

1. Clone this project by running `git clone https://github.com/OpenUpSA/protest-guide.git`.
2. Make sure you have the latest [NodeJS](https://nodejs.org/en/) installed.
3. Run `npm install` in the root folder of the repository.
4. Run `npm start` to spin up the development server.*
5. Open `localhost:8000` in your browser.

## Stack

Built with [Gatsby](https://www.gatsbyjs.org/) and [Material UI](https://material-ui.com/)

**[Core Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default/blob/master/package.json) is extended in the following manner**:
- [gatsby-plugin-manifest](https://www.npmjs.com/package/gatsby-plugin-manifest)
- [gatsby-plugin-offline](https://www.npmjs.com/package/gatsby-plugin-offline)
- [gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet)
- [gatsby-plugin-google-fonts](https://www.npmjs.com/package/gatsby-plugin-google-fonts)
- [gatsby-plugin-google-fonts](https://www.npmjs.com/package/gatsby-plugin-google-fonts)


**Core [Material UI](https://material-ui.com/) is extended in the following manner**:
- Integrated with Gatsby as per [Material UI official Gatsby example](https://github.com/mui-org/material-ui/tree/master/examples/gatsby)
