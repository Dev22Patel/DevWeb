import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import profilePhoto from '../assets/photos/DEV-PATEL.jpg';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'hackathon', 'skills'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 200;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false);
    navigate('/');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (path: string | null, section: string | undefined) => {
    if (section) {
      return activeSection === section;
    }
    return location.pathname === path;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 w-full z-50 hidden md:flex justify-center">
        <div className="flex items-center justify-start space-x-8 bg-zinc-800 rounded-xl px-6 py-2.5">
          <button
            onClick={() => handleSectionClick('hero')}
            className="flex items-center space-x-2 group"
          >
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className={`font-medium ${isActive(null, 'hero') ? 'text-white' : 'text-gray-300'}`}>
              Dev Patel
            </span>
          </button>

          <button
            onClick={() => handleSectionClick('projects')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive(null, 'projects')
                ? 'bg-white/10 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => handleSectionClick('hackathon')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive(null, 'hackathon')
                ? 'bg-white/10 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Hackathons
          </button>

          <button
            onClick={() => handleSectionClick('skills')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive(null, 'skills')
                ? 'bg-white/10 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Skills
          </button>

          <Link
            to="/contact"
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive('/contact', undefined)
                ? 'bg-white/10 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Contact Me
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 w-full z-50 md:hidden">
        <div className="bg-transparent backdrop-blur-md px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleSectionClick('hero')}
              className="flex items-center space-x-2"
            >
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className={`font-medium ${isActive(null, 'hero') ? 'text-white' : 'text-gray-300'}`}>
                Dev Patel
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => handleSectionClick('projects')}
                className={`px-3 py-2 rounded-lg transition-colors text-left ${
                  isActive(null, 'projects')
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Projects
              </button>

              <button
                onClick={() => handleSectionClick('hackathon')}
                className={`px-3 py-2 rounded-lg transition-colors text-left ${
                  isActive(null, 'hackathon')
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Hackathons
              </button>

              <button
                onClick={() => handleSectionClick('skills')}
                className={`px-3 py-2 rounded-lg transition-colors text-left ${
                  isActive(null, 'skills')
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Skills
              </button>

              <Link
                to="/contact"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive('/contact', undefined)
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
