import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png"
import {FaYoutube, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope  } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="container bg-blue-gray-900 text-gray-600 body-font mx-auto" style={{maxWidth:"1700px"}}>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src={logo} height={35} alt="logo" />
          <span className="ml-1 font-semibold text-white text-xl">NUSAINA</span>
        </span>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 PT.Nusaina Group
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href='https://facebook.com/nusainagroup' className="text-xl text-white hover:text-gray-300 hover:scale-110" >
            <FaFacebook/>
          </Link>
          <Link href='https://youtube.com/nusainagroup' className="ml-3 text-xl text-white hover:text-gray-300 hover:scale-110" >
            <FaYoutube/>
          </Link>
          <Link href='https://twitter.com/nusainagroup' className="ml-3 text-xl text-white hover:text-gray-300 hover:scale-110" >
            <FaTwitter/>
          </Link>
          <Link href='https://linkedin.com/nusainagroup' className="ml-3 text-xl text-white hover:text-gray-300 hover:scale-110" >
            <FaLinkedin/>
          </Link>
          <Link href='https://gmail.com/nusainagroup' className="ml-3 text-xl text-white hover:text-gray-300 hover:scale-110" >
            <FaEnvelope/>
          </Link>
        </span>
      </div>
    </footer>
  );
}
