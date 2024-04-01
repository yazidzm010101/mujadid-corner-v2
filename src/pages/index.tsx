import Layout from "@/components/Layout";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import { siteData } from "@/data/site";
import Head from "next/head";

export default function Home() {
  const title = siteData.name.split(" ").reverse()[0] + "'s Corner"
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={siteData.favicon} sizes="any" />
      </Head>
      <Layout>
        <div className="relative z-10">
          <Hero/>
          <About/>
          <Experience/>
        </div>
      </Layout>
    </>
  );
}
