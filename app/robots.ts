import type { MetadataRoute } from "next";
import { siteUrl } from "@/constant/main";

const AI_AND_SCRAPER_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "CCBot",
  "Google-Extended",
  "PerplexityBot",
  "Bytespider",
  "Amazonbot",
  "Applebot-Extended",
  "meta-externalagent",
  "FacebookBot",
  "Diffbot",
  "ImagesiftBot",
  "Omgilibot",
  "cohere-ai",
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
  "PetalBot",
  "DataForSeoBot",
  "BLEXBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: AI_AND_SCRAPER_BOTS,
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard", "/account", "/search", "/maintenance"],
        crawlDelay: 10,
      },
    ],
    sitemap: [
      `${siteUrl}/sitemaps/pages/sitemap.xml`,
      `${siteUrl}/sitemaps/movies/sitemap.xml`,
      `${siteUrl}/sitemaps/tv/sitemap.xml`,
      `${siteUrl}/sitemaps/actors/sitemap.xml`,
    ],
  };
}
