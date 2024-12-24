'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  return (
    <header>
      <nav className="bg-sky-800 relative z-10">
        <ul className="flex items-center justify-between h-20 px-4 lg:px-8">
          {/* Logo Section */}
          <li className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="object-contain mt-20 ml-0"
            />
          </li>

          {/* Title */}
          <li className="text-xl sm:text-[15px] lg:text-2xl shadow-sm text-sky-200 font-bold text-center">
            Tuition Free Education Program on Latest Technologies
          </li>

          {/* Menu Icon for Small Screens */}
          <li className="md:hidden">
            <button
              aria-label="submit"
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </li>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-11">
            <li className="text-white hover:text-sky-200 font-medium">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white hover:text-sky-200 font-medium">
              <Link href="/Apply">Apply</Link>
            </li>
            <li className="text-white hover:text-sky-200 font-medium">
              <Link href="/Jobs">Jobs</Link>
            </li>
            <li className="text-white hover:text-sky-200 font-medium">
              <Link href="/Result">Result</Link>
            </li>
            <li className="text-white hover:text-sky-200 font-medium">
              <Link href="/Course">Course</Link>
            </li>
          </div>
        </ul>

        {/* Dropdown Menu for Small Screens */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-sky-800 md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li className="text-white hover:text-sky-200 font-medium">
                <Link href="/">Home</Link>
              </li>
              <li className="text-white hover:text-sky-200 font-medium">
                <Link href="/Apply">Apply</Link>
              </li>
              <li className="text-white hover:text-sky-200 font-medium">
                <Link href="/Jobs">Jobs</Link>
              </li>
              <li className="text-white hover:text-sky-200 font-medium">
                <Link href="/Result">Result</Link>
              </li>
              <li className="text-white hover:text-sky-200 font-medium">
                <Link href="/Course">Course</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
