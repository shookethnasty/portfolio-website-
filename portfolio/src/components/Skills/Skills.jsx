import React, { useMemo } from "react";
import Reveal from "../Reveal";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCloud,
  FiCheckCircle,
  FiTool,
  FiBarChart2,
  FiTrello,
} from "react-icons/fi";

const SKILL_CARDS = [
  {
    title: "Frontend Development",
    icon: FiCode,
    accent: "from-blue-500/30 to-cyan-500/10",
    pills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Component-Based Architecture",
    ],
  },
  {
    title: "Backend Development",
    icon: FiServer,
    accent: "from-emerald-500/30 to-teal-500/10",
    pills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Authentication & Authorization",
      "API Design",
      "Middleware",
      "Server-side Rendering",
    ],
  },
  {
    title: "Database & Data Management",
    icon: FiDatabase,
    accent: "from-sky-500/30 to-indigo-500/10",
    pills: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "Schema Design",
      "CRUD Operations",
      "Data Validation",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: FiCloud,
    accent: "from-purple-500/30 to-fuchsia-500/10",
    pills: [
      "AWS (EC2, S3)",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Cloud Deployment",
      "Environment Configuration",
      "Linux",
    ],
  },
  {
    title: "Testing & Quality Assurance",
    icon: FiCheckCircle,
    accent: "from-cyan-500/30 to-blue-500/10",
    pills: [
      "Unit Testing",
      "Integration Testing",
      "Jest",
      "Playwright",
      "Cypress",
      "Debugging",
      "Code Reviews",
    ],
  },
  {
    title: "Development Tools",
    icon: FiTool,
    accent: "from-slate-500/30 to-zinc-500/10",
    pills: ["Git", "GitHub", "VS Code", "npm", "yarn", "ESLint", "Prettier"],
  },
  {
    title: "Data Analytics & AI",
    icon: FiBarChart2,
    accent: "from-amber-500/30 to-orange-500/10",
    pills: [
      "Python",
      "Pandas",
      "Data Cleaning & Transformation",
      "CSV / Excel Processing",
      "Dash",
      "OCR Integration",
      "AI-Assisted Data Pipelines",
    ],
  },
  {
    title: "Project Management",
    icon: FiTrello,
    accent: "from-pink-500/30 to-rose-500/10",
    pills: ["Agile / Scrum", "Jira", "Trello"],
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
            A snapshot of the tools, technologies, and workflows I use to build and ship modern
            software.
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
