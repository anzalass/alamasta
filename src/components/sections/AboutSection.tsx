import Image from "next/image";
import React from "react";

interface AboutSectionInterface {
  title: string;
  desc: string;
}

function AboutSection({ title, desc }: AboutSectionInterface) {
  return (
    <section className="w-full py-16 bg-white" id="about-us">
      <div className="h-auto flex flex-col-reverse md:flex-row md:flex justify-between bg-white z-50 pt-14 3xl:max-w-7xl w-11/12 mx-auto  ">
        <div className="w-full text-center md:text-start md:w-1/2 my-auto">
          <p className="text-2xl mt-10 md:mt-0 w-full font-bold text-secondary">
            {title}
          </p>
          <p
            style={{ lineHeight: "26px" }}
            className="text-secondary w-full xl:w-[70%] md:w-11/12 mt-3  text-sm sm:text-base lg:text-base"
          >
            {desc}
          </p>
        </div>
        <div className="md:w-1/2 w-full mx-auto">
          <Image
            src="/images/alamasta.png"
            alt="Icon"
            width={1000}
            height={1000}
            className="object-cover w-[80%] h-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
