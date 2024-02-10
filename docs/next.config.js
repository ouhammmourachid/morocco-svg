const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  // output: 'export'
})


// const nextConfig = {
//   output: 'export'
// }

// module.exports = nextConfig
module.exports = withNextra()
