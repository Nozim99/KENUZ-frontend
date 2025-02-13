import Link from "next/link";
import Image from "next/image";


interface IProps {
    image: string;
    path: string;
    title: string;
}


export const Card = ({image, path, title}: IProps) => {
    return (
        <Link
            href={path}
            className={"block h-[190px] sm:h-[242px] md:h-[270px] lg:h-[335px] hover:bg-yellow-900/10 rounded-lg transition-all duration-300 card"}
        >
            <div
                className={"block w-full h-[130px] mb-[5px] object-center object-cover sm:h-[180px] md:h-[200px] lg:h-[255px] rounded-lg overflow-hidden relative"}>
                <div className={"absolute inset-0 animate-pulse bg-yellow-900/30"}></div>
                <Image
                    src={image}
                    className={"block w-full relative h-[130px] mb-[5px] object-center object-cover sm:h-[180px] md:h-[200px] lg:h-[255px] rounded-lg transition-all duration-300"}
                    alt={title + ' image'}
                    width={200}
                    height={250}
                />
            </div>
            <h3 className={"text-[12px] line-clamp-3 sm:text-[14px] lg:text-[16px] text-medium text-center text-[#999] transition-all duration-300"}>
                {title}
            </h3>
        </Link>
    )
}

export default Card;