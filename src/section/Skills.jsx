function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "bcrypt", "Nodemailer"],
    },
    {
      title: "Database & Storage",
      skills: ["MongoDB", "Mongoose", "MySQL Basics", "Redis"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vite"],
    },
    {
      title: "Integrations",
      skills: ["Socket.IO", "Stripe API", "Google Gemini API", "Cloud APIs"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Teamwork", "Communication", "Time Management", "Adaptability"],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-purple-400 font-semibold mb-3">Technical Skills</p>

        <h2 className="text-4xl font-bold text-white">
          Skills & Technologies
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl">
          Technologies and tools I use to build responsive, scalable, and
          maintainable full-stack web applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-white/10 border border-white/10 rounded-3xl p-6 hover:border-purple-400/60 transition"
          >
            <h3 className="text-xl font-bold text-white mb-5">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;