
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Mariotte/Documents/Blog-Site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Mariotte/Documents/Blog-Site/src/pages/404.js")),
  "component---src-pages-about-jsx": preferDefault(require("/Users/Mariotte/Documents/Blog-Site/src/pages/about.jsx")),
  "component---src-pages-index-js": preferDefault(require("/Users/Mariotte/Documents/Blog-Site/src/pages/index.js"))
}

