import MenuModal from "@/app/components/MenuModal";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={"mContainer flex items-center justify-between py-[10px] mb-[10px] lg:mb-[20px] sm:py-[18px] lg:pt-[25px]"}>
            <div className={"flex items-center gap-[12px] lg:gap-[20px]"}>
                <MenuModal />
                <Link href={'/'} className={"h-[34px] flex items-center justify-center font-semibold text-xl sm:text-2xl lg:text-3xl tracking-widest"}>
                    KENUZ
                </Link>
            </div>
            <div className={"flex items-center"}>
                {/*<div className={"bg-neutral-300 h-[34px] w-[60px]"}></div>*/}
            </div>
        </div>
    )
}

export default Navbar;