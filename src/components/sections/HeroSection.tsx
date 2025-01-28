import React from 'react';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center p-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgroundHero.png"
          alt="Background"
          width={1000}
          height={1000}
          objectFit="cover"
          objectPosition="center"
          priority
          className='w-full h-full object-cover object-center'
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 mt-16 max-w-xl text-secondary">
          Bingung dengan Koding? Kami Hadir dengan Solusi Terbaik dan Profesional!
        </h1>
        <p className="text-sm sm:text-lg mb-8 max-w-4xl text-accent">
          Dapatkan bantuan terbaik untuk tugas pemrograman, pengembangan website, hingga aplikasi mobile. 
          Tim profesional kami siap memberikan hasil terbaik sesuai kebutuhan kalian.
        </p>
        <a
          href="#"
          className="flex bg-green-500 text-white font-bold px-4 py-2 rounded-xl items-center hover:bg-green-600 transition duration-300"
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-10">
        <div className="flex flex-col p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition duration-300">
          <Image src="/icons/dollar.png" alt="Harga Terjangkau" width={40} height={40} />
          <h3 className="text-lg font-bold mt-4 text-secondary">Harga Terjangkau</h3>
          <p className="text-sm sm:text-base text-accent">
            Layanan Berkualitas dengan Harga Terjangkau
          </p>
        </div>
        <div className="flex flex-col p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition duration-300">
          <Image src="/icons/history.png" alt="Pengerjaan Cepat" width={40} height={40} />
          <h3 className="text-lg font-bold mt-4 text-secondary">Pengerjaan Cepat</h3>
          <p className="text-sm sm:text-base text-accent">
            Pengerjaan Cepat dan Tepat, Hasil Maksimal
          </p>
        </div>
        <div className="flex flex-col p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition duration-300">
          <Image src="/icons/todo.png" alt="Keahlian Terpercaya" width={40} height={40} />
          <h3 className="text-lg font-bold mt-4 text-secondary">Keahlian Terpercaya</h3>
          <p className="text-sm sm:text-base text-accent">
            Keahlian Terpercaya untuk Setiap Proyek Digital Anda!
          </p>
        </div>
        <div className="flex flex-col p-6 border rounded-lg shadow-sm bg-white hover:shadow-lg transition duration-300">
          <Image src="/icons/service.png" alt="Customer Care" width={40} height={40} />
          <h3 className="text-lg font-bold mt-4 text-secondary">24h Customer Care</h3>
          <p className="text-sm sm:text-base text-accent">
            Layanan Pelanggan 24 Jam, Siap Membantu Kapan Saja!
          </p>
        </div>
      </div>
      <a href="" className="text-primary text-md mt-5">
        Lihat portofolio kami
      </a>
    </section>
  );
}

export default HeroSection;
