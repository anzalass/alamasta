import React from 'react';
import Image from 'next/image';

function ClosingSection() {
  return (
    <section className="flex justify-center items-center w-full h-auto py-10 relative">
      <div className="relative w-full h-full flex justify-center items-center px-4 md:px-10">
        <Image
          src="/images/Frame.png"
          alt="dummyimage"
          width={1000}
          height={1000}
          className="object-cover h-[278px] rounded-lg"
        />
        <div className="absolute w-full md:w-[65%] h-full flex flex-col justify-center items-center text-center md:text-left">
          <div className="container">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">Belum yakin harus mulai darimana?</h1>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center md:justify-start mt-4">
              <p className="text-white text-sm sm:text-base lg:text-lg max-w-full md:max-w-5xl sm:px-30 md:0">
                Tidak perlu khawatir! Tim Nugasking siap membantu Anda menentukan langkah pertama yang tepat. Kami akan mendengarkan kebutuhan Anda, memberikan solusi yang sesuai, dan memandu Anda sepanjang proses.
              </p>
              <a
                href="#"
                className="flex bg-green-500 text-white font-bold m-auto p-2 md:w-[400px] rounded-xl items-center justify-center hover:bg-green-600 transition duration-300"
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClosingSection;