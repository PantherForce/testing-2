"use client";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/img/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="">
            <Image src={logo} height={120} width={160} alt="" />
          </div>
          <div className="hidden space-x-8 text-lg md:flex">
            <Link className="hover:text-gray-900" href="#home">
              Home
            </Link>
            <Link className="hover:text-gray-900" href="#about">
              About us
            </Link>
            <Link className="hover:text-gray-900" href="#services">
              Key Competencies
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              href="/about"
            >
              About us
            </Link>
            <Link className="hover:text-gray-900" href="#services">
              Key Competencies
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
