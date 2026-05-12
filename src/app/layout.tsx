import type { Metadata } from "next";
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
import "../styles/sections/banner.css";
import "../styles/sections/skill.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
