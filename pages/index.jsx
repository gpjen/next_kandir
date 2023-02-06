import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";

import Maps from "@/components/Maps";
import Home1 from "@/components/Home1";
import Home2 from "@/components/Home2";
import ContactUs from "@/components/ContactUs";
import Home4 from "@/components/Home4";
import Home5 from "@/components/Home5";
import Home3 from "@/components/Home3";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda | NUSAINA GROUP</title>
        <meta name="title" content="Home Page | NUSAINA GROUP" />
        <link rel="shortcut icon" href="/logo.webp" type="image/x-icon" />
        <meta
          name="description"
          content="Pengelolaan pabrik kelapa sawit terbesar yang terletak dimaluku tengah. Pengelolaan produksi terstruktur juga moderen dengen mengedepankan keberlangsungan linghungan dan sumber daya manusia."
        />
        <meta
          name="keywords"
          content="Kelapa, sawit, maluku, pabrik, modern, ambon, seram, kobi, bula,minyak nabati, kernel, CPO, PKS, bibit."
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Indonesia" />
        <meta name="author" content="@gpjen & @arWahyu" />
      </Head>
      <Layout title="Home ">
        <div className="relative">
          <div className="hero1 backdrop-sepia-0 bg-white/30 relative shadow flex items-center justify-center xl:-mt-24 ">
            <Home1 />
          </div>
          <div id="hero2" className="hero2 pb-11">
            <Home4 />
          </div>
          <div className=" hero41 top-0 flex flex-col items-center justify-center mt-16 mb-32">
            <h1 className="container text-center text-2xl mt-16 mb-5 font-extrabold leading-8 text-gray-800 dark:text-white sm:text-3xl sm:leading-9">
              NUSAINA GROUP MENGELOLA
            </h1>
            <Home3 />
          </div>
          <div className=" hero4 top-0 flex flex-col items-center justify-center mb-28">
            <Home5 />
          </div>
          <div className=" hero3 py-10 shadow top-0 flex flex-col items-center justify-center bg-blue-gray-700 text-white">
            <h1 className="text-2xl mb-8 font-extrabold leading-8 text-white dark:text-gray-300 sm:text-3xl sm:leading-9">
              BERITA TERBARU
            </h1>
            <div className="container">
              <Maps />
            </div>
          </div>
          <div className="hero5 py-20">
            <h1 className="text-2xl font-extrabold leading-8 mb-5 dark:text-white sm:text-3xl sm:leading-9 text-center text-gray-800">
              KONTAK KAMI
            </h1>
            <ContactUs />
          </div>
        </div>
      </Layout>
    </>
  );
}
