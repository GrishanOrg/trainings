import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import Script from "next/script";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./globals.css";
import "../styles/framework/01-bootstrap.min.css";
import "../styles/framework/03-custom-animate.css";
import "../styles/framework/05-flaticon.css";
import "../styles/sections/02-about.css";
import "../styles/sections/03-services.css";
import "../styles/sections/09-counter.css";
import "../styles/sections/07-brand.css";
import "../styles/sections/12-footer.css";
import "../styles/sections/13-lead-form.css";
import "../styles/sections/banner.css";
import "../styles/sections/skill.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Interactive Trainings",
  description: "Interactive Trainings landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${montserrat.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6RYN5ZBZGM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6RYN5ZBZGM');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
