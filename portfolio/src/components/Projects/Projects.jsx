import React from "react";
import Reveal from "../Reveal";

const PROJECTS = [
  {
    title: "TidyLens — Mixed Reality Inventory Tracking System",
    description:
      "Built a Mixed Reality application for Meta Quest 3 with real-time object detection and database persistence. Engineered an end-to-end pipeline from Unity to a Flask backend with YOLOv5 integration, storing 1000+ detection records with 6DOF headset pose data in MySQL. Deployed wirelessly to a Node 30 server, optimized performance by fixing memory leaks (≈90% lag reduction), and implemented RESTful APIs for real-time image processing and spatial data tracking.",
    tech: [
      "Unity 3D",
      "C#",
      "Python",
      "Flask",
      "YOLOv5",
      "MySQL",
      "OpenXR",
      "REST APIs",
      "Linux Server Deployment",
    ],
    // links: [{ label: "GitHub", href: "https://..." }],
  },
  {
    title: "Climate Data Analyser",
    description:
      "A data-driven web application that enables users to explore and filter over 260 years of Australian climate and population data. Built on a relational database to support fast queries across large historical datasets and surfaced insights through a clean, minimal interface designed to improve research efficiency and usability.",
    tech: ["Java", "HTML", "CSS", "MySQL", "SQLite"],
    // links: [{ label: "GitHub", href: "https://..." }],
  },
  {
    title: "Auto Job Application Tracker",
    description:
      "Engineered an automation pipeline using Python, Cron, and web scraping to process large-scale job data. Implemented database workflows in DynamoDB and built secure APIs for data retrieval. Added monitoring logs and alert triggers to improve production reliability and observability.",
    tech: ["Python", "Flask", "DynamoDB", "AWS EC2", "Cron", "Web Scraping", "GenAI APIs"],
    // links: [{ label: "GitHub", href: "https://..." }],
  },
  {
    title: "Customisable Maze Builder for Minecraft",
    description:
      "A systems-level project that enables user-defined, scalable maze generation within Minecraft while preserving the surrounding environment. Implemented procedural generation logic using C++ and Assembly, supporting randomized outputs within defined constraints and integrating mechanisms to remove generated structures and restore the original terrain.",
    tech: ["C++", "Assembly"],
    // links: [{ label: "GitHub", href: "https://..." }],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-[7vw] md:px-[7vw] lg:px-[20vw] py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          A selection of projects showcasing full-stack development, cloud automation, and systems work.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-6">
        {PROJECTS.map((project, idx) => (
          <Reveal key={project.title} delay={idx * 0.08}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

function ProjectCard({ title, description, tech, links }) {
  const hasLinks = Array.isArray(links) && links.length > 0;

  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0b0a1a]/55 p-8 overflow-hidden">
      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-[#8245ec]/15" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full blur-3xl bg-[#8245ec]/10" />

      <div className="relative">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-gray-300 leading-relaxed max-w-4xl">{description}</p>

        {/* Tech pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg text-sm text-white/90 bg-white/5 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links (ONLY render when provided) */}
        {hasLinks && (
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:border-[#8245ec]/60 transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
