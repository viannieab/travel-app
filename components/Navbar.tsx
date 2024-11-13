"use client"
import { useState } from "react"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex h-full gap-12 py-5">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Desktop Login Button */}
      <div className="hidden lg:flex flexCenter">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>

      {/* Mobile Menu Button */}
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-200 z-20 lg:hidden text-gray-900">
          <ul className="flex flex-col items-center py-5">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 cursor-pointer py-2 transition-all hover:font-bold"
                onClick={() => setMenuOpen(false)} // Close menu after clicking a link
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar
