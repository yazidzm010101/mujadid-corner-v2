import "@/styles/globals.css";
import clsx from "clsx";
import type { AppProps } from "next/app";
import { Inter, Urbanist } from "next/font/google";

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' })
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <main className={clsx('min-h-screen', urbanist.variable, inter.variable)}>
      <Component {...pageProps} />;
    </main>
  </>
}
