import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";

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
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-semibold text-gray-600/80 hover:text-gray-700"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-semibold text-gray-600/80 hover:text-gray-700"
      >
        <Link href="/profile" className="flex items-center">
          Profil
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-semibold text-gray-600/80 hover:text-gray-700"
      >
        <Link href="/produc" className="flex items-center">
          Produk
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-semibold text-gray-600/80 hover:text-gray-700"
      >
        <Link href="/business" className="flex items-center">
          Bisnis
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-semibold text-gray-600/80 hover:text-gray-700"
      >
        <Link href="/next" className="flex items-center">
          Keberlanjutan
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-semibold text-gray-600/80 hover:text-gray-700"
      >
        <Link href="/career" className="flex items-center">
          Karir
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-semibold text-gray-600/80 hover:text-gray-700"
      >
        <Input color="green" label="Cari" size="md" />
      </Typography>
    </ul>
  );

  return (
    <header className="sticky top-0 z-10">
      <Navbar
        className="mx-auto py-2 px-4 lg:px-10 lg:py-4"
        blurred={true}
        fullWidth={true}
      >
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            className="mr-4 font-bold cursor-pointer py-1"
          >
            NUSAINA
          </Typography>
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
          <div className="container mx-auto">
            {navList}
          </div>
        </MobileNav>
      </Navbar>
    </header>
  );
}
