import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import profilePhoto from './assets/photos/DEV-PATEL.jpg'
import { SocialLinks } from './ui/SocialLinks'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 pt-48">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-14 items-start">
            <Hero />
            <div className="relative">
              <div className="flex flex-col items-end space-y-6">
                <img
                  src={profilePhoto}
                  alt="Profile Photo"
                  className="rounded-2xl w-full max-w-[460px] h-auto object-cover"
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
      </div>
    </Router>
  )
}
