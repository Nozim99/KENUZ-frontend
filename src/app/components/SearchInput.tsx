'use client';

import {IconLoading, IconSearch} from "@/components/Icons/IconsMain";
import Link from "next/link";
import Image from "next/image";
import {ChangeEvent, useRef, useState} from "react";
import useDebounce from "@/hooks/useDebounce";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";
import {IMovieData} from "@/types/movie";

export default function SearchInput() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState<IMovieData[]>([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);


    const debounceHandler = useDebounce((value: string) => {
        if (!value) {
            setData([])
            setLoading(false)
            return;
        }

        axios.get(BASE_URL + "/movie/search?search=" + value)
            .then(res => {
                setData(res.data.movies || [])
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => setLoading(false));
    }, 1000);

    const openInputModal = () => {
        setOpen(true);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setLoading(true)
        debounceHandler(value);
    }

    const handleClose = () => {
        setOpen(false);
        setData([]);
        setInputValue('');
    }


    return (
        <>
            <div className={"relative flex items-center"}>
                <button onClick={openInputModal} className={""}>
                    <IconSearch className={""}/>
                </button>
            </div>
            <div
                onClick={handleClose}
                className={`${open ? "" : "opacity-0 pointer-events-none"} transition-opacity ease-out duration-300 fixed inset-0 bg-black/40 z-30`}></div>
            <div
                className={`${open ? "" : "opacity-0 pointer-events-none"} transition-opacity ease-out absolute left-1/2 -translate-x-1/2 top-[60px] z-30 w-[80%] min-[400px]:w-[370px] sm:w-[500px] sm:top-[70px] lg:top-[105px] lg:w-[600px]`}>
                <div className={"relative"}>
                    <input
                        ref={inputRef}
                        value={inputValue}
                        onChange={inputHandler}
                        autoFocus
                        type="text"
                        placeholder={"Qidirish"}
                        className={`${data.length ? "" : "rounded-b-lg"} bg-[#252831] w-full pl-[16px] pr-[35px] py-[10px] outline-none rounded-t-lg sm:py-[15px] sm:pl-[20px] sm:pr-[40px]`}
                    />
                    {
                        loading ?
                            <div
                                className={"absolute top-1/2 -translate-y-1/2 right-[10px] pointer-events-none sm:right-[14px]"}>
                                <IconLoading className={"animate-spin"}/>
                            </div>
                            :
                            <div
                                className={"absolute top-1/2 -translate-y-1/2 right-[10px] stroke-neutral-600 pointer-events-none sm:right-[14px]"}>
                                <IconSearch/>
                            </div>
                    }
                </div>
                <div
                    className={`${data.length ? "border-t" : ""}  w-full top-full bg-[#252831] border-white/20 text-sm max-h-[242px] overflow-y-auto rounded-b-lg lg:max-h-[361px]`}>
                    {
                        data.map((item, index) => (
                            <Link
                                onClick={handleClose}
                                key={item._id}
                                href={"/movie/" + item.title}
                                className={`${index % 2 === 0 ? "bg-neutral-700/20" : ""} flex h-[60px] items-center px-[5px] gap-x-[8px]`}>
                                <span className={"w-[40px] h-[40px] bg-white/30 inline-block rounded overflow-hidden"}>
                                    <Image
                                        className={"object-center object-cover w-full h-full"}
                                        src={item.image.url}
                                        alt={item.title}
                                        width={60}
                                        height={60}
                                    />
                                </span>
                                <span className={"text-neutral-200 line-clamp-2 flex-1"}>
                                    {item.title}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}