// src/components/BlogSection.tsx
"use client";
import React from "react";
import BlogCard from "./BlogCard";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const ListBlog: React.FC = () => {
  const locale = useSelector((state: RootState) => state.locale.language);
  const blogPosts = [
    {
      title: "Cara Meningkatkan Kualitas Blog Anda",
      excerpt:
        "Ingin membuat blog lebih menarik? Berikut adalah beberapa tips...",
      imageUrl: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64",
      date: "Januari 30, 2025",
    },
    {
      title: "Tips SEO untuk Pemula",
      excerpt:
        "SEO bisa menjadi hal yang rumit, tapi dengan beberapa langkah sederhana...",
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      date: "Februari 2, 2025",
    },
    {
      title: "Menggunakan React dengan Tailwind CSS",
      excerpt:
        "React dan Tailwind CSS adalah kombinasi yang sempurna untuk proyek web...",
      imageUrl: "https://images.unsplash.com/photo-1562813733-b31f71025d54",
      date: "Januari 20, 2025",
    },
    {
      title: "Belajar JavaScript dari Nol",
      excerpt:
        "JavaScript adalah bahasa pemrograman yang sangat populer untuk web...",
      imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      date: "Februari 5, 2025",
    },
    {
      title: "Mengoptimalkan Performa Website",
      excerpt:
        "Kecepatan website adalah faktor penting dalam pengalaman pengguna...",
      imageUrl: "https://images.unsplash.com/photo-1533749047139-189de3cf06d3",
      date: "Februari 10, 2025",
    },
    {
      title: "Pentingnya UI/UX dalam Pengembangan Web",
      excerpt:
        "Desain yang baik dapat meningkatkan pengalaman pengguna secara signifikan...",
      imageUrl: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26",
      date: "Februari 12, 2025",
    },
    {
      title: "Menggunakan Git dan GitHub untuk Kolaborasi",
      excerpt:
        "Git dan GitHub adalah alat penting dalam pengembangan perangkat lunak...",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      date: "Februari 15, 2025",
    },
    {
      title: "Cara Membangun API dengan Node.js",
      excerpt:
        "API adalah komponen penting dalam pengembangan aplikasi modern...",
      imageUrl: "https://images.unsplash.com/photo-1579403124614-197f69d8187b",
      date: "Februari 18, 2025",
    },
    {
      title: "Tren Teknologi di Tahun 2025",
      excerpt:
        "Teknologi terus berkembang pesat, dan berikut adalah tren terbaru...",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1663134285459-0022b0e78970",
      date: "Februari 20, 2025",
    },
    {
      title: "Mengenal Database NoSQL",
      excerpt:
        "NoSQL adalah jenis database yang semakin populer untuk skala besar...",
      imageUrl: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a",
      date: "Februari 22, 2025",
    },
    {
      title: "Keamanan Website: Cara Melindungi Data Anda",
      excerpt:
        "Keamanan web adalah aspek penting yang tidak boleh diabaikan...",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce",
      date: "Maret 7, 2025",
    },
    {
      title: "Menjadi Fullstack Developer",
      excerpt:
        "Menjadi Fullstack Developer membutuhkan pemahaman frontend dan backend...",
      imageUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
      date: "Maret 10, 2025",
    },
  ];

  return (
    <section className="py-8 md:mt-10 mt-0 ">
      <div className="flex rounded-2xl bg-secondary text-white lg:h-96 md:h-72 sm:h-60 h-48 border">
        <div className="lg:w-[70%] md:w-[80%] w-[85%]  h-full flex  lg:pl-8 md:pl-4 pl-4 space-x-6 justify-start items-center">
          <div className="">
            <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-sm lg:leading-[50px] md:leading-6 font-[700] lg:w-[80%] w-[95%]">
              Kembangkan Bisnis Melalui Transformasi Digital Bersama Alamasta
            </h2>
            <h4 className="mt-4 lg:w-[80%] w-full lg:flex md:flex hidden">
              Konsultasikan kebutuhan bisnismu untuk mendapatkan penawaran
              website, mobile apps, ERP atau custom software lainnya.
            </h4>
            <div className="mt-6 ">
              <Link
                href={`/${locale}/contact`}
                className="border-primary md:text-base text-xs  border md:px-5 px-3 py-2 rounded-md"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
        <Image
          className="lg:w-[40%] justify-end w-[20%] rounded-r-xl h-full object-cover"
          width={500}
          height={500}
          src={"https://images.unsplash.com/photo-1582005450386-52b25f82d9bb"}
          alt={"digital bisnis"}
        />
      </div>
      <div className="w-full mt-12 justify-between flex items-center">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Artikel Terbaru
        </h1>
      </div>

      <div className="grid mt-5 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 justify-center gap-4">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            imageUrl={post.imageUrl}
            date={post.date}
          />
        ))}
      </div>
    </section>
  );
};

export default ListBlog;
