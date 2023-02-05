import { Button, Input, Textarea } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <div>
      <div className="container flex justify-center items-center gap-3 flex-col-reverse ">
        <div className="w-1/2 py-10">
          <h4 className="text-center mb-8 font-bold text-gray-700">
            Sosial Media
          </h4>
          <span className="mx-auto flex justify-center items-center">
            <Link
              href="https://facebook.com/nusainagroup"
              className="flex justify-center items-center text-xl  text-gray-500 hover:text-gray-700 hover:scale-110"
            >
              <FaFacebook /> <p className="lg:ml-3 font-bold hidden lg:inline">FACEBOOK</p> 
            </Link>
            <Link
              href="https://youtube.com/nusainagroup"
              className="flex justify-center items-center ml-20 text-xl text-gray-500 hover:text-gray-700 hover:scale-110"
            >
              <FaYoutube /> <p className="lg:ml-3 font-bold hidden lg:inline">YOUTUBE</p> 
            </Link>
            <Link
              href="https://twitter.com/nusainagroup"
              className="flex justify-center items-center ml-20 text-xl text-gray-500 hover:text-gray-700 hover:scale-110"
            >
              <FaTwitter /> <p className="lg:ml-3 font-bold hidden lg:inline">TWITTER</p> 
            </Link>
            <Link
              href="https://linkedin.com/nusainagroup"
              className="flex justify-center items-center ml-20 text-sm text-gray-500 hover:text-gray-700 hover:scale-110"
            >
              <FaLinkedin /> <p className="lg:ml-3 font-bold hidden lg:inline">LINKEDIN</p> 
            </Link>
          </span>
        </div>
        <div className="lg:w-1/2 p-5">
          <div className="flex gap-3 flex-wrap">
            <Input label="Nama" type="text" color="green" />
            <Input label="Email" type="email" color="green" />
            <Textarea label="Pesan" color="green" />
            <Button color="green" fullWidth={true}>KIRIM</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
