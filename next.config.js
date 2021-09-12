/** @type {import('next').NextConfig} */
const path = require('path')
// const withSass = require('@zeit/next-sass');
module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
