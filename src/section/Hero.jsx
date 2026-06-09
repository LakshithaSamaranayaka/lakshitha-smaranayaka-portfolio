import backgroundImage from "../assets/background.jpg";
function Hero() {
  return (
    <section
         className="min-h-screen flex items-center bg-cover bg-center bg-no-repeat px-6 pt-24"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${backgroundImage})`,
  }}
>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div>
          <p className="text-purple-400 font-semibold mb-4">
            Software Engineering Undergraduate
          </p>

          <h1 className="hero-name text-5xl md:text-7xl font-bold text-white leading-tight">Fullstack{" "}
            <span className="text-purple-400">
               Developer
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-8 max-w-2xl">
            I build full-stack web applications using React.js, Node.js,
            Express.js, MongoDB, REST APIs, and modern web technologies. I am
            passionate about building scalable, responsive, and real-world
            software solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white/20 hover:border-purple-400 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/LakshithaSamaranayaka"
              target="_blank"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/lakshitha-samaranayaka-5a43ba292"
              target="_blank"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:samaranayakal95@gmail.com"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full"></div>

          <div className="relative bg-white/10 border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="bg-black/40 rounded-2xl p-6 border border-white/10">
              <div className="flex gap-2 mb-6">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              </div>

              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`const developer = {
  name: "Lakshitha Samaranayaka",
  role: "Full-Stack Developer Intern",
  stack: ["React", "Node", "Express", "MongoDB"],
  focus: "Building real-world software",
  availableFor: "Internship Opportunities"
};

console.log("Ready to contribute 🚀");`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;