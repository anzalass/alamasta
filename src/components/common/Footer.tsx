import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-white  text-gray-600 pt-10 border-t">
      <div className=" flex flex-col md:flex-row justify-between mx-auto px-10 ">
        <div className="flex flex-col w-full md:w-1/3">
          <div className="text-4xl font-bold ">
            <span className="text-secondary">Ala</span>
            <span className="text-primary">masta.</span>
          </div>
          <p className="italic text-accent">{t("expertise")}</p>

          <div>
            <h2 className="text-2xl font-bold mt-10">{t("follow_us")}</h2>
            <ul className="flex gap-2">
              <li className="">
                <a href="#">
                  <Image
                    src="/icons/instagram.png"
                    alt="Instagram"
                    width={45}
                    height={45}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/icons/tiktok.png"
                    alt="Facebook"
                    width={45}
                    height={45}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/icons/twitter.png"
                    alt="Twitter"
                    width={45}
                    height={45}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <h1 className="text-2xl font-bold mb-6">{t("serviceFoot")}</h1>
          <ul className="space-y-2 text-accent">
            <li>
              <a href="#">{t("services.website_development")}</a>
            </li>
            <li>
              <a href="#">{t("services.website_design")}</a>
            </li>
            <li>
              <a href="#">{t("services.website_maintenance")}</a>
            </li>
            <li>
              <a href="#">{t("services.mobile_app_development")}</a>
            </li>
          </ul>
        </div>
        <div className="mt-6 lg:mt-0">
          <h1 className="text-2xl font-bold mb-6">{t("contact")}</h1>
          <ul className="space-y-2 text-accent">
            <li>
              <a href="#">alamasta17@gmail.com</a>
            </li>
            <li>
              <a href={"https://wa.me/6285179945123"}>+6285179945123</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-secondary text-white mt-10 py-2 px-10">
        <div className="mx-auto  flex flex-col lg:flex-row justify-between text-sm">
          <p>© {t("copyright")} </p>
          <ul className="flex-col flex md:flex gap-4 mt-4 lg:mt-0">
            <li>
              <a href="#">{t("terms.terms_of_service")}</a>
            </li>
            <li>
              <a href="#">{t("terms.privacy_policy")}</a>
            </li>
            <li>
              <a href="#">{t("terms.terms_and_conditions")}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
