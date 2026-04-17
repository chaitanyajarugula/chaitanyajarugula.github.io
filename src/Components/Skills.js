import { skills } from "../data";

const skillCategories = {
  "Languages": ["Python", "Java", "SQL", "HTML", "CSS"],
  "Data & Cloud": ["BigQuery", "DataFlow", "Hadoop", "Apache Spark", "Apache Airflow", "Apache Kafka", "ETL", "CDAP/ Data fusion"],
  "AI / ML": ["Machine Learning", "Deep Learning Architectures"],
  "Web & Tools": ["React JS", "Node JS", "MongoDB", "Flask", "GIT", "JIRA", "Data Structures and algorithms"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-heading">
            <span className="text-neon-green">&lt;</span> stack{" "}
            <span className="text-neon-green">/&gt;</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills & Technologies
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div key={category} className="glass-card p-6 card-glow">
              <h3 className="font-mono text-sm text-neon-cyan mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-neon-cyan rounded-full animate-glow-pulse" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill count */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-gray-500">
            <span className="text-neon-green">{skills.length}</span> technologies
            and counting...
          </p>
        </div>
      </div>
    </section>
  );
};
export default Skills;