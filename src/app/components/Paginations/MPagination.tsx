import {generate_pagination} from "@/utils/generate_pagination";
import Link from "next/link";

interface IProps {
    total_page: number;
    current_page: number;
    category: string;
}


export const MPagination = ({total_page, current_page, category}: IProps) => {
    const pagination_arr = generate_pagination(total_page, current_page);


    return (
        <div>
            <div className={"flex gap-[10px] justify-center"}>
                {
                    pagination_arr.map((item, index) => (
                        <Link
                            href={`/movies/${category}/${item === "..." ? current_page : item}`}
                            key={index}
                            className={`${item === current_page ? "border-blue-900 " : "border-white/10"} border rounded py-[2px] px-[10px] hover:bg-neutral-500/10 transition-colors`}
                        >
                            {item}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}