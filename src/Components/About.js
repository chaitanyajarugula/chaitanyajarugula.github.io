import { useEffect, useState } from "react";

const roles = [
  "Data Engineer",
  "ETL Developer",
  "Problem Solver",
  "AI Engineer"
];

const About = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!deleting && text.length < currentRole.length) {
      timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 100);
    } else if (!deleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 60);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in">
            <p className="section-heading mb-4">
              <span className="text-neon-green">{"// "}</span>Welcome to my portfolio
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Chaitanya</span>
            </h1>

            <div className="flex items-center mb-8">
              <span className="font-mono text-lg sm:text-xl text-gray-400">
                I am a{" "}
              </span>
              <span className="font-mono text-lg sm:text-xl text-neon-cyan ml-2">
                {text}
              </span>
              <span className="typing-cursor" />
            </div>

            <p className="text-gray-400 leading-relaxed mb-10 max-w-lg text-sm sm:text-base">
              Passionate Computer Science professional with a Master's degree,
              specializing in Data & AI Engineering. I build scalable data pipelines,
              craft robust cloud architectures, and turn raw data into actionable
              insights.
            </p>

            {/* Terminal-style info block */}
            <div className="glass-card p-4 mb-8 font-mono text-xs sm:text-sm max-w-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-gray-500 ml-2 text-xs">~/chaitanya</span>
              </div>
              <div className="space-y-1 text-gray-400">
                <p>
                  <span className="text-neon-green">$</span>{" "}
                  <span className="text-gray-300">cat about.json</span>
                </p>
                <p className="pl-2">
                  <span className="text-neon-cyan">"location"</span>:{" "}
                  <span className="text-neon-green">"United States"</span>,
                </p>
                <p className="pl-2">
                  <span className="text-neon-cyan">"degree"</span>:{" "}
                  <span className="text-neon-green">"MS Computer Science"</span>,
                </p>
                <p className="pl-2">
                  <span className="text-neon-cyan">"focus"</span>:{" "}
                  <span className="text-neon-green">"Data & AI Engineering"</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#experience" className="neon-btn">
                View Experience
              </a>
              <a href="#contact" className="neon-btn" style={{ borderColor: "#39ff14", color: "#39ff14" }}>
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Decorative code block */}
          <div className="hidden md:block animate-float">
            <div className="glass-card p-6 neon-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <pre className="font-mono text-xs sm:text-sm leading-relaxed">
                <code>
                  <span className="text-neon-purple">class</span>{" "}
                  <span className="text-neon-cyan">DataEngineer</span> {"{\n"}
                  {"  "}
                  <span className="text-neon-purple">constructor</span>() {"{\n"}
                  {"    "}
                  <span className="text-gray-500">this</span>.name ={" "}
                  <span className="text-neon-green">'Chaitanya'</span>
                  {";\n"}
                  {"    "}
                  <span className="text-gray-500">this</span>.skills = [
                  {"\n"}
                  {"      "}
                  <span className="text-neon-green">'Python'</span>,{" "}
                  <span className="text-neon-green">'SQL'</span>,{"\n"}
                  {"      "}
                  <span className="text-neon-green">'BigQuery'</span>,{" "}
                  <span className="text-neon-green">'CI/CD'</span>,{"\n"}
                  {"      "}
                  <span className="text-neon-green">'MCP'</span>,{" "}
                  <span className="text-neon-green">'Airflow'</span>
                  {"\n"}
                  {"    "}];{"\n"}
                  {"  "}
                  {"}\n\n"}
                  {"  "}
                  <span className="text-neon-purple">async</span>{" "}
                  <span className="text-yellow-400">buildPipeline</span>() {"{\n"}
                  {"    "}
                  <span className="text-neon-purple">return</span>{" "}
                  <span className="text-neon-green">'scalable & reliable'</span>
                  {";\n"}
                  {"  "}
                  {"}\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default About;
