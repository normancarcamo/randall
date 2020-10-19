const withImages = require('next-images');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  en: 'en',
  es: 'es'
};

module.exports = withImages({
  inlineImageLimit: 1024,
  poweredByHeader: false,
  api: {
    bodyParser: process.env.NODE_ENV !== 'production'
  },
  webpack: (config) => config,
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  }
});
