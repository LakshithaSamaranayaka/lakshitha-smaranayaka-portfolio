import profileImage from "../assets/profile.jpg";

function About() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24" id="about">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="about-glow-left absolute left-10 top-32 h-72 w-72 rounded-full bg-purple-600/25 blur-[120px]"></div>
        <div className="about-glow-right absolute right-10 top-40 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"></div>
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="about-title text-4xl font-black text-purple-400 md:text-5xl">
            About Me
          </h2>

          <p className="about-subtitle mt-3 text-sm text-gray-400 md:text-base">
            ✨ Transforming ideas into digital experiences ✨
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <h3 className="about-heading text-4xl font-black leading-tight text-white md:text-5xl">
              Hello, I&apos;m <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                Lakshitha Samaranayaka
              </span>
            </h3>

            <p className="about-text mt-6 max-w-xl text-base leading-8 text-gray-300">
              I am a motivated Software Engineering undergraduate with hands-on
              experience in full-stack web development using the MERN stack. I
              enjoy building responsive, scalable, and real-world web
              applications using React.js, Node.js, Express.js, MongoDB, REST
              APIs, and modern development tools.
            </p>

            <p className="about-text about-text-delay mt-4 max-w-xl text-base leading-8 text-gray-300">
              I am passionate about problem solving, clean code, teamwork, and
              continuously learning new technologies to become a professional
              software engineer.
            </p>

            {/* Buttons */}
            <div className="about-buttons mt-8 flex flex-wrap gap-4">
              <a
                href="/LAKSHITHA SAMARANAYAKA .pdf"
                download="Lakshitha_Samaranayaka.pdf"
                className="rounded-lg bg-purple-600 px-6 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.45)] transition hover:bg-purple-700 hover:scale-105"
              >
                Download CV
              </a>

              <a
                href="#portfolio"
                className="rounded-lg border border-purple-400/40 px-6 py-3 text-sm font-bold text-purple-300 transition hover:bg-purple-500/10 hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right profile image */}
          <div className="about-image-wrap flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-purple-500/40 blur-[60px]"></div>

              <div className="relative h-64 w-64 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 p-1 shadow-[0_0_60px_rgba(168,85,247,0.45)] md:h-80 md:w-80">
                <div className="h-full w-full rounded-full bg-[#080b1a] p-2">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-black/60">
                    <img
                      src={profileImage}
                      alt="Lakshitha Samaranayaka"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="about-card about-card-1 group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-purple-400/60">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-2xl">
              💻
            </div>

            <div className="flex items-end justify-between">
              <div>
                <h4 className="text-3xl font-black text-white">3+</h4>
                <p className="mt-2 text-sm font-semibold text-gray-300">
                  Total Projects
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Full-stack applications built
                </p>
              </div>

              <span className="text-purple-400 transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>

          <div className="about-card about-card-2 group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-purple-400/60">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-2xl">
              🏅
            </div>

            <div className="flex items-end justify-between">
              <div>
                <h4 className="text-3xl font-black text-white">2</h4>
                <p className="mt-2 text-sm font-semibold text-gray-300">
                  Certificates
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Postman API & Cloud APIs
                </p>
              </div>

              <span className="text-purple-400 transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>

          <div className="about-card about-card-3 group rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-purple-400/60">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-2xl">
              🌍
            </div>

            <div className="flex items-end justify-between">
              <div>
                <h4 className="text-3xl font-black text-white">2026</h4>
                <p className="mt-2 text-sm font-semibold text-gray-300">
                  Graduation Year
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  BSc Software Engineering
                </p>
              </div>

              <span className="text-purple-400 transition group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;