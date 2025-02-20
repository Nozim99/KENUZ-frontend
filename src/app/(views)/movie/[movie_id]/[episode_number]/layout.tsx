import {Metadata} from "next";
import axios from "axios";
import {BASE_URL, PUBLIC_URL} from "@/utils/constants";
import {IEpisode} from "@/types/episode";
import {notFound} from "next/navigation";

type LayoutProps = {
    params: Promise<{
        movie_id: string,
        episode_number: string,
    }>
    children: React.ReactNode;
}


export async function generateMetadata({params}: LayoutProps): Promise<Metadata> {
    const {movie_id, episode_number} = await params;

    let episode_data: IEpisode;

    try {
        const res_data = await axios.get(`${BASE_URL}/episode/${movie_id}/${episode_number}?inc_views=true}`);

        episode_data = res_data.data.data
    } catch (error) {
        console.log(error)
        notFound()
    }

    const keywords = [...(episode_data.episode.keywords || []), ...(episode_data.series.keywords || [])].slice(0, 10).join(', ');
    const episode_title = (episode_data.episode.title || `${episode_data.series.title} ${episode_number}-qism` || 'Animelar').slice(0, 60) + " 🎬 Tomosha qiling";
    const description = (episode_data.episode.title || `${episode_data.series.title} ${episode_number}-qism` || 'Animelar') + " videoni tomosha qiling🎬 " + (episode_data.episode.description
        ? episode_data.episode.description + '\n' + episode_data.series.description
        : episode_data.series.description).slice(0, 160)


    return {
        title: episode_title,
        description: description || '',
        keywords,
        openGraph: {
            title: episode_title,
            description: description,
            url: PUBLIC_URL + '/movie/' + encodeURI(movie_id) + '/' + episode_number,
            siteName: "KENUZ",
            images: [
                {
                    url: episode_data.series?.image?.url,
                    width: 222,
                    height: 300,
                    alt: episode_title + ' image'
                }
            ],
            type: "website"
        },
        twitter: {
            card: "summary",
            title: episode_title,
            description: description,
            images: [episode_data.series?.image?.url],
            creator: "KENUZ"
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