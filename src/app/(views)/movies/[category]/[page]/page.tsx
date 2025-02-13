import axios from "axios";
import {BASE_URL} from "@/utils/constants";
import {notFound} from "next/navigation";
import {IMovieData} from "@/types/movie";
import {MPagination} from "@/app/components/Paginations/MPagination";
import Card from "@/components/Card";

interface IProps {
    params: Promise<{
        category: string;
        page: string;
    }>
}

export interface IResData {
    movies: IMovieData[];
    pagination: {
        total: number;
        page: number;
        limit: number;
    }
}


const Page = async ({params}: IProps) => {
    const {category, page} = await params;
    try {
        const res_data = await axios.get(BASE_URL + '/movie' + `?category=${category}&page=${page}`);
        const movie_data: IResData = res_data.data?.data;
        const total_page = Math.ceil(movie_data?.pagination?.total / movie_data?.pagination?.limit) || 1;

        return (
            <div>
                <h1 className={"text-center mt-[20px] mb-[10px] font-semibold text-lg min-[400px]:text-2xl sm:mb-[20px] sm:text-3xl"}>
                    {
                        category === 'anime'
                            ? "Animelar"
                            : category === 'cartoon'
                                ? 'Multfilmlar'
                                : 'Filmlar'
                    }
                </h1>
                <div className={"menu_page mb-[30px] lg:mb-[50px]"}>
                    {
                        movie_data.movies.map((movie) => (
                            <Card
                                key={movie._id}
                                image={movie.image.url}
                                path={`/movie/` + movie.title}
                                title={movie.title}
                            />
                        ))
                    }
                </div>

                <MPagination
                    total_page={total_page}
                    category={category}
                    current_page={+page}
                />
            </div>
        )
    } catch (error) {
        console.log(error)
        notFound()
    }
}

export default Page;