import React from "react";
import Reveal from "../Reveal";

const EXPERIENCE = [
  {
    role: "AI Automation & Software Engineering Contractor",
    company: "Bosley · Melbourne, Australia",
    date: "Apr 2026 – Present",
    blurb:
      "Bosley is an Australian technology and consulting company delivering digital transformation, automation, and AI-enabled business solutions across commercial and government client environments.",
    tags: [
      "Agentic AI",
      "LLMs",
      "Claude API",
      "OpenAI API",
      "Prompt Engineering",
      "RAG",
      "Python",
      "Workflow Automation",
    ],
    points: [
      "Engaged full-time to identify high-value automation and AI opportunities across client business units, then build the prototypes that prove or kill them before delivery commits to a direction",
      "Designed and shipped agentic AI workflows combining LLMs (Claude, OpenAI), tool use, and enterprise knowledge sources to automate document-heavy processing and knowledge retrieval",
      "Ran rapid experiments across prompts, models, and agent architectures — comparing approaches, measuring output accuracy and reliability, and discarding what did not hold up under real inputs",
      "Worked directly with non-technical stakeholders to convert vague problem statements into scoped, testable solutions, and to set realistic expectations of what current AI can and cannot do reliably",
      "Delivered inside government contract environments with requirements around secure workflows and traceability, capturing reusable patterns and handover documentation so proven approaches could be repeated rather than rebuilt",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed · Remote",
    date: "Mar 2025 – Apr 2026",
    tags: ["React", "Node.js", "REST APIs", "PostgreSQL", "AWS", "CI/CD"],
    points: [
      "Delivered end-to-end web applications from requirements through implementation and deployment",
      "Built backend services and REST APIs using object-oriented design and structured data models",
      "Developed responsive frontends in React, JavaScript, and Tailwind CSS",
      "Deployed to AWS (EC2, S3) and managed environments and access using IAM",
      "Worked directly with clients to refine requirements and iterate on feedback",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Bridge Marketplace · New York, USA (Remote)",
    date: "Dec 2024 – Mar 2025",
    blurb:
      "Bridge Marketplace is a fintech company which connects businesses with suitable lending partners.",
    tags: ["Python", "Pandas", "OCR", "OpenAI API", "SQL", "Excel / CSV"],
    points: [
      "Built Python automation pipelines to ingest, validate, and transform financial data from Excel and CSV sources",
      "Developed OCR-based workflows to extract structure from unstructured lending documents, then integrated OpenAI APIs to interpret and organise the extracted content into machine-readable outputs",
      "Investigated and resolved pipeline failures against messy real-world inputs, improving data reliability and removing manual processing effort from the workflow",
    ],
  },
  {
    role: "Software Developer",
    company: "RISC at RMIT University · Melbourne, Australia",
    date: "Apr 2024 – Dec 2024",
    blurb:
      "RISC is a student-led technical club at RMIT University focused on cybersecurity and hands-on projects.",
    tags: ["REST APIs", "Debugging", "Git", "Agile"],
    points: [
      "Developed and maintained internal systems and tools within Agile teams, contributing API integrations, debugging, and performance improvements across iterative releases",
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
            Where I’ve shipped agentic AI, cloud, and full-stack work into real
            environments with real users.
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

              <p className="text-gray-400">{exp.company}</p>

              {exp.blurb && (
                <p className="mt-2 text-sm text-gray-500 italic max-w-3xl">
                  {exp.blurb}
                </p>
              )}

              <div className="mb-4" />

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
