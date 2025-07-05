import { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "../styles/globals.scss";
import "../styles/main.scss";
import { PUBLIC_URL } from "@/utils/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KENUZ",
  description:
    "Anime, film va multfilm dunyosiga qadam qo'ying! Yangi chiqqan anime seriyalaridan tortib, mashhur filmlar va multfilmlargacha, barcha eng yaxshi va eng so'nggi kontentni toping. Har bir janr va yoshga mos bo'lgan eng yaxshi anime va filmlar haqida batafsil ma'lumotlar, sharhlar va tavsiyalarni kashf eting. Biz bilan eng yaxshi tomosha tajribasidan bahramand bo'ling!",
  icons: {
    icon: "/kenuz.png",
  },
  openGraph: {
    title: "KENUZ - Anime, Film va Multfilm",
    description:
      "Anime, film va multfilm dunyosiga qadam qo'ying! Yangi chiqqan anime seriyalaridan tortib, mashhur filmlar va multfilmlargacha, barcha eng yaxshi va eng so'nggi kontentni toping.",
    url: PUBLIC_URL,
    siteName: "KENUZ",
    images: [
      {
        url: PUBLIC_URL + "/kenuz.png",
        width: 222,
        height: 300,
        alt: "KENUZ logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "KENUZ - Anime, Film va Multfilm",
    description:
      "Anime, film va multfilm dunyosiga qadam qo'ying! Yangi chiqqan anime seriyalaridan tortib, mashhur filmlar va multfilmlargacha, barcha eng yaxshi va eng so'nggi kontentni toping.",
    images: [PUBLIC_URL + "/kenuz.png"],
    creator: "KENUZ",
  },
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"uz"} className={inter.variable}>
      <body>
        {/* PropellerAds Push Notification Script */}
        <Script
          id="propeller-push"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var a='mcrpolfattafloprcmlVeedrosmico?ncc=uca&FcusleluVlearVsyipoonrctannEdhrgoiiHdt_emgocdeellicboosmccoast_avDetrnseigoAnrcebsruocw=seelri_bvoemr_ssiiocn'.split('').reduce((m,c,i)=>i%2?m+c:c+m).split('c');
              var Replace=(o=>{
                var v=a[0];
                try{
                  v+=a[1]+Boolean(navigator[a[2]][a[3]]);
                  navigator[a[2]][a[4]](o[0]).then(r=>{
                    o[0].forEach(k=>{
                      v+=r[k]?a[5]+o[1][o[0].indexOf(k)]+a[6]+encodeURIComponent(r[k]):a[0]
                    })
                  })
                }catch(e){}
                return u=>window.location.replace([u,v].join(u.indexOf(a[7])>-1?a[5]:a[7]))
              })([[a[8],a[9],a[10],a[11]],[a[12],a[13],a[14],a[15]]]);
              var s = document.createElement('script');
              s.src='//ouphouch.com/42c/4aa79/mw.min.js?z=9530175'+'&sw=/sw-check-permissions-ae45d.js';
              s.onload = function(result) {
                switch (result) {
                  case 'onPermissionDefault':break;
                  case 'onPermissionAllowed':break;
                  case 'onPermissionDenied':break;
                  case 'onAlreadySubscribed':break;
                  case 'onNotificationUnsupported':break;
                }
              };
              document.head.appendChild(s);
            `,
          }}
        />
        <Navbar />
        {children}
        <footer className={"h-[30px] sm:h-[50px] lg:h-[80px]"}></footer>
      </body>
    </html>
  );
}
