function Projects() {
  const projects = [
    {
      title: "AutoBid Lanka",
      type: "Individual Project",
      duration: "Dec 2025 - May 2026",
      description:
        "A full-stack MERN vehicle trading platform with live auction and direct purchasing functionality. The system includes real-time bidding, secure authentication, dashboards, KYC verification, escrow payment workflow, and AI-powered vehicle description generation.",
      features: [
        "Responsive frontend with React.js, Vite, and Tailwind CSS",
        "Secure authentication using JWT and bcrypt",
        "Real-time auction bidding with Socket.IO",
        "REST APIs using Node.js and Express.js",
        "KYC verification and admin approval workflow",
        "Stripe escrow-based payment handling",
        "Google Gemini API for AI vehicle descriptions",
        "Redis caching for performance optimization",
      ],
      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "JWT",
        "Redis",
        "Stripe API",
        "Gemini API",
      ],
      github:
        "https://github.com/LakshithaSamaranayaka/Auto-Bid-Lanka-Auction-Based-Platform-Final-year-Project-",
    },
    {
      title: "Uni Hub Campus Connect",
      type: "Individual Project",
      duration: "Jan 2026 - Present",
      description:
        "A responsive full-stack student platform designed to help students access educational resources, upload notes, explore internships, and receive career guidance.",
      features: [
        "Reusable UI components using Next.js and React",
        "REST APIs with Node.js and Express.js",
        "Admin approval workflows for submitted content",
        "Responsive user interfaces using CSS Modules and TypeScript",
        "MongoDB database management using Mongoose",
        "Organized layouts for better user experience",
      ],
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "CSS Modules",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST APIs",
      ],
      github: "https://github.com/LakshithaSamaranayaka/Uni-hub-connect-to-campus",
    },

    {
  title: "Graphite Noir",
  type: "Individual Project",
  duration: "Jun 2026 - Present",
  description:
    "A premium full-stack pencil art portfolio website created to upload, organize, and showcase my own graphite drawings. The platform allows users to view artworks in a responsive gallery with detailed artwork pages and social media integration.",
  features: [
    "Responsive artwork gallery with category filtering",
    "Artwork detail pages for full-size image viewing",
    "Admin artwork upload system",
    "REST APIs using Node.js and Express.js",
    "MongoDB-based artwork storage using Mongoose",
    "Premium dark UI design with Tailwind CSS",
    "Social media integration for Instagram, Facebook, and Threads",
    "Frontend and backend deployment using Vercel",
  ],
  tech: [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "Vercel",
  ],
  github: "https://github.com/LakshithaSamaranayaka/Art-Gallery-Portfolio",
  live: "https://art-gallery-portfolio-weld.vercel.app/"
},
  ];

  return (
    <section className="min-h-screen max-w-6xl mx-auto px-6 py-20 flex flex-col items-center justify-center">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          These projects show my experience in full-stack development, REST APIs,
          authentication, databases, real-time features, and responsive web
          application design.
        </p>
      </div>

      <div className="w-full flex flex-wrap gap-8 justify-center">
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-full  lg:w-[calc(50%-1rem)] max-w-[660px] bg-white/10 border border-white/10 rounded-3xl p-6 hover:border-purple-400/60 transition"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-purple-400 mt-1">{project.type}</p>
              </div>

              <span className="text-sm text-gray-300 bg-black/30 px-3 py-2 rounded-full">
                {project.duration}
              </span>
            </div>

            <p className="text-gray-300 leading-7 mb-6 text-lg">
              {project.description}
            </p>

            <h4 className="text-white font-semibold mb-3">Key Features</h4>
            <ul className="space-y-2 mb-6">
              {project.features.map((feature) => (
                <li key={feature} className="text-gray-300 text-lg">
                  <span className="text-purple-400 mr-2">▹</span>
                  {feature}
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              className="flex items-center text-purple-400 font-semibold hover:text-purple-300 w-fit"
            >
              View Source Code →
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-purple-400 font-semibold hover:text-purple-300 mt-3 w-fit"
              >
                View Live Demo →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;