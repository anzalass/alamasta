"use client";

import React from "react";
import Card from "../common/Card";
import { motion } from "framer-motion";
import { projects } from "../../data/projectData";
import { ProjectData } from "@/app/[locale]/projects/[slug]/page";
import { useTranslations } from "next-intl";

function ShowcaseSection2() {
  const t = useTranslations();
  return (
    <section id="showcase" className="w-11/12  z-50 3xl:max-w-7xl mx-auto ">
      <div className="">
        <h4 className="text-center py-16 text-2xl sm:text-4xl">
          <span className="text-white bg-secondary py-1 px-2 ">
            {t("showcase1")}
          </span>{" "}
          {t("showcase2")}
        </h4>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="md:flex sm:flex-col gap-x-8 sm:gap-y-4 justify-between"></div>
          <div className="flex flex-col">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {projects.map((project: ProjectData, index: number) => (
                <Card
                  slug={project.slug}
                  key={index}
                  title={project.title}
                  imageSrc={project.img[0]}
                  category={project.category}
                  onCardClick={() => {}}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection2;
