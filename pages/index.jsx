import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";

import Maps from "@/components/Maps";
import Home1 from "@/components/Home1";
import Home2 from "@/components/Home2";
import ContactUs from "@/components/ContactUs";
import Home4 from "@/components/Home4";
import Home5 from "@/components/Home5";

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
      <Layout title="Home">
        <div className="relative">
          <div className="hero1 backdrop-sepia-0 bg-white/30 relative shadow flex items-center justify-center">
            <Home1 />
          </div>
          <div
            id="hero2"
            className=" relative hero2 flex flex-col items-center justify-cente bg-white py-11"
          >
            <div>
              <Home4 />
            </div>
          </div>

          <div className=" hero4 top-0 flex flex-col items-center justify-center mb-24">
            <Home5 />
          </div>

          <div className=" hero3 py-10 shadow top-0 flex flex-col items-center justify-center bg-blue-gray-700 text-white">
            <h1 className="text-2xl mt-10 pb-8 font-bold">
              BERITA TERBARU
            </h1>
            <div className="container">
              <Maps />
            </div>
          </div>
          <div className="hero5 py-10">
            <h1 className="text-2xl mt-10 pb-8 font-bold text-center text-gray-800">
              KONTAK KAMI
            </h1>
            <ContactUs />
          </div>
        </div>
      </Layout>
    </>
  );
}
