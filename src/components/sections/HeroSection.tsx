"use client";
import React from "react";
import Image from "next/image";
import Particlee from "../common/Particle";
import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
interface HeroSectionProps {
  title: string;
  desc: string;
}

function HeroSection({ title, desc }: HeroSectionProps) {
  const handleScroll = () => {
    const serviceSection = document.getElementById(
      "about-us"
    ) as HTMLElement | null;
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID 'about-us' not found.");
    }
  };
  return (
    <section className="relative  h-screen flex flex-col justify-center items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgroundHero.png"
          alt="Background"
          width={1000}
          height={1000}
          objectFit="cover"
          objectPosition="center"
          priority
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex n 3xl:max-w-7xl items-center justify-center text-center  mx-auto  w-11/12 ">
        <div className="w-full justify-center items-center md:w-[80%] lg:w-[60%] xl:w-[50%] ">
          <h1 className="text-3xl w-full leading-[50px] sm:leading-[65px] sm:text-5xl font-bold  mb-4 mt-16 text-secondary">
            {title}
          </h1>

          <div className=" text-center mx-auto w-fit">
            <button className="flex w-fit flex-col text-secondary text-lg p-3 font-bold  rounded-xl items-center transition duration-300">
              {desc}
              <div
                className="bg-secondary p-2 mt-5 rounded-full"
                onClick={handleScroll}
              >
                <ArrowDown className="bg-secondary text-white" size={30} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -z-50">
        <Particlee />
      </div>
    </section>
  );
}

export default HeroSection;
