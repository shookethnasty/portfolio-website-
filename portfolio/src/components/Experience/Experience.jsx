import React from "react";
import Reveal from "../Reveal";

const EXPERIENCE = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed · Remote",
    date: "Mar 2025 – Present",
    tags: ["React", "Node.js", "REST APIs", "Databases", "Cloud Hosting", "CI/CD"],
    points: [
      "Building end-to-end web applications from requirements to deployment",
      "Developing responsive UIs, backend APIs, and database-driven features",
      "Managing deployment workflows and basic CI/CD for production-ready delivery",
      "Working directly with clients to iterate on features and solutions",
    ],
  },
  {
    role: "Software Developer",
    company: "RISC Club at RMIT University · Melbourne, Australia",
    date: "Apr 2024 – Dec 2024",
    tags: ["JavaScript", "Web Technologies", "Git", "Internal Platforms"],
    points: [
      "Contributed to full-stack features for internal research and innovation platforms",
      "Collaborated with stakeholders to translate requirements into working software components",
      "Assisted with system integration and feature enhancements across research tools",
      "Followed structured development practices including Git-based version control",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-[7vw] md:px-[7vw] lg:px-[20vw] py-24"
    >
      {/* Heading */}
      <Reveal>
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Experience
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Professional roles where I’ve applied my skills to real-world
            software development and delivery.
          </p>
        </div>
      </Reveal>

      {/* Experience Cards */}
      <div className="flex flex-col gap-10">
        {EXPERIENCE.map((exp, index) => (
          <Reveal key={index} delay={index * 0.15}>
            <div className="relative rounded-2xl border border-white/10 bg-[#0b0a1a]/60 p-8 overflow-hidden">
              {/* Glow */}
              <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl bg-gradient-to-br from-[#8245ec]/30 to-transparent" />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-400">{exp.date}</span>
              </div>

              <p className="text-gray-400 mb-4">{exp.company}</p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
