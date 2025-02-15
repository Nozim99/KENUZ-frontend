import {TButton} from "@/components/TButton";
import {GSelect} from "@/components/GSelect";
import {IMovieData} from "@/types/movie";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";
import {notFound} from "next/navigation";
import Image from "next/image";
import {capitalizeLetter} from "@/utils/capitalizeLetter";

interface IProps {
    params: Promise<{ movie_id: string }>
}


const Page = async ({params}: IProps) => {
    const params_data = await params;
    const movie_id = params_data.movie_id;


    let movie_data: IMovieData;
    let total_episodes: number | undefined;

    try {
        const res_data = await axios.get(BASE_URL + '/movie/by_title/' + movie_id);
        movie_data = res_data.data.movie;
        total_episodes = res_data.data.total_episodes;
    } catch (error) {
        console.error(error)
        notFound()
    }

    const age_number = movie_data.age_limit || 6
    const age_color = age_number > 17 ? "#dc2626" : age_number > 11 ? "#2563eb" : "#16a34b"


    return (
        <div className={"mContainer"}>
            <h1 className={"text-center text-xl font-medium mb-[10px] sm:text-2xl sm:font-semibold sm:mb-[20px] md:text-3xl lg:mb-[30px]"}>
                {movie_data.title}
            </h1>

            <div
                className={"flex flex-col gap-[20px] items-center sm:flex-row lg:w-[900px] lg:mx-auto lg:items-start"}>
                <div className={"relative"}>
                    <div className="absolute inset-0 animate-pulse bg-yellow-900/30"></div>
                    <Image
                        className={"relative w-full h-[350px] min-[420px]:w-[360px] sm:h-[400px] bg-black/30 rounded-lg border border-[#f29824] object-center object-cover"}
                        src={movie_data.image.url}
                        width={360}
                        height={400}
                        alt={movie_data.title}
                    />
                </div>

                <div className={"w-full min-[420px]:w-[400px] sm:w-full sm:flex-1 lg:text-lg"}>
                    <h2 className={"text-xl mb-[14px]"}>Ma&apos;lumotlar</h2>
                    <ul className={"anime_ul"}>
                        {
                            !!movie_data.country &&
                            <li>
                                <span>Mamlakat</span>
                                <span>{movie_data.country}</span>
                            </li>
                        }
                        {
                            !!movie_data.language &&
                            <li>
                                <span>Til</span>
                                <span>{movie_data.language}</span>
                            </li>
                        }
                        {
                            !!movie_data.year &&
                            <li>
                                <span>Yil</span>
                                <span>{movie_data.year}</span>
                            </li>
                        }
                        {
                            !!movie_data.genre?.length &&
                            <li>
                                <span>Janr</span>
                                <span
                                    className={""}>{movie_data.genre.map(item => capitalizeLetter(item)).join(', ')}</span>
                            </li>
                        }
                        {
                            typeof movie_data.age_limit === 'number' && movie_data.age_limit >= 0 &&
                            <li>
                                <span>Yosh chegarasi</span>
                                <span style={{borderColor: age_color}}
                                      className={"border-[2px] px-[5px] rounded"}>{movie_data.age_limit || 6}+</span>
                            </li>
                        }
                        {
                            !!movie_data.views &&
                            <li>
                                <span>Ko'rildi</span>
                                <span className={"text-end"}>{movie_data.views.toLocaleString('ru')}</span>
                            </li>
                        }
                    </ul>
                </div>
            </div>

            {
                movie_data.video_url &&
                <TButton
                    tg_link={movie_data.video_url}
                    classes={"my-[30px] lg:my-[40px] xl:my-[50px]"}
                />
            }

            {
                !!total_episodes &&
                <GSelect
                    classes={"my-[30px] lg:my-[40px] xl:my-[50px]"}
                    link={`/movie/${movie_id}/`}
                    amount={total_episodes}
                />
            }

            <div className={"grid gap-[4px] text-sm lg:text-base xl:text-lg"}>
                {
                    movie_data.description.split('\n').map((item, i) => (
                        <p key={i}>
                            {item}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default Page;