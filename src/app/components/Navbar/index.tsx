import MenuModal from "@/app/components/MenuModal";
import Link from "next/link";
import SearchInput from "@/app/components/SearchInput";


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
            className={"shadow-sm shadow-white/20 py-[10px] sm:py-[14px] lg:py-[30px] mb-[20px] sm:mb-[25px] lg:mb-[35px] relative"}>
            <div
                className={"mContainer flex items-center justify-between"}>
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
                    <div className={"hidden lg:block"}>
                        <SearchInput/>
                    </div>
                </div>
                <div className={"block lg:hidden"}>
                    <SearchInput/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;