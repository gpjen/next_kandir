import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Home1() {
  return (
    <>
      <section className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative bg-white/80 hover:bg-white rounded-full py-1 px-3 text-sm leading-6 text-gray-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Berita terbaru{" "}
              <Link href="/news" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Klik disini <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              PT.NUSAINA GROUP
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Pengelolaan pabrik kelapa sawit terbesar yang terletak dimaluku
              tengah. Pengelolaan produksi terstruktur juga moderen dengen
              mengedepankan keberlangsungan linghungan dan sumber daya manusia.
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
                href="/#hero2"
                className=" py-1 font-semibold leading-7 text-white hover:scale-105 transition-all duration-200 ease-in-out"
              >
                Informasi Lain <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
