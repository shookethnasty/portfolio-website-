import React from "react";
import Reveal from "../Reveal";

const EXPERIENCE = [
  {
    role: "AI Engineer (Contract)",
    company: "Bosley · Melbourne, Australia",
    date: "Apr 2026 – Present",
    tags: [
      "Agentic AI",
      "Amazon Bedrock",
      "AWS Lambda",
      "Step Functions",
      "RAG",
      "Python",
      "LLM Evaluation",
    ],
    points: [
      "Engaged as a full-time contractor delivering AI automation and agentic systems for commercial and government clients",
      "Designed and shipped three AI agents and an AI-enabled client portal for a not-for-profit client, spanning knowledge retrieval, guided assistance, and workflow automation",
      "Owned prompt design, tool and data integrations, and the evaluation loop that moved agents from working demo to something real users could rely on",
      "Architected delivery on AWS — Bedrock and SageMaker for inference, Lambda, ECS, and API Gateway for compute, Step Functions for orchestration, OpenSearch and Aurora pgvector for retrieval",
      "Ran discovery on proposed AI use cases and recommended against the ones that would not survive production, before build effort was committed",
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
    tags: ["Python", "Flask", "Dash", "Pandas", "OCR", "LLM APIs", "SQL"],
    points: [
      "Built AI-powered OCR and LLM pipelines that extracted structured data from variably formatted lending and financial documents, cutting manual processing and data-entry errors",
      "Integrated LLM-based processing to interpret extracted financial data and structure it for downstream lender-matching workflows",
      "Built a purchase order scorecard dashboard in Python, Flask, and Dash, surfacing key financial metrics from large Excel and CSV datasets",
      "Developed data pipelines in Pandas and SQL to clean, validate, and aggregate transactional data for downstream systems",
      "Owned feature delivery end to end in a remote Agile team and presented sprint demos to stakeholders",
    ],
  },
  {
    role: "Software Developer",
    company: "RISC Club at RMIT University · Melbourne, Australia",
    date: "Apr 2024 – Dec 2024",
    tags: ["Python", "Node.js", "AWS Lambda", "Linux", "Git"],
    points: [
      "Built full-stack features for internal research and innovation platforms",
      "Wrote Python and Linux automation scripts to optimise server-side workloads and reduce manual support tasks",
      "Migrated backend components to AWS Lambda and a serverless architecture, reducing operational overhead",
      "Prepared technical specifications, deployment plans, and architecture documentation with an Agile team",
      "Performed unit and system testing, and coordinated defect fixes across services",
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
