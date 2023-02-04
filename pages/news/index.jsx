import Layout from "@/components/Layout";
import { Button, Input } from "@material-tailwind/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <>
      <Head>
        <title>Berita | NUSAINA GROUP</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <Layout>
        <section className="w-full p-12 bg-white">
          <div className="container">
            <div className="flex items-end justify-between mb-12 header">
              <div className="title">
                <p className="mb-4 text-2xl font-bold text-gray-800">
                  Nusaina Portal
                </p>
                <p className=" font-light text-gray-400">
                  Temukan semua Berita, kegiatan dan artikel terbaru terkait
                  nusaina group
                </p>
              </div>
              <div className="text-end">
                <div className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                  <div className=" relative ">
                    <Input color="green" className="active:" />
                  </div>
                  <Button size="sm" color="green">
                    Cari
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-baseline flex-wrap gap-3">
              <div class="flex justify-center">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-100 shadow-lg">
                  <img
                    class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                    alt=""
                  />
                  <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">
                      Card title
                    </h5>
                    <p class="text-gray-700 text-base mb-4">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
