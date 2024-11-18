import { IconHexagonLetterSFilled } from "@tabler/icons-react";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { SiKaggle, SiLeetcode } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-primaryColor fixed bottom-0 left-0 w-full bg-bgColor text-textColor py-4 shadow-md z-50 hidden md:block">
      <div className="text-3xl md-mx:text-2xl text-primaryColor font-semibold text-center">
        Sagnik Dey
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-10 gap-6">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4">
          <IconHexagonLetterSFilled size={40} className="text-primaryColor" />
          <span className="text-lg font-bold text-primaryColor">
            Sagnik&apos;s Portfolio
          </span>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Sagnik Dey. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 items-center">
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textColor hover:text-primaryColor transition-transform duration-300 hover:scale-110"
          >
            <SiLeetcode size={25} />
          </a>
          <a
            href="https://kaggle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textColor hover:text-primaryColor transition-transform duration-300 hover:scale-110"
          >
            <SiKaggle size={25} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textColor hover:text-primaryColor transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textColor hover:text-primaryColor transition-transform duration-300 hover:scale-110"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textColor hover:text-primaryColor transition-transform duration-300 hover:scale-110"
          >
            <FaUpwork size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
