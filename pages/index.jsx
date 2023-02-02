import Layout from "../components/Layout";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import Head from "next/head";

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
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Indonesia" />
        <meta name="author" content="@gpjen & @arWahyu" />
      </Head>
      <Layout title="Home">
        <div className="relative">
          <div className="hero1 backdrop-sepia-0 bg-white/30 relative shadow top-0 flex items-center justify-center">
            <section className="relative px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative bg-white/80 hover:bg-white rounded-full py-1 px-3 text-sm leading-6 text-gray-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Berita terbaru{" "}
                    <Link
                      href="/news"
                      className="font-semibold text-indigo-600"
                    >
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Klik disini <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    PT.NUSAINA GROUP
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-white">
                    Pengelolaan pabrik kelapa sawit terbesar yang terletak
                    dimaluku tengah. Pengelolaan produksi terstruktur juga
                    moderen dengen mengedepankan keberlangsungan linghungan dan
                    sumber daya manusia.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6 text-sm">
                    <Link href="/login">
                      <Button
                        color="green"
                        className="hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out"
                      >
                        {" "}
                        Masuk akun{" "}
                      </Button>
                    </Link>
                    <Link
                      scroll={false}
                      href="#hero2"
                      className=" py-1 font-semibold leading-7 text-white hover:scale-105 transition-all duration-200 ease-in-out"
                    >
                      Informasi Lain <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC"></stop>
                      <stop offset="1" stopColor="#FF80B5"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </section>
          </div>

          <div
            id="hero2"
            className=" hero2 shadow top-0 flex flex-col items-center justify-cente bg-white py-11"
          >
            <section className="text-gray-600 body-font container">
              <div className=" px-5 py-20 mx-auto">
                <div className="text-center mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    Raw Denim Heirloom Man Braid
                  </h1>
                  <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine, ramps
                    microdosing banh mi pug.
                  </p>
                  <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                  </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        Shooting Stars
                      </h2>
                      <p className="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine, ramps
                        microdosing banh mi pug VHS try-hard.
                      </p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        The Catalyzer
                      </h2>
                      <p className="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine, ramps
                        microdosing banh mi pug VHS try-hard.
                      </p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        Neptune
                      </h2>
                      <p className="leading-relaxed text-base">
                        Blue bottle crucifix vinyl post-ironic four dollar toast
                        vegan taxidermy. Gastropub indxgo juice poutine, ramps
                        microdosing banh mi pug VHS try-hard.
                      </p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className=" hero3 shadow top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
            <h2 className="text-4xl">The Third Title</h2>
            <p>Scroll Down</p>
          </div>
          <div className=" hero4 shadow top-0 h-screen flex flex-col items-center justify-center bg-pink-700 text-white">
            <h2 className="text-4xl">The Fourth Title</h2>
          </div>
        </div>
      </Layout>
    </>
  );
}
