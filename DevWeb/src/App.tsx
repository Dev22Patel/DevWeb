import { useEffect } from 'react';
import { ThemeProvider } from './Provider/theme-provider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './pages/Hero';
import ProjectsSection from './pages/Projects';
import { HackathonsSection } from './pages/Hackathons';
import { SocialLinks } from './ui/SocialLinks';
import profilepicture from './assets/photos/DEV-PATEL.jpg';
import SkillsSection from './pages/Skills';
import { Contact } from './pages/Contact';
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      {/* Ellipse gradient background effect */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))]
        from-cyan-500/20 via-purple-500/10 to-blue-500/20
        dark:from-cyan-500/10 dark:via-purple-500/5 dark:to-blue-500/10">
      </div>

      <main className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32 md:pt-40 lg:pt-44" id="hero">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-8 lg:gap-12 items-start">
          <Hero />
          <div className="relative mt-8 lg:mt-0">
            <div className="flex flex-col items-center lg:items-end space-y-6">
              <img
                src={profilepicture}
                alt="Profile Photo"
                className="rounded-2xl w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[460px] h-auto object-cover"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover"
                }}
              />
              <div className="w-full flex justify-center">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </main>
      <section id="projects" className="min-h-screen flex items-center scroll-mt-14">
        <ProjectsSection />
      </section>

      <section className="min-h-screen flex items-center scroll-mt-34" id="hackathon">
        <HackathonsSection />
      </section>

      <section className="min-h-screen flex items-center scroll-mt-34" id="skills">
        <SkillsSection />
      </section>

      <section className="min-h-screen flex items-center scroll-mt-34" id="contact">
        <Contact />
      </section>
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <Analytics />
    </ThemeProvider>
  );
}
