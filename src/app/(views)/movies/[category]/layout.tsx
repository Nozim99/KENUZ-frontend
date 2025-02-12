import {Metadata} from "next";
import {PUBLIC_URL} from "@/utils/constants";

type LayoutProps = {
    params: Promise<{
        category: string;
    }>;
    children: React.ReactNode;
}


export async function generateMetadata({params}: LayoutProps): Promise<Metadata> {
    const {category} = await params;
    const title = category === 'anime'
        ? 'Animelar'
        : category === 'cartoon'
            ? 'Multfilmlar'
            : 'Filmlar'

    return {
        title: title || 'Filmlar',
        description: `${title} ro'yhati jamlanmasi. Bu yerdan o'zingizga yoqqanini tanlab ko'rishingiz mumkin`,
        alternates: {
            canonical: PUBLIC_URL
        }
    }
}


export default async function Layout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {

    return children
}