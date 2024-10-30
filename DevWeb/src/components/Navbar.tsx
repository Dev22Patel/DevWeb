import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import profilePhoto from '../assets/photos/DEV-PATEL.jpg';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation - Keeping original styling */}
      <nav className="fixed top-6 w-full z-50 hidden md:flex ml-[322px]">
        <div className="flex items-center justify-start space-x-8 bg-zinc-800 rounded-xl px-6 py-2.5">
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-white">Dev Patel</span>
          </Link>
          <Link
            to="/about"
            className={`px-3 py-1 rounded-lg transition-colors ${
              location.pathname === '/about'
                ? 'bg-white/10 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`px-3 py-1 rounded-lg transition-colors ${
              location.pathname === '/projects'
                ? 'bg-white/10 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`px-3 py-1 rounded-lg transition-colors ${
              location.pathname === '/contact'
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
        <div className="bg-[#171717] px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium text-white">Dev Patel</span>
            </Link>
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
              <Link
                to="/about"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === '/about'
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === '/projects'
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === '/contact'
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
