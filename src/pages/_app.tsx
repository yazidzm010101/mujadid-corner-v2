import "@/styles/globals.css";
import clsx from "clsx";
import type { AppProps } from "next/app";
import { Lexend, Lato } from "next/font/google";

const lato = Lato({ subsets: ['latin'], variable: '--font-body', weight: '400' })
const lexend = Lexend({ subsets: ["latin"], variable: '--font-heading' });

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <main className={clsx('min-h-screen', lato.variable, lexend.variable)}>
      <Component {...pageProps} />
    </main>
  </>
}
