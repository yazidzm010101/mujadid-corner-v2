import "@/styles/globals.scss";
import clsx from "clsx";
import type { AppProps } from "next/app";
import { Lato, Lexend } from "next/font/google";
import { useEffect } from "react";

// @ts-ignore
import AOS from "aos";

import "aos/dist/aos.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  weight: "400",
});
const lexend = Lexend({ subsets: ["latin"], variable: "--font-heading" });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className={clsx("min-h-screen", lato.variable, lexend.variable)}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
