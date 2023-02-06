import Image from "next/image";
import React from "react";

export default function Home5() {
  return (
    <section>
      <div className="container mx-auto bg-white max-w-7xl dark:bg-gray-800">
        <div className="flex flex-wrap lg:-mx-8">
          <div className="w-full lg:w-1/2">
            <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
              <h1 className="mb-4 text-2xl font-extrabold leading-8 text-gray-800 dark:text-white sm:text-3xl sm:leading-9">
                VISI DAN MISI PERUSAHAAN
              </h1>
              <p className="mb-8 leading-loose font-semibold text-gray-700 dark:text-gray-300">
                MENJADIKAN PERUSAHAAN AGROBISNIS TERPADU DAN TERDEPAN DI
                INDONESIA BAGIAN TIMUR YANG BERBASIS EKONOMI KERAKYATAN.
              </p>

              <div className="shadow-lg overflow-hidden rounded-lg">
                <Image
                  src="/1.jpg"
                  alt="pabrik"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-8 lg:w-1/2">
            <ul className="space-y-5">
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex items-center justify-center w-14 h-14 mx-auto text-2xl font-bold text-green-600 rounded-full font-heading bg-green-50">
                    1
                  </span>
                </div>
                <div className="px-4">
                  <p className="leading-loose font-semibold text-gray-700 dark:text-gray-300">
                    Mengembangkan perkebunan kelapa sawit dengan produk yang
                    berkwalitas dan mempunyai daya saing tinggi.
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex items-center justify-center w-14 h-14 mx-auto text-2xl font-bold text-green-600 rounded-full font-heading bg-green-50">
                    2
                  </span>
                </div>
                <div className="px-4">
                  <p className="leading-loose font-semibold text-gray-700 dark:text-gray-300">
                    Mengelola portofolio bisnis dengan pola manajemen moderen
                    yang melibatkan tenaga profesional untuk menghasilkan nilai
                    tambah bagi stakeholder.
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex items-center justify-center w-14 h-14 mx-auto text-2xl font-bold text-green-600 rounded-full font-heading bg-green-50">
                    3
                  </span>
                </div>
                <div className="px-4">
                  <p className="leading-loose font-semibold text-gray-700 dark:text-gray-300">
                    Mengembangkan sumber daya manusia yang mempunyai etika kerja
                    dan produktifitas tinggi.
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex items-center justify-center w-14 h-14 mx-auto text-2xl font-bold text-green-600 rounded-full font-heading bg-green-50">
                    4
                  </span>
                </div>
                <div className="px-4">
                  <p className="leading-loose font-semibold text-gray-700 dark:text-gray-300">
                    Memberikan kontribusi bagi pengembangan regional dan
                    nasional melalui pemberdayaan ekonomi kerakyatan dan
                    pengentasan kemiskinan dengan membuka lapangan kerja seluas
                    - luasnya.
                  </p>
                </div>
              </li>
              <li className="flex -mx-4">
                <div className="px-4">
                  <span className="flex items-center justify-center w-14 h-14 mx-auto text-2xl font-bold text-green-600 rounded-full font-heading bg-green-50">
                    5
                  </span>
                </div>
                <div className="px-4">
                  <p className="leading-loose font-semibold text-gray-700 dark:text-gray-300">
                    Dengan pola kemitraan <em>(Corporate Farming)</em>,
                    mengembangkan usaha terpadu yang melibatkan masyarakat dan
                    karyawan sebagai mitra usaha.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
