import React, { useMemo } from "react";
import Reveal from "../Reveal";
import {
  FiCpu,
  FiCloud,
  FiSearch,
  FiServer,
  FiCode,
  FiDatabase,
  FiTool,
  FiCheckCircle,
} from "react-icons/fi";

const SKILL_CARDS = [
  {
    title: "Agentic AI & GenAI",
    icon: FiCpu,
    accent: "from-purple-500/30 to-fuchsia-500/10",
    pills: [
      "Agent Design",
      "Agentic Workflows",
      "Tool Use & Function Calling",
      "Prompt Engineering",
      "Amazon Bedrock",
      "Claude API",
      "OpenAI API",
      "LLM Document Processing",
      "Multi-Agent Orchestration",
    ],
  },
  {
    title: "AWS & Cloud Architecture",
    icon: FiCloud,
    accent: "from-amber-500/30 to-orange-500/10",
    pills: [
      "Bedrock",
      "SageMaker",
      "Lambda",
      "ECS",
      "EC2",
      "API Gateway",
      "Step Functions",
      "S3",
      "RDS",
      "DynamoDB",
      "IAM",
      "CloudWatch",
    ],
  },
  {
    title: "Retrieval & Evaluation",
    icon: FiSearch,
    accent: "from-emerald-500/30 to-teal-500/10",
    pills: [
      "RAG Pipelines",
      "Amazon OpenSearch",
      "Aurora pgvector",
      "Amazon Kendra",
      "Chunking & Embeddings",
      "Output Accuracy & Reliability Testing",
      "Evaluation Loops",
      "Hallucination Analysis",
    ],
  },
  {
    title: "Programming & Backend",
    icon: FiServer,
    accent: "from-sky-500/30 to-indigo-500/10",
    pills: [
      "Python",
      "TypeScript",
      "Java",
      "C#",
      "C++",
      "Node.js",
      "Express.js",
      "Flask",
      "REST API Design",
      "Object-Oriented Design",
      "Authentication & Authorization",
    ],
  },
  {
    title: "Data & Automation",
    icon: FiDatabase,
    accent: "from-blue-500/30 to-cyan-500/10",
    pills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL",
      "Pandas",
      "OCR Pipelines",
      "ETL & Data Pipelines",
      "Data Cleaning & Validation",
      "Workflow Automation",
      "API Integrations",
    ],
  },
  {
    title: "Frontend Development",
    icon: FiCode,
    accent: "from-cyan-500/30 to-blue-500/10",
    pills: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Component-Based Architecture",
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: FiTool,
    accent: "from-slate-500/30 to-zinc-500/10",
    pills: [
      "Docker",
      "Linux",
      "CI/CD",
      "GitHub Actions",
      "Git & GitHub",
      "Environment Configuration",
      "Cloud Deployment",
    ],
  },
  {
    title: "Testing & Ways of Working",
    icon: FiCheckCircle,
    accent: "from-pink-500/30 to-rose-500/10",
    pills: [
      "Unit & Integration Testing",
      "Jest",
      "Playwright",
      "Debugging",
      "Code Reviews",
      "Agile / Scrum",
      "Jira",
      "Technical Documentation",
      "Stakeholder Engagement",
    ],
  },
];

const Skills = () => {
  // Your grid is: xl:grid-cols-3, md:grid-cols-2, mobile:grid-cols-1
  // For the "row-by-row left->right" feel, we compute delay as:
  // delay = rowIndex * rowGap + colIndex * colGap
  //
  // We'll base it on 3 columns (since your screenshot is desktop).
  // It will still look fine on md/mobile too.
  const cols = 3;
  const colGap = 0.08; // seconds between cards in same row
  const rowGap = 0.18; // seconds between rows

  const delays = useMemo(() => {
    return SKILL_CARDS.map((_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      return 0.08 + row * rowGap + col * colGap;
    });
  }, [cols]);

  return (
    <section id="skills" className="px-[7vw] md:px-[7vw] lg:px-[20vw] py-20">
      <Reveal delay={0.05}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills & Expertise
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            What I use to design agentic AI systems, put them on AWS, and keep them reliable once
            real users get hold of them.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {SKILL_CARDS.map((card, index) => (
          <Reveal key={card.title} delay={delays[index]}>
            <SkillCard {...card} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

function SkillCard({ title, icon: Icon, accent, pills }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0b0a1a]/60 p-6 overflow-hidden">
      <div
        className={`pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl bg-gradient-to-br ${accent}`}
      />

      <div className="relative flex items-start gap-4 mb-5">
        <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Icon className="text-white" size={22} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="mt-1 h-[2px] w-14 bg-[#8245ec]/70 rounded-full" />
        </div>
      </div>

      <div className="relative flex flex-wrap gap-2">
        {pills.map((pill) => (
          <span
            key={pill}
            className="px-3 py-1 rounded-full text-sm text-white/90 bg-white/5 border border-white/10 hover:border-[#8245ec]/60 transition"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
