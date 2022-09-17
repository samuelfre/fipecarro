/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


// next.config.js
module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "authority", value: "veiculos.fipe.org.br"},
          { key: "accept", value: "application/json, text/javascript, */*; q=0.01"},
          { key: "accept-language", value: "pt-BR,pt;q=0.7"},
          { key: "content-type", value: "application/x-www-form-urlencoded; charset=UTF-8"},
          { key: "cookie", value: "ROUTEID=.5"},
          { key: "origin", value: "https://veiculos.fipe.org.br"},
          { key: "referer", value: "https://veiculos.fipe.org.br/"},
          { key: "sec-fetch-dest", value: "empty"},
          { key: "sec-fetch-mode", value: "cors"},
          { key: "sec-fetch-site", value: "same-origin"},
          { key: "sec-gpc", value: "1"},
          { key: "user-agent", value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"},
          { key: "x-requested-with", value: "XMLHttpRequest"},
          //-----------------Padrão
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};
