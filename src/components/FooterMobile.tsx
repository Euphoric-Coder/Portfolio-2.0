import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { SiKaggle, SiLeetcode } from "react-icons/si";

const FooterMobile: React.FC = () => {
  return (
    <footer className="bg-bgColor text-textColor py-6 text-center block md:hidden">
      {/* Brand Name */}
      <h2 className="text-lg font-bold text-primaryColor mb-4">Sagnik Dey</h2>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primaryColor transition-transform duration-300"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primaryColor transition-transform duration-300"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://kaggle.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primaryColor transition-transform duration-300"
        >
          <SiKaggle size={25} />
        </a>
        <a
          href="https://leetcode.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primaryColor transition-transform duration-300"
        >
          <SiLeetcode size={25} />
        </a>
        <a
          href="https://upwork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primaryColor transition-transform duration-300"
        >
          <FaUpwork size={25} />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-sm">
        Copyright © {new Date().getFullYear()} Sagnik Dey
        <br />
        All Rights Reserved
      </p>
    </footer>
  );
};

export default FooterMobile;
