import Layout from "@/components/Layout";
import { metadata } from "@/data/metadata";
import { IconArrowDown } from "@tabler/icons-react";
import Head from "next/head";

const Hero = () => {
  return (
    <section className="h-[100vh] min-h-[480px] px-10 py-12 grid sm:grid-cols-4 lg:grid-cols-2 gap-4">
      <div className="sm:col-span-3 lg:col-span-1">
        {/* this the title */}
        <h1 className="text-5xl sm:text-6xl  font-bold">Hello,</h1>
        {/* greeting message */}
        <h1 className="font-bold text-5xl sm:text-6xl text-[#7BFFCF] max-w-[16ch] mt-24 sm:mt-16">
          I&apos;m {metadata.name}
        </h1>
        {/* small description about myself */}
        <p className="text-xl sm:text-2xl md:text-3xl mt-10">{metadata.description}</p>
        {/* some call to actions */}
        <div className="flex gap-4 mt-8 flex-wrap">
          <button className="md:text-xl bg-[#00945F] text-white rounded-full px-5 md:px-7 md:py-3 py-2">
            Contact
          </button>
          <button className="md:text-xl border border-[#114734] text-white rounded-full px-5 md:px-7 md:py-3 py-2">
            Read the blogs
          </button>
        </div>
        <div className="flex gap-4 mt-4 flex-wrap">
          <button className="md:text-xl border border-[#114734] text-white rounded-full px-5 md:px-7 md:py-3 py-2">
            <div className="flex items-center gap-1">
              <IconArrowDown/>
              <span>Who is {metadata.name.split(' ')[0]}?</span>
            </div>
          </button>
        </div>
      </div>
      {/* This is some cute clipart that represent the authors */}
      <div className="hidden lg:block col-span-1 relative pt-24">
        <div className="absolute lg:w-[65%] xl:w-[55%] left-1/2 -translate-x-1/2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Tux_Enhanced.svg/154px-Tux_Enhanced.svg.png"
            alt="clip-art-tux-linux"
            className="-rotate-6 origin-center absolute w-[40%] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/10638163.webp?alt=media"
            alt="clip-art-tux-linux"
            className="rotate-6 origin-center absolute w-[40%] right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
          />
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/matcha-8147961-6478159.png"
            alt="clip-art-matcha"
            className="rotate-3 origin-center relative w-full"
          />
        </div>
      </div>
    </section>
  );
};

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
