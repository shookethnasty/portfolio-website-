import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-[7vw] md:px-[7vw] lg:px-[20vw] py-10 border-t border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <p className="text-white font-semibold">
            Harshit Chordiya <span className="text-white/40">—</span>{" "}
            <span className="text-white/70">{year}</span>
          </p>
          <p className="text-sm text-white/50 mt-1">
            Built with React, Vite & Tailwind CSS.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:hchordiya@gmail.com"
            className="text-white/60 hover:text-[#8245ec] transition"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href="https://github.com/shookethnasty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#8245ec] transition"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshit-chordiya-7b1711281/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#8245ec] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
