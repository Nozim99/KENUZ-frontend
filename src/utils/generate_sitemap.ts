import {PUBLIC_URL} from "@/utils/constants";


export const generateSitemap = (links_list: string[]) => {
    return `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset
            xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:xhtml="http://www.w3.org/1999/xhtml"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        >
            ${
        links_list.map((link) => (
            `<url>
                    <loc>${PUBLIC_URL}/movie/${link}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>daily</changefreq>
                    <priority>0.8</priority>
                    </url>
                    `)).join("")}
        </urlset>`.trim()
}