import {NextResponse} from "next/server";
import {generateSitemap} from "@/utils/generate_sitemap";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";

export async function GET() {
    const res_data = await axios.get(BASE_URL + '/sitemap')
    const links: string[] = res_data.data?.data || [];


    const sitemap = generateSitemap(links)

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}