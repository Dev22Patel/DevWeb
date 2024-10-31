import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './pages/Hero';
import ProjectsSection from './pages/Projects';
import { HackathonsSection } from './pages/Hackathons';
import { SocialLinks } from './ui/SocialLinks';
import { useEffect } from 'react';
import profilepicture from './assets/photos/DEV-PATEL.jpg'
// Contact component (you'll need to create this)
const Contact = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1>Contact Page</h1>
  </div>
);

// Home component that contains all sections
const Home = () => {
  // Handle initial scroll position based on hash
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the # symbol
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' , block:'start'});
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32 md:pt-40 lg:pt-48" id="hero">
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

      <section
        id="projects"
        className="min-h-screen flex items-center scroll-mt-14"
      >
        <ProjectsSection />
      </section>

      <section
        className="min-h-screen flex items-center scroll-mt-34"
        id="hackathon"
      >
        <HackathonsSection />
      </section>

    </>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
