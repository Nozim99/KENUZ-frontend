import Link from "next/link";
import {IconTelegram} from "@/components/Icons/IconsMain";

export const TButton = ({tg_link, classes}: { tg_link: string; classes?: string }) => {
    return (
        <Link
            target={"_blank"}
            href={tg_link}
            className={`${classes} bg-[#1C93E3] text-white font-bold flex items-center justify-center gap-[10px] rounded-full w-[90%] py-[6px] mx-auto min-[420px]:w-[300px] lg:text-xl sm:text-lg`}
        >
            <span>Tomosha qilish</span>
            <IconTelegram className={"w-[36px] h-auto sm:w-[40px]"}/>
        </Link>
    )
}