import {Inter} from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "../styles/globals.scss"
import "../styles/main.scss"
import {Metadata} from "next";
import {PUBLIC_URL} from "@/utils/constants";
import Script from "next/script";


const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter'
})


export const metadata: Metadata = {
    title: "KENUZ",
    description: "Anime, film va multfilm dunyosiga qadam qo'ying! Yangi chiqqan anime seriyalaridan tortib, mashhur filmlar va multfilmlargacha, barcha eng yaxshi va eng so'nggi kontentni toping. Har bir janr va yoshga mos bo'lgan eng yaxshi anime va filmlar haqida batafsil ma'lumotlar, sharhlar va tavsiyalarni kashf eting. Biz bilan eng yaxshi tomosha tajribasidan bahramand bo'ling!",
    icons: {
        icon: "/kenuz.png"
    },
    openGraph: {
        title: "KENUZ - Anime, Film va Multfilm",
        description: "Anime, film va multfilm dunyosiga qadam qo'ying! Yangi chiqqan anime seriyalaridan tortib, mashhur filmlar va multfilmlargacha, barcha eng yaxshi va eng so'nggi kontentni toping.",
        url: PUBLIC_URL,
        siteName: "KENUZ",
        images: [
            {
                url: PUBLIC_URL + "/kenuz.png",
                width: 222,
                height: 300,
                alt: "KENUZ logo"
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary",
        title: "KENUZ - Anime, Film va Multfilm",
        description: "Anime, film va multfilm dunyosiga qadam qo'ying! Yangi chiqqan anime seriyalaridan tortib, mashhur filmlar va multfilmlargacha, barcha eng yaxshi va eng so'nggi kontentni toping.",
        images: [PUBLIC_URL + "/kenuz.png"],
        creator: "KENUZ"
    }
}


export default async function LocaleLayout({
                                               children,
                                           }: {
    children: React.ReactNode;
}) {

    return (
        <html lang={'uz'} className={inter.variable}>
        <head>
            <Script 
                src="https://fpyf8.com/88/tag.min.js" 
                data-zone="168122" 
                strategy="afterInteractive"
                data-cfasync="false"
            />
        </head>
        <body>
        <Navbar/>
        {children}
        <footer className={"h-[30px] sm:h-[50px] lg:h-[80px]"}>

        </footer>
        </body>
        </html>
    );
}