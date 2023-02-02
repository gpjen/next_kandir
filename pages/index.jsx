import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";

import Maps from "@/components/Maps";
import Home1 from "@/components/Home1";
import Home2 from "@/components/Home2";

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
          <div className="hero1 backdrop-sepia-0 bg-white/30 relative shadow top-0 flex items-center justify-center">
            <Home1 />
          </div>
          <div
            id="hero2"
            className=" hero2 shadow top-0 flex flex-col items-center justify-cente bg-white py-11"
          >
            <div className="container">
              <Home2 />
            </div>
          </div>

          <div className=" hero3 shadow top-0 h-screen flex flex-col items-center justify-center bg-green-900 text-white">
            <h1 className="text-2xl pb-8 font-bold">
              PETA WILAYAH NUSAINA GROUP
            </h1>
            <div className="container">
              <Maps />
            </div>
          </div>
          <div className=" hero4 shadow top-0 h-screen flex flex-col items-center justify-center bg-pink-700 text-white">
            <h2 className="text-4xl">The Fourth Title</h2>
          </div>
        </div>
      </Layout>
    </>
  );
}
