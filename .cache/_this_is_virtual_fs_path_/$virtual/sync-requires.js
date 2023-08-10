
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Mariotte/Documents/blog-site-made-with-gatsby/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Mariotte/Documents/blog-site-made-with-gatsby/src/pages/404.js")),
  "component---src-pages-about-jsx": preferDefault(require("/Users/Mariotte/Documents/blog-site-made-with-gatsby/src/pages/about.jsx")),
  "component---src-pages-index-js": preferDefault(require("/Users/Mariotte/Documents/blog-site-made-with-gatsby/src/pages/index.js"))
}

