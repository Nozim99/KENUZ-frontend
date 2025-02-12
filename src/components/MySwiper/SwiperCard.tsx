import Link from "next/link";
import Image from "next/image";

export const SwiperCard = ({image, title, path}: { image: string; title: string, path: string }) => {
    return (
        <Link
            href={path}
            className={"block  h-[190px] sm:h-[230px] lg:h-[382px]"}
        >
            <Image
                src={image}
                className={"block w-full h-[130px] bg-yellow-500/50 mb-[5px] object-center object-cover sm:h-[170px] lg:h-[300px]"}
                width={240}
                height={300}
                alt={title}
            />
            <h3 className={"text-[12px] line-clamp-3 lg:text-base lg:font-medium"}>
                {title}
            </h3>
        </Link>
    )
}