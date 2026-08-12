import React from "react";
import Reveal from "../Reveal";

const PROJECTS = [
  {
    title: "AI Agents & Client Portal",
    subtitle: "Professional project · not-for-profit client",
    description:
      "Designed and built three AI agents and an AI-enabled client portal supporting knowledge retrieval, guided assistance, and workflow automation. Owned prompt design, tool integration, and iterative evaluation of agent responses against real user queries, refining behaviour until output was consistent enough for end users.",
    tech: [
      "AI Agents",
      "LLMs",
      "Claude",
      "OpenAI",
      "Prompt Engineering",
      "Tool Use",
      "RAG",
      "Workflow Automation",
    ],
  },
  {
    title: "Workday Implementation — AI & Automation Discovery",
    subtitle: "Professional project · enterprise client",
    description:
      "Supporting an enterprise Workday implementation through current-state process mapping, workflow analysis, and identification of AI and automation opportunities — the discovery work that determines what is worth building before anything is built.",
    tech: [
      "Workday",
      "Process Mapping",
      "Workflow Analysis",
      "AI Automation",
      "Documentation",
      "Stakeholder Support",
    ],
  },
  {
    title: "Purchase Order Scorecard — LLM & OCR Underwriting Dashboard",
    description:
      "An underwriting dashboard for purchase order financing, built to turn variably formatted lending documents into decision-ready data. Combined OCR-assisted extraction with LLM-based processing to standardise fields across inconsistent financial statements, then automated borrower risk analysis and lender matching to cut manual review time. Data pipelines in Pandas cleaned, validated, and aggregated purchase order and invoice datasets, with assumptions and edge cases documented for maintainability. Deployed to AWS EC2 with GitHub Actions CI/CD.",
    tech: [
      "Python",
      "Dash",
      "Flask",
      "OpenAI API",
      "OCR",
      "Pandas",
      "Plotly",
      "AWS EC2",
      "CI/CD",
    ],
  },
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
    title: "Auto Job Application Tracker",
    description:
      "Engineered an automation pipeline using Python, Cron, and web scraping to process large-scale job data, with GenAI APIs used to parse and classify unstructured listings. Implemented database workflows in DynamoDB and built secure APIs for data retrieval. Added monitoring logs and alert triggers to improve production reliability and observability.",
    tech: ["Python", "Flask", "DynamoDB", "AWS EC2", "Cron", "Web Scraping", "GenAI APIs"],
    // links: [{ label: "GitHub", href: "https://..." }],
  },
  {
    title: "CLYMB — Marketing Website",
    description:
      "A freelance build for a live commercial site: an optimised React frontend with API integrations, motion-driven interactions, and CI-based deployments.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "React Router",
      "CI/CD",
    ],
    links: [{ label: "Live Site", href: "https://www.clymb.au/" }],
  },
  {
    title: "Climate Data Analyser",
    description:
      "A data-driven web application that enables users to explore and filter over 260 years of Australian climate and population data. Designed ETL modules to clean, transform, and query large historical datasets, wrote SQL procedures and optimisation scripts to speed up analytical queries, and surfaced insights through a clean, minimal interface designed to improve research efficiency.",
    tech: ["Java", "Spring Boot", "HTML", "CSS", "MySQL", "SQLite"],
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
          A selection of work across AI and LLM pipelines, cloud automation, full-stack development,
          and systems programming.
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

function ProjectCard({ title, subtitle, description, tech, links }) {
  const hasLinks = Array.isArray(links) && links.length > 0;

  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0b0a1a]/55 p-8 overflow-hidden">
      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-[#8245ec]/15" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full blur-3xl bg-[#8245ec]/10" />

      <div className="relative">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h3>

        {subtitle && (
          <p className="mt-2 text-sm uppercase tracking-wide text-[#8245ec]/90">
            {subtitle}
          </p>
        )}

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
