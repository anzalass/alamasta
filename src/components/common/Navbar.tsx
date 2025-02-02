"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setLocale } from "@/lib/redux/slices/localeSlice";
import { RootState } from "@/lib/redux/store";

function Navbar() {
  const t = useTranslations();
  const router = useRouter();
  const path = usePathname();
  const pathArray = path.split("/");
  const dispatch = useDispatch();
  const locale = useSelector((state: RootState) => state.locale.language);

  const [scrollToId, setScrollToId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);
  const handleScrollTo = (id: string) => {
    setScrollToId(id);
  };

  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollToId]); // Depend on scrollToId to trigger when set

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleChangeLocale = (locale: string) => {
    pathArray[1] = locale;
    router.push(pathArray.join("/"));
    dispatch(setLocale(locale));
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className=" fixed  backdrop-blur-3xl w-screen top-0 z-50"
    >
      <div className="w-11/12 mx-auto justify-between gap-5 flex items-center py-5 ">
        {/* Logo */}
        <div className=" flex items-center space-x-11">
          <Link href={`/${locale}`} className="text-4xl font-bold  mr-auto">
            <span className="text-secondary">Ala</span>
            <span className="text-primary">masta.</span>
          </Link>

          <nav className="space-x-6  text-sm xl:text-base  hidden md:flex">
            <Link
              href="/"
              className="hover:text-green-500 transition duration-300"
            >
              {t("home")}
            </Link>
            {pathArray?.length <= 2 && (
              <>
                <div
                  onClick={() => handleScrollTo("services")}
                  className="hover:text-green-500 cursor-pointer transition duration-300"
                >
                  {t("service")}
                </div>

                <div
                  onClick={() => handleScrollTo("showcase")}
                  className="hover:text-green-500 cursor-pointer transition duration-300"
                >
                  {t("showcase")}
                </div>
              </>
            )}
          </nav>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden  text-xs xl:text-base  md:flex space-x-6 text-secondary">
          <Link
            href={`/${locale}/contact`}
            className="text-white  bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-3 lg:px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {t("contact")}
          </Link>

          <div className="relative">
            {/* Tombol Dropdown */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-3 lg:px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              {t("bahasa")} <ChevronDown className="ml-3" />
            </button>

            {/* Menu Dropdown */}
            {isOpen && (
              <div className="absolute left-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <span
                      onClick={() => handleChangeLocale("en")}
                      className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      English
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => handleChangeLocale("id")}
                      className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Indonesia
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden  bg-white shadow-lg"
      >
        <ul className="space-y-4 text-center text-secondary py-4">
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link href={"/"}>
              <p className="block hover:text-green-500 transition duration-300">
                {t("home")}
              </p>
            </Link>
          </motion.li>
          {pathArray?.length <= 2 && (
            <>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span
                  onClick={() => handleScrollTo("services")}
                  className="block hover:text-green-500 transition duration-300"
                >
                  {t("service")}
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <span
                  onClick={() => handleScrollTo("showcase")}
                  className="block hover:text-green-500 transition duration-300"
                >
                  {t("showcase")}
                </span>
              </motion.li>
            </>
          )}

          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link href={`/${locale}/contact`}>
              <p className="block hover:text-green-500 transition duration-300">
                {t("contact")}
              </p>
            </Link>
          </motion.li>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-3 lg:px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            {t("bahasa")} <ChevronDown className="ml-3" />
          </button>
          {isOpen && (
            <div className="flex justify-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <span
                      onClick={() => handleChangeLocale("en")}
                      className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      English
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => handleChangeLocale("id")}
                      className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Indonesia
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </ul>
      </motion.nav>
    </motion.header>
  );
}

export default Navbar;
