'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {SwiperCard} from "@/components/MySwiper/SwiperCard";


interface IProps {
    title: string;
    data: {
        image: string;
        title: string;
        path: string;
    }[]
}


export const MySwiper = ({title, data}: IProps) => {
    return (
        <div className={"min-[400px]:w-[370px] min-[400px]:mx-auto sm:w-[500px] lg:w-[800px]"}>
            <h1 className={"title mb-[2px]"}>
                {title}
            </h1>
            <Swiper
                spaceBetween={8}
                slidesPerView={3.5}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SwiperCard {...item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}