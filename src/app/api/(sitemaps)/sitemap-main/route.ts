import {NextResponse} from "next/server";
import {PUBLIC_URL} from "@/utils/constants";


interface ILinks {
    url: string;
    priority: string;
}


const myGenerateSitemap = (links_list: ILinks[]) => {
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
                    <loc>${PUBLIC_URL}${link.url}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>daily</changefreq>
                    <priority>${link.priority || '0.8'}</priority>
                    </url>
                    `)).join("")}
        </urlset>`.trim()
}


const links: ILinks[] = [
    {
        url: '',
        priority: '1.0',
    },
    {
        url: '/movies/anime/1',
        priority: '0.9',
    },
    {
        url: '/movies/film/1',
        priority: '0.9',
    },
    {
        url: '/movies/cartoon/1',
        priority: '0.9',
    },
]


export async function GET() {


    const sitemap = myGenerateSitemap(links)

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}