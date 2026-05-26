function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">
            Lakshitha Samaranayaka
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            Software Engineering Undergraduate | Full-Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://github.com/LakshithaSamaranayaka"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/lakshitha-samaranayaka-5a43ba292"
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:samaranayakal95@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            Email
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="text-center text-gray-500 text-sm">
          © 2026 Lakshitha Samaranayaka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;