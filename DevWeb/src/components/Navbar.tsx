import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import profilePhoto from '../assets/photos/DEV-PATEL.jpg';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'hackathon', 'skills', 'contact'];
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
    handleScroll();

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

  const ThemeToggle = () => {
    if (!mounted) return null;

    return (
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-lg transition-colors dark:hover:bg-white/10 hover:bg-gray-100"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-gray-300 hover:text-white" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600 hover:text-gray-900" />
        )}
      </button>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 w-full z-50 hidden md:flex justify-center">
        <div className="flex items-center justify-start space-x-8 dark:bg-zinc-800/90 bg-white/90 backdrop-blur-md rounded-xl px-6 py-2.5 shadow-lg">
          <button
            onClick={() => handleSectionClick('hero')}
            className="flex items-center space-x-2 group"
          >
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className={`font-medium ${
              isActive(null, 'hero')
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-300'
            }`}>
              Dev Patel
            </span>
          </button>

          <button
            onClick={() => handleSectionClick('projects')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive(null, 'projects')
                ? 'dark:bg-white/10 bg-gray-100 dark:text-white text-gray-900'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => handleSectionClick('hackathon')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive(null, 'hackathon')
                ? 'dark:bg-white/10 bg-gray-100 dark:text-white text-gray-900'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
            }`}
          >
            Hackathons
          </button>

          <button
            onClick={() => handleSectionClick('skills')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive(null, 'skills')
                ? 'dark:bg-white/10 bg-gray-100 dark:text-white text-gray-900'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
            }`}
          >
            Skills
          </button>

          <button
            onClick={() => handleSectionClick('contact')}
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive(null, 'contact')
                ? 'dark:bg-white/10 bg-gray-100 dark:text-white text-gray-900'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
            }`}
          >
            Contact Me
          </button>

          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 w-full z-50 md:hidden">
        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-4 py-4 shadow-sm">
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
              <span className={`font-medium ${
                isActive(null, 'hero')
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300'
              }`}>
                Dev Patel
              </span>
            </button>

            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
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
                    ? 'dark:bg-white/10 bg-gray-100 dark:text-white text-gray-900'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                Projects
              </button>

              <button
                onClick={() => handleSectionClick('hackathon')}
                className={`px-3 py-2 rounded-lg transition-colors text-left ${
                  isActive(null, 'hackathon')
                    ? 'dark:bg-white/10 bg-gray-100 dark:text-white text-gray-900'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                Hackathons
              </button>

              <button
                onClick={() => handleSectionClick('skills')}
                className={`px-3 py-2 rounded-lg transition-colors text-left ${
                  isActive(null, 'skills')
                    ? 'dark:bg-white/10 bg-gray-100 dark:text-white text-gray-900'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                Skills
              </button>

              <button
                onClick={() => handleSectionClick('contact')}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive(null, 'contact')
                    ? 'dark:bg-white/10 bg-gray-100 dark:text-white text-gray-900'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
