import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { FaCaretDown, FaSearch } from "react-icons/fa";

import Link from "next/link";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link href="/news" className="flex items-center">
        <li className="p-1 text-sm font-semibold text-gray-600/80 hover:text-gray-700">
          Berita
        </li>
      </Link>

      <Link href="/product" className="flex items-center">
        <li className="p-1 text-sm font-semibold text-gray-600/80 hover:text-gray-700">
          Produk
        </li>
      </Link>

      <li>
        <Menu placement="top-start">
          <MenuHandler>
            <div className="flex text-sm justify-start items-center p-1 font-semibold text-gray-600/80 hover:text-gray-700 cursor-pointer">
              Profil <FaCaretDown />{" "}
            </div>
          </MenuHandler>
          <MenuList className="text-gray-700 bgBlur">
            <Link href="/profile/organizationalStructure" className="outline-none">
              <MenuItem>Struktur Organisasi</MenuItem>
            </Link>
            <Link href="/profile/management" className="outline-none">
              <MenuItem>Profil Manajemen</MenuItem>
            </Link>
            <Link href="/profile/region" className="outline-none">
              <MenuItem>Wilayah Kerja</MenuItem>
            </Link>
            <Link href="/profile/awardsAndRecognition" className="outline-none">
              <MenuItem>Sertivikat dan Penghargaan</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </li>

      <li>
        <Menu placement="top-start">
          <MenuHandler>
            <div className="flex text-sm justify-start items-center p-1 font-semibold text-gray-600/80 hover:text-gray-700 cursor-pointer">
              Investor <FaCaretDown />{" "}
            </div>
          </MenuHandler>
          <MenuList className="text-gray-700 bgBlur">
            <Link href="/investor/annualReport" className="outline-none">
              <MenuItem>Laporan Tahunan</MenuItem>
            </Link>
            <Link href="/investor/financialStatements" className="outline-none">
              <MenuItem>Laporan Keuangan</MenuItem>
            </Link>
            <Link href="/investor/prospect" className="outline-none">
              <MenuItem>Prospek</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </li>

      <li>
        <Menu placement="top-start">
          <MenuHandler>
            <div className="flex text-sm justify-start items-center p-1 font-semibold text-gray-600/80 hover:text-gray-700 cursor-pointer">
              Keberlanjutan <FaCaretDown />{" "}
            </div>
          </MenuHandler>
          <MenuList className="text-gray-700 bgBlur">
            <Link href="/continuity/commitment" className="outline-none">
              <MenuItem>Komitmen Keberlanjutan</MenuItem>
            </Link>
            <Link href="/continuity/communityResource" className="outline-none">
              <MenuItem>Pengembangan Sumberdaya Masyarakat</MenuItem>
            </Link>
            <Link href="/continuity/efficiency" className="outline-none">
              <MenuItem>Evisiensi Sumberdaya Dan Perubahan Iklim</MenuItem>
            </Link>
            <Link href="/continuity/complaintHandling" className="outline-none">
              <MenuItem>Komunikasi Dan Penanganan Keluhan</MenuItem>
            </Link>
            <Link href="/continuity/report" className="outline-none">
              <MenuItem>Laporan Keberlanjutan</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </li>
      <li className="p-1 text-sm font-semibold text-gray-600/80 hover:text-gray-700">
        <Link href="/career" className="flex items-center">
          Karir
        </Link>
      </li>
      <li className="p-1 text-sm font-semibold text-gray-600/80 hover:text-gray-700">
        <Link href="/FAQ" className="flex items-center">
          FAQ
        </Link>
      </li>

      {/* <div className="relative text-gray-600">
        <input
          type="search"
          name="cari"
          placeholder="Cari sesuatu"
          className="bg-white h-8 px-5  rounded-full text-sm focus:outline-none focus:outline-green-700/50 focus:border-none border border-gray-500/50 w-full "
        />
      </div> */}
    </ul>
  );

  return (
    <header className="sticky top-0 z-10 mx-auto" style={{maxWidth:"1700px"}}>
      <Navbar
        fullWidth={true}
        className="mx-auto w-full py-2 overflow-hidden px-4 lg:px-10 lg:py-4 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-70"
      >
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link
            href="/"
            className="mr-4 font-bold cursor-pointer py-1 text-gray-700"
          >
            NUSAINA
          </Link>
          <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">{navList}</div>
        </MobileNav>
      </Navbar>
    </header>
  );
}
