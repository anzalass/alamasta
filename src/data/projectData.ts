import { ProjectData } from "@/app/[locale]/projects/[slug]/page";

export const projects: ProjectData[] = [
  {
    id: 1,
    slug: "netflix",
    title: "Netflix",
    description:
      "Netflix Clone adalah proyek sederhana yang meniru antarmuka pengguna Netflix. Aplikasi ini memungkinkan pengguna untuk melihat daftar film dan serial dengan tampilan modern serta responsif.",
    category: "Website",
    img: ["/images/netflixweb.png", "/images/netflixmoblie.png"],
    tech: ["Tailwind CSS", "Next Js", "TMDB API"],
    live: "",
  },
  {
    id: 2,
    slug: "trading-bot",
    title: "Trading Bot Application",
    description:
      "Aplikasi Bot Trading yang dapat automasi pembelian dan penjualan pada platform trading Bybit, aplikasi ini menggunakan algoritma yang dapat menganalisa candle sebelum menentukan penjualan dan pembelian pada coin tertentu",
    category: "Website",
    img: ["/images/tradingmobile.png", "/images/tradingweb.png"],
    tech: ["Next Js", "Bybit API", "Tailwind CSS"],
    live: "",
  },
  {
    id: 3,
    title: "Ecommerce",
    slug: "ecommerce",
    description: "Aplikasi Ecommerce untuk kebutuhan bisnis klien",
    category: "Website",
    img: ["/images/storemobile.png", "/images/storeweb.png"],
    tech: ["Tailwind CSS", "Next Js"],
    live: "",
  },
];
