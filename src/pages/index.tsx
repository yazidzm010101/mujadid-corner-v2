import Layout from "@/components/Layout";
import { metadata } from "@/data/metadata";
import Head from "next/head";

const Hero = () => {
  return (
    <section>
      <div className="w-full max-w-screen-md mx-auto flex flex-col gap-4 items-center">
        <img src={metadata.authorPicture} alt="Author's profile picture" className="aspect-square w-32 max-w-full rounded-full" />
        <h1 className="font-black text-5xl text-center">Welcome to {metadata.name}</h1>
        <p className="text-center text-xl">{metadata.description}</p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.name}</title>
        <link rel="icon" href={metadata.favicon} sizes="any" />
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
