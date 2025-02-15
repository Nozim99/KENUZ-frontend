import cls from "@/styles/loader.module.scss"


export default function MLoading() {


    return (
        <div className={`transition-all duration-300 fixed inset-0  z-50 flex justify-center items-center`}>
            <div className={cls.loader}></div>
        </div>
    )
}