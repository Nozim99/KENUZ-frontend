import {TButton} from "@/components/TButton";
import {GSelect} from "@/components/GSelect";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";
import {notFound} from "next/navigation";
import {IEpisode} from "@/types/episode";
import Image from "next/image";
import {capitalizeLetter} from "@/utils/capitalizeLetter";

interface IProps {
    params: Promise<{
        movie_id: string,
        episode_number: string,
    }>
}


const Page = async ({params}: IProps) => {
    const params_data = await params;
    const {movie_id, episode_number} = params_data;


    let episode_data: IEpisode;

    try {
        const res_data = await axios.get(`${BASE_URL}/episode/${movie_id}/${episode_number}`);

        episode_data = res_data.data.data
    } catch (error) {
        console.log(error)
        notFound()
    }

    const total_episodes = episode_data.total_episode;
    const episode_title = episode_data.episode.title || `${episode_data.series.title} ${episode_number}-qism`;
    const country = episode_data.series.country;
    const language = episode_data.series.language;
    const year = episode_data.series.year;
    const genre = episode_data.series.genre?.map(item => capitalizeLetter(item));
    const age_limit = episode_data.series.age_limit || 6;
    const video_url = episode_data.episode.video_url;
    const description = episode_data.episode.description
        ? episode_data.episode.description + '\n' + episode_data.series.description
        : episode_data.series.description

    const age_color = age_limit > 17 ? "#dc2626" : age_limit > 11 ? "#2563eb" : "#16a34b"


    return (
        <div className={"mContainer pb-[100px]"}>
            <h1 className={"text-center text-xl font-medium mb-[10px] sm:text-2xl sm:font-semibold sm:mb-[20px] md:text-3xl lg:mb-[30px]"}>
                {episode_title}
            </h1>

            <div
                className={"flex flex-col gap-[20px] items-center sm:flex-row lg:w-[900px] lg:mx-auto lg:items-start"}>
                <div className="relative">
                    <div className="absolute inset-0 animate-pulse bg-yellow-900/30"></div>
                    <Image
                        className={"w-full relative h-[350px] min-[420px]:w-[360px] sm:h-[400px] bg-black/30 rounded-lg border border-[#f29824] object-center object-cover"}
                        src={episode_data.series.image.url}
                        width={360}
                        height={420}
                        alt={episode_data.series.title}
                    />
                </div>

                <div className={"w-full min-[420px]:w-[400px] sm:w-full sm:flex-1 lg:text-lg"}>
                    <h2 className={"text-xl mb-[14px]"}>Ma&apos;lumotlar</h2>
                    <ul className={"anime_ul"}>
                        <li>
                            <span>Qismi</span>
                            <span>{episode_number}-qism</span>
                        </li>
                        {
                            !!country &&
                            <li>
                                <span>Mamlakat</span>
                                <span>{country}</span>
                            </li>
                        }
                        {
                            !!language &&
                            <li>
                                <span>Tili</span>
                                <span>{language}</span>
                            </li>
                        }
                        {
                            !!year &&
                            <li>
                                <span>Yili</span>
                                <span>{year}</span>
                            </li>
                        }
                        {
                            !!genre?.length &&
                            <li>
                                <span>Janr</span>
                                <span className={"text-end"}>{genre.join(', ')}</span>
                            </li>
                        }
                        {
                            typeof age_limit === 'number' && age_limit >= 0 &&
                            <li>
                                <span>Yosh chegarasi</span>
                                <span style={{borderColor: age_color}}
                                      className={"border-[2px] px-[5px] rounded"}>{age_limit || 6}+</span>
                            </li>
                        }
                    </ul>
                </div>
            </div>

            {
                video_url &&
                <TButton
                    tg_link={video_url}
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
                    description.split('\n').map((item, i) => (
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