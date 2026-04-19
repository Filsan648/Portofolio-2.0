export default function Skill() {
  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "React & Next.js", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Laravel Backend", level: 70 },
  ];

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white px-6 py-24 flex flex-col items-center overflow-hidden">
      
      {/* Background noise / glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-sm tracking-[0.3em] text-gray-400 uppercase">
          Expertise
        </p>
        <h2 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
          Skills that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            shape ideas
          </span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="w-full max-w-4xl space-y-6 relative z-10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition duration-500 hover:border-blue-500/40 hover:scale-[1.02]"
          >
            {/* Top row */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium group-hover:text-blue-400 transition">
                {skill.name}
              </h3>
              <span className="text-sm text-gray-400">
                {skill.level}%
              </span>
            </div>

            {/* Progress line (Awwwards style minimal bar) */}
            <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            {/* Glow hover line */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl bg-blue-500/5 blur-xl"></div>
          </div>
        ))}
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/10 blur-[120px] rounded-full"></div>
    </section>
  );
}