function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-white mb-6">Contact</h2>

      <p className="text-gray-300 text-lg mb-8 max-w-2xl">
        I am open to Software Engineering Intern, Full-Stack Developer Intern,
        Backend Developer Intern, and Trainee Software Engineer opportunities.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Get in Touch
          </h3>

          <p className="text-gray-300 mb-3">
            <span className="text-purple-400 font-semibold">Email:</span>{" "}
            samaranayakal95@gmail.com
          </p>

          <p className="text-gray-300 mb-3">
            <span className="text-purple-400 font-semibold">Phone:</span>{" "}
            +94 78 704 5693
          </p>

          <p className="text-gray-300 mb-3">
            <span className="text-purple-400 font-semibold">Location:</span>{" "}
            Mawanella, Sri Lanka
          </p>

          <p className="text-gray-300 mb-3">
            <span className="text-purple-400 font-semibold">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/lakshitha-samaranayaka-5a43ba292"
              target="_blank"
              className="hover:text-purple-400"
            >
              View LinkedIn
            </a>
          </p>

          <p className="text-gray-300">
            <span className="text-purple-400 font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/LakshithaSamaranayaka"
              target="_blank"
              className="hover:text-purple-400"
            >
              View GitHub
            </a>
          </p>
        </div>

        <form className="bg-white/10 border border-white/10 rounded-2xl p-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-purple-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-purple-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white outline-none focus:border-purple-400"
          ></textarea>

          <button
            type="button"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;