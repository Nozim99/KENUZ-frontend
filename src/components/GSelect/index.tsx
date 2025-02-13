'use client'

import {createOptions} from "@/utils/createOptions";
import {useRouter} from "next/navigation";
import {ChangeEvent} from "react";

interface IProps {
    amount: number;
    link: string;
    classes?: string;
}


export const GSelect = ({amount, link, classes}: IProps) => {
    const router = useRouter();

    const select_data = createOptions(amount);

    const navigateHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        if (!value) return;
        router.push(link + value)
    }


    return (
        <div className={`${classes} flex flex-wrap gap-[10px] justify-center sm:gap-x-[20px] md:gap-y-[20px]`}>
            {
                select_data.map((s_item, s_index) => (
                    <select
                        onChange={navigateHandler}
                        key={s_index}
                        value={''}
                        className={"px-[10px] py-[6px] rounded border-[1px] border-yellow-500/60 bg-transparent shadow sm:shadow-lg lg:text-lg lg:px-[22px] lg:py-[10px]"}
                    >
                        <option value="" className={"bg-[#131119]"}>
                            {s_item.title}
                        </option>
                        {
                            s_item.options.map((o_item, o_index) => (
                                <option key={o_index} value={o_item.value} className={"bg-[#131119]"}>
                                    {o_item.label}
                                </option>
                            ))
                        }
                    </select>
                ))
            }
        </div>
    )
}