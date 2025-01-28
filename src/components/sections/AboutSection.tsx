import Image from 'next/image'
import React from 'react'

function AboutSection() {
  return (
    <section className="h-auto py-5">
      <div className="px-4 sm:px-6 lg:px-10">
        <h1 className="text-2xl font-bold text-secondary">
            Kolaborasi bersama kami, selesaikan masalah tugasmu
        </h1>
        <p className="text-accent mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg">
            Nugasking adalah penyedia layanan profesional yang bergerak di bidang teknologi digital, khususnya jasa joki tugas pemrograman, pengembangan website, dan aplikasi mobile. Dengan pendekatan yang mengutamakan kualitas dan efisiensi, kami hadir untuk membantu individu maupun bisnis menyelesaikan tantangan teknologi dengan solusi yang inovatif dan sesuai kebutuhan.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[100px] sm:h-[100px] lg:h-[200px] overflow-hidden">
        <Image
          src="/images/illustration.png"
          alt="Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-6 lg:px-10 gap-10 mt-5">
        {/* Left Content */}
        <div className="text-accent text-sm sm:text-base lg:text-lg">
          <p className="mb-6">
            Kami percaya bahwa setiap proyek adalah unik, sehingga kami selalu berkomitmen untuk memberikan layanan yang disesuaikan secara personal. Tim kami terdiri dari ahli yang berpengalaman di berbagai bidang teknologi, siap mendampingi Anda mulai dari perencanaan hingga penyelesaian tugas atau proyek. Hasil yang cepat dan memuaskan adalah prioritas kami.
          </p>
          <p>
            Dengan Nugasking, Anda tidak hanya mendapatkan hasil kerja, tetapi juga partner yang memahami kebutuhan Anda. Kami selalu berusaha menjaga kepercayaan pelanggan dengan layanan yang transparan, profesional, dan tepat waktu. Mari wujudkan ide Anda menjadi solusi digital yang nyata bersama kami!
          </p>
        </div>

        {/* Right Content */}
        <div className='flex flex-col items-center lg:flex-none lg:items-start'>
          <h2 className="text-lg font-bold text-secondary lg:text-2xl">
            Pencapaian Kami
          </h2>
          <div className="flex gap-5 mt-6 xl:mr-52 lg:mr-32">
            {/* Achievement 1 */}
            <div className="w-1/2 lg:w-auto text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary">115+</div>
              <p className="text-accent mt-2">Proyek Selesai</p>
            </div>
            {/* Achievement 2 */}
            <div className="w-1/2 lg:w-auto text-center">
              <div className="text-5xl lg:text-6xl font-bold text-primary">50+</div>
              <p className="text-accent mt-2">Klien Puas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
