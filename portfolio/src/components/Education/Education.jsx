import React from "react";
import Reveal from "../Reveal";
import { FiBookOpen, FiAward, FiUsers } from "react-icons/fi";

const DEGREE = {
  school: "RMIT University",
  location: "Melbourne, Australia",
  qualification: "Bachelor of Computer Science",
  date: "Feb 2023 – Dec 2025",
  major: "Major: Full-Stack & Cloud",
};

const ACHIEVEMENTS = [
  "Top 6.9% on LeetCode for data structures problem solving",
  "2nd place, CodeQuest 2023 — built a competitive game bot that beat 120+ teams, tracking real-time game state to win by 10+ point margins",
];

const LEADERSHIP = [
  "Vice President, RMIT Information Security Collective (Nov 2023 – Oct 2024)",
  "Organising Committee, Google Developer Student Club RMIT (Dec 2023 – Jun 2024)",
  "Active in the Melbourne dev community — GDG HackNights, AI Camp Melbourne, CocoaHeads",
];

const Education = () => {
  return (
    <section id="education" className="px-[7vw] md:px-[7vw] lg:px-[20vw] py-20">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Education & Achievements
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Where the foundations came from, and what I did alongside the degree.
          </p>
        </div>
      </Reveal>

      {/* Degree */}
      <Reveal delay={0.08}>
        <div className="relative rounded-2xl border border-white/10 bg-[#0b0a1a]/60 p-8 overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl bg-gradient-to-br from-[#8245ec]/30 to-transparent" />

          <div className="relative flex items-start gap-4">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <FiBookOpen className="text-white" size={22} />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {DEGREE.qualification}
                </h3>
                <span className="text-sm text-gray-400">{DEGREE.date}</span>
              </div>

              <p className="mt-1 text-gray-400">
                {DEGREE.school} · {DEGREE.location}
              </p>

              <span className="mt-4 inline-block px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/90">
                {DEGREE.major}
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Achievements + Leadership */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal delay={0.16}>
          <ListCard
            title="Achievements"
            icon={FiAward}
            accent="from-amber-500/30 to-orange-500/10"
            items={ACHIEVEMENTS}
          />
        </Reveal>

        <Reveal delay={0.24}>
          <ListCard
            title="Leadership & Community"
            icon={FiUsers}
            accent="from-emerald-500/30 to-teal-500/10"
            items={LEADERSHIP}
          />
        </Reveal>
      </div>
    </section>
  );
};

function ListCard({ title, icon: Icon, accent, items }) {
  return (
    <div className="relative h-full rounded-2xl border border-white/10 bg-[#0b0a1a]/60 p-6 overflow-hidden">
      <div
        className={`pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl bg-gradient-to-br ${accent}`}
      />

      <div className="relative flex items-start gap-4 mb-5">
        <div className="h-12 w-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          <Icon className="text-white" size={22} />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="mt-1 h-[2px] w-14 bg-[#8245ec]/70 rounded-full" />
        </div>
      </div>

      <ul className="relative list-disc list-inside space-y-2 text-gray-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
