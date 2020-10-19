const NextI18Next = require('next-i18next').default;

const nextConfig = require('next/config').default();

const path = require('path');

module.exports = new NextI18Next({
  otherLanguages: ['es'],
  localeSubpaths: nextConfig?.publicRuntimeConfig?.localeSubpaths,
  localePath: path.resolve('./public/static/locales')
});
