import MenuModal from "@/app/components/MenuModal";
import Link from "next/link";


const nav_list = [
    {
        title: "Bosh sahifa",
        path: "/",
    },
    {
        title: "Anime",
        path: "/movies/anime/1",
    },
    {
        title: "Filmlar",
        path: "/movies/film/1",
    },
    {
        title: "Multfilmlar",
        path: "/movies/cartoon/1",
    },
]


const Navbar = () => {
    return (
        <div
            className={"mContainer flex items-center justify-between py-[10px] mb-[10px] lg:mb-[20px] sm:py-[18px] lg:pt-[25px]"}>
            <div className={"flex items-center gap-[12px] lg:gap-[20px]"}>
                <MenuModal/>
                <Link href={'/'}
                      className={"h-[34px] flex items-center justify-center font-semibold text-xl sm:text-2xl lg:text-3xl tracking-widest"}>
                    KENUZ
                </Link>
            </div>
            <div className={"hidden lg:flex items-center gap-[30px] text-xl"}>
                {
                    nav_list.map((item, index) => (
                        <Link href={item.path} key={index}>{item.title}</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar;