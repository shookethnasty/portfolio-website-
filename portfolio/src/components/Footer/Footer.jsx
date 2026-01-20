import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-[7vw] md:px-[7vw] lg:px-[20vw] py-10">
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {year} <span className="text-white">Harshit Chordiya</span>. All rights reserved.
          <span className="block md:inline md:ml-2">
            Built with <span className="text-white">React</span> +{" "}
            <span className="text-white">Tailwind</span>.
          </span>
        </p>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/shookethnasty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8245ec] transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/harshit-chordiya-7b1711281/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#8245ec] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>

          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
          >
            Back to top
            <FiArrowUpRight className="text-[#8245ec] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
