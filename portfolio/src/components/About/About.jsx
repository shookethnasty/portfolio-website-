import React from "react";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../../assets/Profile.JPG";

const About = () => {
  return (
    <section
      id="about"
      className="px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans pt-10 md:pt-14 lg:pt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-16">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Harshit Chordiya
          </h1>

          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300">
            Software Engineer · Full-Stack · Problem Solver
          </h2>

          {/* Subtle typewriter (less dominant) */}
          <p className="mt-5 text-sm sm:text-base text-gray-400">
            Interests:&nbsp;
            <span className="text-[#8245ec] font-semibold">
              <Typewriter
                words={[
                  "Cloud Engineering",
                  "Full-Stack Development",
                  "Data Pipelines",
                  "Scalable Software",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </span>
          </p>

          {/* Your bio (exact text, formatted nicely) */}
          <div className="mt-10 space-y-5 text-base sm:text-lg text-gray-400 leading-relaxed">
            <p>
              I’m a Computer Science graduate with a focus on cloud engineering and full-stack
              development. I enjoy working across the stack — from designing clean, intuitive user
              interfaces to building reliable backend services, APIs, and data pipelines that support
              real-world applications.
            </p>

            <p>
              I’ve worked as a Software Engineer Intern and Freelance Full-Stack Developer,
              contributing to projects involving cloud deployment, databases, and AI-assisted data
              processing. I value clarity, structure, and thoughtful problem-solving, and I’m
              motivated by building software that is practical, scalable, and easy to maintain.
            </p>

            <p>
              Outside of work, I stay active through regular training and swimming, and I value
              discipline, consistency, and long-term growth.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/Harshit-Chordiya-Resume.pdf"
              download="Harshit-Chordiya-Resume.pdf"
              className="inline-flex items-center justify-center text-white py-3 px-8 rounded-full text-base font-semibold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 16px rgba(130,69,236,0.6)",
              }}
            >
              Download Resume
            </a>

            <a
              href="/Harshit-Chordiya-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center text-white py-3 px-8 rounded-full text-base font-semibold transition duration-300 transform hover:scale-105 border border-[#8245ec]/60 hover:border-[#8245ec]"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={18}
            tiltMaxAngleY={18}
            perspective={1000}
            scale={1.04}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Harshit Chordiya"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
