import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='bg-white text-gray-600 pt-10 border-t'>
        <div className='container flex flex-col md:flex-row justify-between mx-auto px-10 md:max-w-5xl'>
            <div className='flex flex-col w-full md:w-1/3'>
                <div className="text-4xl font-bold font-poppins">
                    <span className="text-secondary">nugas</span>
                    <span className="text-primary">king.</span>
                </div>
                <p className="italic text-accent">
                "Ahli dalam memberikan solusi digital, kami adalah partner andal untuk semua kebutuhan teknologi Anda."
                </p>

                <div>
                    <h2 className='text-2xl font-bold mt-10'>Ikuti Kami</h2>
                    <ul className="flex gap-2">
                        <li>
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
            <div className='mt-6 lg:mt-0'>
                <h1 className='text-2xl font-bold mb-6'>Layanan</h1>
                <ul className='space-y-2 text-accent'>
                    <li>
                        <a href="#">Website Development</a>
                    </li>
                    <li>
                        <a href="#">Website Design</a>
                    </li>
                    <li>
                        <a href="#">Website Maintenance</a>
                    </li>
                    <li>
                        <a href="#">Mobile App Development</a>
                    </li>
                </ul>
            </div>
            <div className='mt-6 lg:mt-0'>
                <h1 className='text-2xl font-bold mb-6'>Informasi</h1>
                <ul className='space-y-2 text-accent'>
                    <li>
                        <a href="#">Kontak Kami</a>
                    </li>
                    <li>
                        <a href="#">Pusat Bantuan</a>
                    </li>
                    <li>
                        <a href="#">FAQ Layanan</a>
                    </li>
                    <li>
                        <a href="#">Berita</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='bg-secondary text-white mt-10 py-2 px-10'>
            <div className='mx-auto max-w-5xl flex flex-col lg:flex-row justify-between text-sm'>
                <p>© 2024 nugasking - Semua hak cipta dilindungi Undang-Undang </p>
                <ul className='flex gap-4 mt-4 lg:mt-0'>
                    <li>
                        <a href="#">Ketentuan Umum</a>
                    </li>
                    <li>
                        <a href="#">Privasi & Kerahasiaan</a>
                    </li>
                    <li>
                        <a href="#">Syarat & Ketentuan</a>
                    </li>
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
