import { COURSES } from "@/content/courses";
import { ROADMAPS } from "@/content/roadmaps";

const BASE_URL = "https://academy.kwas.tech";

export async function GET() {
  const allItems = [
    ...COURSES.map((course) => ({
      title: `${course.title} — Complete Curriculum & Documentation`,
      link: `${BASE_URL}/learn/${course.slug}`,
      description: course.description,
      pubDate: new Date("2026-01-01").toUTCString(),
      category: course.category,
    })),
    ...ROADMAPS.map((roadmap) => ({
      title: `${roadmap.title} — Career Roadmap & Skill Tree`,
      link: `${BASE_URL}/roadmaps/${roadmap.slug}`,
      description: roadmap.description,
      pubDate: new Date("2026-01-15").toUTCString(),
      category: "Career Roadmap",
    })),
  ];

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>KWAS Academy — Free Programming Courses &amp; Technology Docs</title>
    <link>${BASE_URL}</link>
    <description>Learn. Build. Master. Comprehensive documentation-first technology education by KWAS Technologies.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <managingEditor>support@kwas.tech (KWAS Academy Editorial)</managingEditor>
    <webMaster>support@kwas.tech (KWAS Technologies Engineering)</webMaster>
    ${allItems
      .map(
        (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid>${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <category>${item.category}</category>
      <pubDate>${item.pubDate}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
