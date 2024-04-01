import { siteData } from "@/data/site";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";

export default function About({ ...rest }) {
  return (
    <section
      id="about"
      className="min-h-[100vh] bg-gradient-to-br from-[#1a1a1a] to-[#071b1b] overflow-hidden"
      style={{ boxShadow: "0 0 100px -50px black" }}
      {...rest}
    >
      <div className="max-w-screen-lg px-6 sm:px-10 py-12 mx-auto grid md:grid-cols-5 gap-4">
        <div className="sm:col-span-3 lg:col-span-3">
          {/* this the title */}
          <h1 className="text-4xl sm:text-6xl  font-bold">
            <span className="inline-block text-white" data-aos="fade-right">
              About
            </span>
            <br />
            <span className="inline-block text-[#7BFFCF]" data-aos="fade-left">
              {siteData.name.split(" ")[0]}
            </span>
          </h1>
          <div
            className="flex justify-center items-center md:hidden"
            data-aos="zoom-in"
          >
            <div className="w-full max-w-48 mt-12 relative">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/resume%2Fprofile480.webp?alt=media"
                alt="clip-art-matcha"
                className="w-full relative rounded-full"
                loading="eager"
                style={{ boxShadow: "0 4px 32px -24px white" }}
              />
              <div className="rotating w-[105%] h-[105%] absolute border-2 border-dashed border-spacing-6 border-white opacity-20 rounded-full top-[-2.5%] left-[-2.5%]" />
              <div className="rotating-reverse w-[108%] h-[108%] absolute border-2 border-dashed border-spacing-6 border-white opacity-10 rounded-full top-[-4%] left-[-4%]" />
              <div className="rotating w-[111%] h-[111%] absolute border-2 border-dashed border-spacing-6 border-white opacity-5 rounded-full top-[-5.5%] left-[-5.5%]" />
            </div>
          </div>
          {/* small description about myself */}
          <p className="text-xl mt-10 leading-relaxed" data-aos="fade-up">
            {siteData.about}
          </p>
          {/* some call to actions */}
          <div className="flex gap-4 mt-8 flex-wrap" data-aos="fade-right">
            <Link
              href={"#experience"}
              className="md:text-xl bg-[#00945F] text-white rounded-full px-5 md:px-7 md:py-3 py-2"
            >
              See his experience
            </Link>
          </div>
          <div className="flex gap-4 mt-4 flex-wrap" data-aos="fade-right">
            <button className="md:text-xl border border-[#114734] text-white rounded-full px-5 md:px-7 md:py-3 py-2">
              <div className="flex items-center gap-3">
                <IconMenu2 />
                <span>See other things...</span>
              </div>
            </button>
          </div>
        </div>
        {/* This is some cute clipart that represent the authors */}
        <div
          className="hidden md:block col-span-2 relative pt-32"
          data-aos="zoom-in"
        >
          <div className="absolute md:w-[70%] lg:w-[65%] left-[55%] -translate-x-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/resume%2Fprofile480.webp?alt=media"
              alt="clip-art-matcha"
              className="w-full relative rounded-full"
              loading="eager"
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
}
