import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-[7vw] md:px-[7vw] lg:px-[20vw] py-24 text-center"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        Get in Touch
      </h2>

      <p className="mt-4 text-gray-400 max-w-xl mx-auto">
        Happy to talk with anyone running agentic systems in production — not demos, the messy
        version. Also open to conversations about roles, projects, and collaborations.
      </p>

      {/* Email Card */}
      <div className="mt-10 inline-flex items-center gap-4 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <FaEnvelope className="text-[#8245ec]" size={22} />
        <a
          href="mailto:hchordiya6@gmail.com"
          className="text-lg text-white hover:text-[#8245ec] transition"
        >
          hchordiya6@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
