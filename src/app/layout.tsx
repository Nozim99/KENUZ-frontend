import {Inter} from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "../styles/globals.scss"
import "../styles/main.scss"


const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter'
})


export default async function LocaleLayout({
                                               children,
                                           }: {
    children: React.ReactNode;
}) {

    return (
        <html lang={'uz'} className={inter.variable}>
        <body>
            <Navbar/>
            {children}
        <footer className={"h-[100px]"}>

        </footer>
        </body>
        </html>
    );
}