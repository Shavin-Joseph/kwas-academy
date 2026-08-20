import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "CCBot",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: [
      "https://academy.kwas.tech/sitemap.xml",
      "https://academy.kwas.tech/feed.xml",
    ],
    host: "https://academy.kwas.tech",
  };
}
