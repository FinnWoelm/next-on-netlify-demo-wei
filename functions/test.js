const getResponse = myxml => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'text/xml',
  },
  body: myxml,
});

exports.handler = function(event, context, callback) {
  const response = getResponse(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>http://www.example.com/</loc>
        <lastmod>2005-01-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
  </urlset>`)
  callback(null, response)
}
