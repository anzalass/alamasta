'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Card from '../common/Card';
import { motion } from 'framer-motion';
import projectData from '../../data/projectData.json';

const ITEMS_PER_PAGE = 4;

function OfferSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter data berdasarkan kategori yang dipilih
  const filteredProjects = selectedCategory === 'all'
    ? projectData
    : projectData.filter(project => project.category === selectedCategory);

  // Data untuk halaman saat ini
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  // Fungsi untuk berpindah halaman
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="h-auto px-4 sm:px-6 lg:px-10 py-5">
      <div className="flex flex-col">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Siap bekerja sama bersama nugasking?</h1>
          <div className="md:flex sm:flex-col gap-x-8 sm:gap-y-4 justify-between">
            <p className="text-accent mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg lg:max-w-5xl sm:max-w-2xl">
              Tim kami siap membantu Anda menyelesaikan berbagai kebutuhan teknologi digital dengan solusi yang efisien dan berkualitas tinggi. Kami berkomitmen untuk memberikan layanan terbaik dalam setiap proyek, mulai dari joki tugas pemrograman hingga pengembangan website dan aplikasi mobile.
            </p>
            <a
              href="#"
              className="flex bg-green-500 text-white font-bold px-4 py-2 rounded-xl items-center hover:bg-green-600 my-auto w-fit transition duration-300"
            >
              Mulai Diskusi
              <Image
                src="/icons/proicons_arrow-enter.png"
                alt="Arrow Right"
                width={20}
                height={20}
                className="ml-2"
              />
            </a>
          </div>
          <div className="flex flex-col">
            {/* Kategori Filter */}
            <div className="flex flex-wrap gap-4 mt-6">
              {['all', 'Website', 'Android', 'Landing Page'].map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`border border-1 font-bold px-4 py-2 rounded-md ${
                    selectedCategory === category
                      ? 'bg-accent text-white'
                      : 'text-accent hover:bg-accent hover:text-white'
                  }`}
                >
                  {category === 'all' ? 'Tampilkan Semua' : category}
                </button>
              ))}
            </div>

            {/* Grid Proyek */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {paginatedProjects.map((project, index) => (
                <Card
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.image}
                  category={project.category}
                  onCardClick={() => {}}
                />
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                className="flex justify-center mt-8 gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded-md font-bold transition ${
                      currentPage === page
                        ? 'bg-accent text-white'
                        : 'bg-gray-200 text-accent hover:bg-accent hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
