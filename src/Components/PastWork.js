import { experiences } from "../data";
import { useState } from "react";

const PastWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-heading">
            <span className="text-neon-green">&lt;</span> career{" "}
            <span className="text-neon-green">/&gt;</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Professional Experience
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Tab list */}
          <div className="lg:w-1/3 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-1 pb-4 lg:pb-0 scrollbar-hide">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-left whitespace-nowrap lg:whitespace-normal px-4 py-3 font-mono text-xs sm:text-sm transition-all duration-300 border-l-2 flex-shrink-0 ${
                  idx === activeIndex
                    ? "border-neon-cyan text-neon-cyan bg-neon-cyan/5"
                    : "border-dark-700 text-gray-500 hover:text-gray-300 hover:bg-dark-700/50"
                }`}
              >
                <span className="text-neon-green mr-1">
                  {String(idx).padStart(2, "0")}.
                </span>
                {exp.organization}
              </button>
            ))}
          </div>

          {/* Right: Details panel */}
          <div className="lg:w-2/3 glass-card p-6 sm:p-8 animate-fade-in" key={activeIndex}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {experiences[activeIndex].title}{" "}
                <span className="text-neon-cyan">
                  @ {experiences[activeIndex].organization}
                </span>
              </h3>
              <span className="font-mono text-xs text-gray-500 mt-1 sm:mt-0">
                {experiences[activeIndex].from} — {experiences[activeIndex].to}
              </span>
            </div>

            <ul className="space-y-3 mt-4">
              {experiences[activeIndex].description.map((desc, i) => (
                <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                  <span className="text-neon-cyan mt-1.5 flex-shrink-0">▹</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PastWork;
