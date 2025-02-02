"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/effect-creative";
import "swiper/css/pagination";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projects } from "@/data/projectData";

export type ProjectData = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  img: string[];
  tech: string[];
  live: string;
};

export default function DetailProjects() {
  const { slug } = useParams();
  const [projectDetail, setProjectDetail] = useState<ProjectData>();

  useEffect(() => {
    const getBySlug = () => {
      const findBySlug = projects.find((p) => p.slug === slug);
      setProjectDetail(findBySlug);
    };
    getBySlug();
  }, [slug]);

  return (
    <div className="min-h-screen pt-20 ">
      <div className="w-full bg-secondary py-16 text-center">
        <h3 className="text-white text-3xl font-bold">
          {projectDetail?.title}
        </h3>
      </div>
      <div className="mt-10 w-11/12 gap-20 pb-32 flex flex-col-reverse md:flex md:flex-row mx-auto  justify-between">
        <div className="md:w-[50%] lg:w-[40%] w-11/12 mx-auto">
          <div className="w-fit">
            <p className="text-lg font-[700] ">Project Descriptions</p>
            <div className="h-[2px] bg-secondary w-full"></div>
          </div>
          <div className="mt-10">
            <p>{projectDetail?.description}</p>
          </div>
          <div className="w-fit mt-5">
            <p className="text-lg font-[700] ">Tech Stack</p>
            <div className="h-[2px] bg-secondary w-full"></div>
          </div>
          <div className="flex gap-4 mt-4 flex-wrap">
            {projectDetail?.tech.map((d, i) => (
              <p key={i} className="p-2 text-white bg-secondary rounded-md">
                {d}
              </p>
            ))}
          </div>
        </div>
        <div className="md:w-[50%] lg:w-[40%] w-11/12 mx-auto">
          <div className="w-full flex flex-col">
            <div className="w-fit">
              <p className="text-lg font-[700] ">Highlight Projects</p>
              <div className="h-[2px] bg-secondary w-full"></div>
            </div>

            <div className="mt-10  p-4 rounded-md flex justify-center items-center">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                pagination={{ clickable: true }}
                modules={[EffectCards, Pagination]}
                className="mySwiper w-[100%] p-5 rounded-lg h-full"
              >
                <SwiperSlide className=" bg-white p-10 border-2 rounded-lg">
                  <Image
                    src={projectDetail?.img[0] || "/images/alamasta.png"}
                    alt="Background"
                    width={1000}
                    height={1000}
                    objectPosition="center"
                    priority
                    className="rounded-md w-full shadow-xl mx-auto h-full object-contain object-center"
                  />
                </SwiperSlide>
                <SwiperSlide className=" bg-white p-10 border-2 rounded-lg">
                  <Image
                    src={projectDetail?.img[1] || "/images/alamasta.png"}
                    alt="Background"
                    width={1000}
                    height={1000}
                    objectPosition="center"
                    priority
                    className="rounded-md w-full mx-auto h-full object-contain object-center"
                  />{" "}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
