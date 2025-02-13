'use client'

import {IconClose, IconMenu} from "@/components/Icons/IconsMain";
import {useState} from "react";
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
    // {
    //     title: "Qo'shiqlar",
    //     path: "/musics",
    // },
]


const MenuModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"flex items-center"}>
            <button onClick={() => setIsOpen(true)}>
                <IconMenu/>
            </button>

            <div
                className={`${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-300 fixed inset-0 bg-black/30 z-30`}
                onClick={() => setIsOpen(false)}
            ></div>
            <div
                className={`${isOpen ? "left-0" : "-left-full"} transition-all duration-300 ease-out fixed z-30 w-[190px] top-0 bottom-0 bg-black`}>
                <div className={"flex items-center justify-between p-[10px] border-b border-white/30"}>
                    <span>Menu</span>
                    <button onClick={() => setIsOpen(false)}>
                        <IconClose/>
                    </button>
                </div>
                <ul className={"font-medium"}>
                    {nav_list.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.path}
                                onClick={() => {
                                    setIsOpen(false)
                                }}
                                className={"pl-[10px] py-[10px] block hover:bg-white/10 transition-all duration-300"}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MenuModal;