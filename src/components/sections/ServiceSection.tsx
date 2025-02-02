import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function ServiceSection() {
  const t = useTranslations();
  return (
    <div className=" bg-white z-50 pb-[100px]" id="services">
      <div className="">
        <h4 className="text-center py-16 text-2xl sm:text-4xl">
          <span className="text-white bg-secondary py-1 px-2 ">
            {t("servicesTitle1")}
          </span>{" "}
          {t("servicesTitle2")}
        </h4>
      </div>
      <div className="flex flex-wrap md:grid 3xl:max-w-7xl  md:grid-cols-2 gap-10  mx-auto w-11/12 ">
        <div className="flex flex-col p-6 border rounded-lg  shadow-sm bg-white hover:shadow-lg transition duration-300">
          <Image
            src="/images/developer.png"
            alt="Harga Terjangkau"
            width={60}
            height={60}
          />
          <h3 className="text-lg font-bold mt-4 text-secondary">
            {t("service1a")}
          </h3>
          <p className="text-sm mt-2 sm:text-base text-slate-500">
            {t("service1b")}
          </p>
        </div>
        <div className="flex flex-col p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition duration-300">
          <Image
            src="/images/team-work.png"
            alt="Harga Terjangkau"
            width={60}
            height={60}
          />
          <h3 className="text-lg font-bold mt-4 text-secondary">
            {t("service2a")}
          </h3>
          <p className="text-sm sm:text-base mt-2 text-slate-500">
            {t("service2b")}
          </p>
        </div>
        <div className="flex flex-col p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition duration-300">
          <Image
            src="/images/creativity.png"
            alt="Harga Terjangkau"
            width={60}
            height={60}
          />
          <h3 className="text-lg font-bold mt-4 text-secondary">
            {t("service3a")}
          </h3>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            {t("service3b")}
          </p>
        </div>
        <div className="flex flex-col p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition duration-300">
          <Image
            src="/images/interview.png"
            alt="Harga Terjangkau"
            width={60}
            height={60}
          />
          <h3 className="text-lg font-bold mt-4 text-secondary">
            {t("service4a")}
          </h3>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            {t("service4b")}
          </p>
        </div>
      </div>
    </div>
  );
}
