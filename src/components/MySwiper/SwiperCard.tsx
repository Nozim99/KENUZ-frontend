import Link from "next/link";
import Image from "next/image";

export const SwiperCard = ({image, title, path}: { image: string; title: string, path: string }) => {
    return (
        <Link
            href={path}
            className={"block  h-[190px] sm:h-[230px] lg:h-[382px] card_simple"}
        >
            <div
                className={"block w-full h-[130px] mb-[5px] sm:h-[170px] lg:h-[300px] rounded-lg overflow-hidden relative"}>
                <div className={"absolute inset-0 animate-pulse bg-yellow-900/30"}></div>
                <Image
                    src={image}
                    className={"block w-full h-[130px] object-center object-cover sm:h-[170px] lg:h-[300px] rounded-lg relative transition-all duration-300"}
                    width={240}
                    height={300}
                    alt={title}
                />
            </div>
            <h3 className={"text-[12px] line-clamp-3 lg:text-base lg:font-medium text-center text-[#999] transition-all duration-300"}>
                {title}
            </h3>
        </Link>
    )
}