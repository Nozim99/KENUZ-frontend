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
            className={"block h-[190px] sm:h-[242px] md:h-[270px] lg:h-[335px]"}
        >
            <Image
                src={image}
                className={"block w-full h-[130px] bg-yellow-500/50 mb-[5px] object-center object-cover sm:h-[180px] md:h-[200px] lg:h-[255px]"}
                alt={title + ' image'}
                width={200}
                height={250}
            />
            <h3 className={"text-[12px] line-clamp-3 sm:text-[14px] lg:text-[16px] text-medium"}>
                {title}
            </h3>
        </Link>
    )
}

export default Card;