import React from "react";
import Image from "next/image";

export default function Home4() {
  return (
    <div className="relative container max-w-screen-xl mt-24 mx-auto bg-white dark:bg-gray-800 ">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
            <h1 className="mt-2 text-2xl font-extrabold leading-8 text-gray-800 dark:text-white sm:text-3xl sm:leading-9">
              SEJARAH SINGKAT
            </h1>
            <p className="mt-4 text-md text-justify leading-6 text-gray-500 dark:text-gray-300">
              Nusaina Group merupakan perusahaan moderen yang bergerak diindustri perkebunan dan pengelolaan kelapa sawit sesuai dengan ______ yang di terbitkan pada ______ . Nusaina Group didirikan sejak tanggal ___-___-1999 oleh Dr. SIHAR P.H. SITORUS, BSBA., M.B.A. Kegiatan usaha utama Perseroan yaitu penanaman tanaman kelapa sawit, pemanenan dan pengolahan TBS yang menghasilkan CPO serta Palm Kernel. Kebun dan fasilitas pengolahan TBS Perseroan berada di Kabupaten Maluku Tengah, Provinsi Maluku. 
            </p>
          </div>
          <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
                <Image
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  height={100}
                  src="/dronepalm.jpg"
                  alt="1"
                />
                <Image
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  height={100}
                  src="/bibit-palm.webp"
                  alt="2"
                />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <Image
                  className="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  height={100}
                  src="/sawit.jpg"
                  alt="3"
                />
                <Image
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  height={100}
                  src="/palm--oil.webp"
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
