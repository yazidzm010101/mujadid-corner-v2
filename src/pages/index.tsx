import Layout from "@/components/Layout";
import { metadata } from "@/data/metadata";
import { IconArrowDown, IconMenu2 } from "@tabler/icons-react";
import Head from "next/head";
import Link from "next/link";
const Hero = ({ ...rest }) => {
  return (
    <section
      className="max-w-screen-lg mx-auto min-h-[100vh] px-10 py-12 grid sm:grid-cols-4 lg:grid-cols-2 gap-4 sticky top-0"
      {...rest}
    >
      <div className="sm:col-span-3 lg:col-span-1">
        {/* this the title */}
        <h1 className="text-5xl sm:text-6xl font-bold">Hello,</h1>
        {/* greeting message */}
        <h1 className="font-bold text-5xl sm:text-6xl text-[#7BFFCF] max-w-[16ch] mt-24 sm:mt-16">
          I&apos;m {metadata.name}
        </h1>
        {/* small description about myself */}
        <p className="text-xl leading-relaxed mt-10">{metadata.description}</p>
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
          <Link
            href={"#about"}
            className="md:text-xl border border-[#114734] text-white rounded-full px-5 md:px-7 md:py-3 py-2"
          >
            <div className="flex items-center gap-1">
              <IconArrowDown />
              <span>Who is {metadata.name.split(" ")[0]}?</span>
            </div>
          </Link>
        </div>
      </div>
      {/* This is some cute clipart that represent the authors */}
      <div className="hidden lg:block col-span-1 relative pt-24">
        <div className="absolute lg:w-[65%] xl:w-[55%] left-1/2 -translate-x-1/2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Tux_Enhanced.svg/154px-Tux_Enhanced.svg.png"
            alt="clip-art-tux-linux"
            className="-rotate-6 origin-center absolute w-[40%] left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
            loading="lazy"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/10638163.webp?alt=media"
            alt="clip-art-tux-linux"
            className="rotate-6 origin-center absolute w-[40%] right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
            loading="lazy"
          />
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/matcha-8147961-6478159.png"
            alt="clip-art-matcha"
            className="rotate-3 origin-center relative w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

const About = ({ ...rest }) => {
  return (
    <section
      id="about"
      className="min-h-[100vh] bg-gradient-to-br from-[#1a1a1a] to-[#071b1b] relative overflow-hidden"
      style={{ boxShadow: "0 0 100px -50px black" }}
      {...rest}
    >
      <div className="max-w-screen-lg px-10 py-12 mx-auto grid md:grid-cols-5 gap-4">
        <div className="sm:col-span-3 lg:col-span-3">
          {/* this the title */}
          <h1 className="text-5xl sm:text-6xl  font-bold text-white">
            About
            <br />
            <span className="text-[#7BFFCF]">
              {metadata.name.split(" ")[0]}
            </span>
          </h1>
          <div className="flex justify-center items-center md:hidden">
            <div className="w-full max-w-48 mt-12 relative">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/resume%2Fprofile480.webp?alt=media"
                alt="clip-art-matcha"
                className="w-full relative rounded-full"
                loading="lazy"
                style={{ boxShadow: "0 4px 32px -24px white" }}
              />
              <div className="rotating w-[105%] h-[105%] absolute border-2 border-dashed border-spacing-6 border-white opacity-20 rounded-full top-[-2.5%] left-[-2.5%]" />
              <div className="rotating-reverse w-[108%] h-[108%] absolute border-2 border-dashed border-spacing-6 border-white opacity-10 rounded-full top-[-4%] left-[-4%]" />
              <div className="rotating w-[111%] h-[111%] absolute border-2 border-dashed border-spacing-6 border-white opacity-5 rounded-full top-[-5.5%] left-[-5.5%]" />
            </div>
          </div>
          {/* small description about myself */}
          <p className="text-xl mt-10 leading-relaxed">{metadata.about}</p>
          {/* some call to actions */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="md:text-xl bg-[#00945F] text-white rounded-full px-5 md:px-7 md:py-3 py-2">
              See the experience
            </button>
          </div>
          <div className="flex gap-4 mt-4 flex-wrap">
            <button className="md:text-xl border border-[#114734] text-white rounded-full px-5 md:px-7 md:py-3 py-2">
              <div className="flex items-center gap-3">
                <IconMenu2 />
                <span>See other things...</span>
              </div>
            </button>
          </div>
        </div>
        {/* This is some cute clipart that represent the authors */}
        <div className="hidden md:block col-span-2 relative pt-32">
          <div className="absolute md:w-[70%] lg:w-[65%] left-[55%] -translate-x-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/resume%2Fprofile480.webp?alt=media"
              alt="clip-art-matcha"
              className="w-full relative rounded-full"
              loading="lazy"
              style={{ boxShadow: "0 4px 32px -24px white" }}
            />
            <div className="rotating w-[105%] h-[105%] absolute border-2 border-dashed border-spacing-6 border-white opacity-20 rounded-full top-[-2.5%] left-[-2.5%]" />
            <div className="rotating-reverse w-[108%] h-[108%] absolute border-2 border-dashed border-spacing-6 border-white opacity-10 rounded-full top-[-4%] left-[-4%]" />
            <div className="rotating w-[111%] h-[111%] absolute border-2 border-dashed border-spacing-6 border-white opacity-5 rounded-full top-[-5.5%] left-[-5.5%]" />
          </div>
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
        <div className="relative">
          <Hero />
          <About />
        </div>
      </Layout>
    </>
  );
}
