import {NextResponse} from "next/server";
import {PUBLIC_URL} from "@/utils/constants";


const sitemaps_list = [
    'sitemap-first',
    'sitemap-main',
]


export async function GET() {

    const sitemap = `
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemaps_list.map((item) => (
        `<sitemap>
        <loc>${PUBLIC_URL}/api/${item}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>`
    )).join('')}
    </sitemapindex>
  `.trim();

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}