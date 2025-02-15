'use client'

import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {SwiperCard} from "@/components/MySwiper/SwiperCard";
import {IconArrow} from "@/components/Icons/IconsMain";
import {useRef} from "react";


interface IProps {
    title: string;
    data: {
        image: string;
        title: string;
        path: string;
    }[]
}


export const MySwiper = ({title, data}: IProps) => {
    const swiperRef = useRef<SwiperRef | null>(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };


    return (
        <div className={""}>
            <h1 className={"text-xl font-medium sm:font-semibold sm:text-2xl lg:text-3xl mb-[2px] sm:mb-[6px] lg:mb-[10px] xl:mb-[14px] relative"}>
                {title}

                <div className={"absolute top-1/2 -translate-y-1/2 right-0 flex items-center gap-[10px] lg:hidden"}>
                    <button onClick={handlePrev}>
                        <IconArrow className={"rotate-180 sm:w-[25px] sm:h-auto lg:w-[30px]"}/>
                    </button>
                    <button onClick={handleNext}>
                        <IconArrow className={"sm:w-[25px] sm:h-auto lg:w-[30px]"}/>
                    </button>
                </div>
            </h1>
            <div className={"relative"}>
                <button
                    onClick={handlePrev}
                    className={"hidden lg:block absolute top-[128px] -left-[50px]"}
                >
                    <IconArrow className={"rotate-180 w-[45px] h-auto"}/>
                </button>
                <button
                    onClick={handleNext}
                    className={"hidden lg:block absolute top-[128px] -right-[50px]"}
                >
                    <IconArrow className={"w-[45px] h-auto"}/>
                </button>

                <Swiper
                    ref={swiperRef}
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
        </div>
    )
}