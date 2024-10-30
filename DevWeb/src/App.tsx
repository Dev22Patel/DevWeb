import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './pages/Hero'
import ProjectsSection from './pages/Projects'
import profilePhoto from './assets/photos/DEV-PATEL.jpg'
import { SocialLinks } from './ui/SocialLinks'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 pt-24 sm:pt-32 md:pt-40 lg:pt-48" id="hero">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-8 lg:gap-12 items-start">
            <Hero />
            <div className="relative mt-8 lg:mt-0">
              <div className="flex flex-col items-center lg:items-end space-y-6">
                <img
                  src={profilePhoto}
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
        <div id="projects" className='h-screen'>
            <ProjectsSection />
        </div>
      </div>
    </Router>
  )
}
