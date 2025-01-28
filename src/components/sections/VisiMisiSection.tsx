import React from 'react';

function VisiMisiSection() {
  return (
    <section className="h-auto sm:h-screen flex flex-col px-4 sm:px-6 lg:px-10 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-secondary mb-8 text-center sm:text-left">
        Visi dan Misi
      </h1>

      <div className="flex flex-col sm:flex-row items-start gap-10 max-w-7xl mx-auto">
        <div className="sm:w-1/2">
          <p className="text-accent text-sm sm:text-lg leading-relaxed">
            Menjadi mitra terpercaya dalam memberikan solusi digital berkualitas tinggi yang membantu individu dan bisnis mencapai tujuan mereka dengan mudah dan efisien.
          </p>
        </div>

        <div className="sm:w-1/2">
          <ol className="list-disc list-outside text-accent text-sm sm:text-lg leading-relaxed space-y-4">
            <li>
              Memberikan layanan profesional di bidang joki tugas pemrograman, pengembangan website, dan aplikasi mobile dengan hasil terbaik dan tepat waktu.
            </li>
            <li>
              Menghadirkan solusi yang inovatif dan disesuaikan dengan kebutuhan setiap pelanggan.
            </li>
            <li>
              Membangun kepercayaan dan hubungan jangka panjang dengan pelanggan melalui transparansi dan komunikasi yang baik.
            </li>
            <li>
              Terus meningkatkan kompetensi tim untuk mengikuti perkembangan teknologi terkini.
            </li>
            <li>
              Mendukung pelanggan dalam mengatasi tantangan teknologi dan mewujudkan ide kreatif menjadi kenyataan.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default VisiMisiSection;
