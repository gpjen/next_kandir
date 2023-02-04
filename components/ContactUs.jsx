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
      <div className="container flex justify-center items-center gap-3 flex-col-reverse md:flex-row">
        <div className="w-1/2 py-10">
          <h4 className="text-center mb-5 font-bold text-gray-700">
            Sosial Media
          </h4>
          <span className="mx-auto flex justify-center items-center">
            <Link
              href="https://facebook.com/nusainagroup"
              className="text-xl text-gray-500 hover:text-gray-700 hover:scale-110"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://youtube.com/nusainagroup"
              className="ml-3 text-xl text-gray-500 hover:text-gray-700 hover:scale-110"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://twitter.com/nusainagroup"
              className="ml-3 text-xl text-gray-500 hover:text-gray-700 hover:scale-110"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://linkedin.com/nusainagroup"
              className="ml-3 text-xl text-gray-500 hover:text-gray-700 hover:scale-110"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://gmail.com/nusainagroup"
              className="ml-3 text-xl text-gray-500 hover:text-gray-700 hover:scale-110"
            >
              <FaEnvelope />
            </Link>
          </span>
        </div>
        <div className="w-1/2 p-5">
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
