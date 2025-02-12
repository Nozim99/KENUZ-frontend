import {Metadata} from "next";
import axios from "axios";
import {BASE_URL, PUBLIC_URL} from "@/utils/constants";
import {IMovieData} from "@/types/movie";

type LayoutProps = {
    params: Promise<{
        movie_id: string;
    }>;
    children: React.ReactNode;
}


export async function generateMetadata({params}: LayoutProps): Promise<Metadata | undefined> {
    try {
        const {movie_id} = await params;

        const res_data = await axios.get(BASE_URL + '/movie/by_title/' + movie_id);
        const movie_data: IMovieData = res_data.data.movie;
        const title = (movie_data.title || 'Animelar').slice(0, 60);
        const description = (movie_data.description || '').slice(0, 160);
        const keywords = (movie_data.keywords || []).join(', ');


        return {
            title: title,
            description: description,
            keywords: keywords,
            openGraph: {
                title: title,
                description: description,
                images: movie_data.image?.url ? [movie_data.image?.url] : '',
            },
            alternates: {
                canonical: PUBLIC_URL
            }
        }
    } catch (error) {
        console.log(error);
    }
}


export default async function Layout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {

    return children
}