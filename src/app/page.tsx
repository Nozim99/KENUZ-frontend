import {MySwiper} from "@/components/MySwiper";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";
import {IResData} from "@/app/(views)/movies/[category]/[page]/page";
import {notFound} from "next/navigation";


interface ISwiperData {
    anime: {
        image: string;
        title: string;
        path: string;
    }[];
    film: {
        image: string;
        title: string;
        path: string;
    }[];
    cartoon: {
        image: string;
        title: string;
        path: string;
    }[];
}


export default async function HomePage() {
    try {
        const anime_data = await axios.get(BASE_URL + '/movie' + `?category=anime`, {headers: {"Cache-Control": "no-cache"}});
        const film_data = await axios.get(BASE_URL + '/movie' + `?category=film`, {headers: {"Cache-Control": "no-cache"}});
        const cartoon_data = await axios.get(BASE_URL + '/movie' + `?category=cartoon`, {headers: {"Cache-Control": "no-cache"}});

        const movies: {
            anime: IResData;
            film: IResData;
            cartoon: IResData;
        } = {
            anime: anime_data.data?.data,
            film: film_data.data?.data,
            cartoon: cartoon_data.data?.data,
        }

        const swiper_data: ISwiperData = {
            anime: movies.anime.movies.map(item => ({
                image: item.image?.url,
                title: item.title,
                path: `/movie/${item.title}`
            })),
            film: movies.film.movies.map(item => ({
                image: item.image?.url,
                title: item.title,
                path: `/movie/${item.title}`
            })),
            cartoon: movies.cartoon.movies.map(item => ({
                image: item.image?.url,
                title: item.title,
                path: `/movie/${item.title}`
            })),
        }


        return (
            <div className={"mContainer"}>

                <div className={"flex flex-col gap-[20px]"}>
                    <MySwiper title={"Animelar"} data={swiper_data.anime}/>
                    <MySwiper title={"Filmlar"} data={swiper_data.film}/>
                    <MySwiper title={"Multfilmlar"} data={swiper_data.cartoon}/>
                </div>
            </div>
        );
    } catch (error) {
        console.log(error);
        notFound();
    }
}