'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
      className="bg-white font-roboto shadow-sm fixed w-screen top-0 z-50"
    >
      <div className="container mx-auto flex items-center py-2 px-6">
        {/* Logo */}
        <div className="text-4xl font-bold font-poppins mr-auto">
          <span className="text-secondary">nugas</span>
          <span className="text-primary">king.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-secondary">
          <Link href="/" className="hover:text-green-500 transition duration-300">Home</Link>
          <Link href="/news" className="hover:text-green-500 transition duration-300">Berita</Link>
          <Link href="/hto" className="hover:text-green-500 transition duration-300">How to Order</Link>
          <Link href="/tracking" className="hover:text-green-500 transition duration-300">Tracking</Link>
          <Link href="/promo" className="hover:text-green-500 transition duration-300">Promo</Link>
        </nav>

        {/* Order Button */}
        <a
          href="#"
          className="hidden md:flex bg-green-500 text-white font-bold px-4 py-2 rounded-xl items-center hover:bg-green-600 ml-6 transition duration-300"
        >
          Order
          <Image
            src="/icons/proicons_arrow-enter.png"
            alt="Arrow Right"
            width={20}
            height={20}
            className="ml-2"
          />
        </a>

        {/* Hamburger Menu */}
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
        className="overflow-hidden md:hidden bg-white shadow-lg"
      >
        <ul className="space-y-4 text-center text-secondary py-4">
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <a href="#" className="block hover:text-green-500 transition duration-300">Home</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <a href="#" className="block hover:text-green-500 transition duration-300">Berita</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <a href="#" className="block hover:text-green-500 transition duration-300">How to Order</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <a href="#" className="block hover:text-green-500 transition duration-300">Tracking</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <a href="#" className="block hover:text-green-500 transition duration-300">Promo</a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <a
              href="#"
              className="bg-green-500 text-white font-bold px-4 py-2 rounded-xl inline-block hover:bg-green-600 transition duration-300"
            >
              Order
            </a>
          </motion.li>
        </ul>
      </motion.nav>
    </motion.header>
  );
}

export default Navbar;
