import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import Education from "./section/Education";
import Contact from "./section/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import LoadingScreen  from "./components/LoadingScreen";
import { AnimatePresence } from "framer-motion";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loading" />
      ) : (
        <div key="content" className="min-h-screen bg-[#050816] text-white">
          <Navbar />

          <main>
            <section id="home">
              <Hero />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="portfolio">
              <Projects />
            </section>

            <section id="education">
              <Education />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </main>

          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;