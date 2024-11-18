import { IconHexagonLetterSFilled } from "@tabler/icons-react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import {
  RiProjectorLine,
  RiCodeLine,
  RiBriefcaseLine,
  RiBookLine,
} from "react-icons/ri";
import React, { useState, useEffect } from "react";

interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about", icon: <AiOutlineHome /> },
  { label: "Projects", href: "#projects", icon: <RiProjectorLine /> },
  { label: "Skills", href: "#skills", icon: <RiCodeLine /> },
  { label: "Experience", href: "#experience", icon: <RiBriefcaseLine /> },
  { label: "Education", href: "#education", icon: <RiBookLine /> },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center transition-all duration-300 border-b-2 border-purple-950 ${
        isScrolled
          ? "bg-gradient-to-r from-purple-900/80 via-black/70 to-purple-800/80 shadow-lg backdrop-blur-md"
          : "bg-bgColor"
      }`}
    >
      <div className="flex items-center justify-between mx-auto w-full px-5 md:px-10">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a
            href="/"
            className="flex items-center gap-3 hover:scale-105 transition-transform duration-500"
          >
            <IconHexagonLetterSFilled size={50} className="text-primaryColor" />
            <span className="text-2xl font-extrabold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-primaryColor via-teal-300 to-pink-400">
              Sagnik&apos;s Portfolio
            </span>
          </a>
        </div>

        {/* Navbar Links (Desktop) */}
        <nav className="hidden xl:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map(({ label, href, icon }, index) => (
            <a
              key={index}
              href={href}
              className="flex items-center gap-2 text-textColor text-xl font-rubik font-semibold hover:text-primaryColor transition-transform duration-500 hover:scale-110"
            >
              {icon}
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="xl:hidden text-textColor text-2xl transition-transform duration-300"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobiles & Tablets Menu */}
      {isMenuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-bgColor shadow-lg py-4 text-center xl:hidden">
          {navLinks.map(({ label, href, icon }, index) => (
            <a
              key={index}
              href={href}
              onClick={toggleMenu}
              className="flex items-center justify-center gap-2 text-white text-lg font-rubik font-semibold py-2 hover:text-primaryColor transition-all duration-500 hover:scale-110"
            >
              {icon}
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
