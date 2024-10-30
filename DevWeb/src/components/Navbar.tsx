import { Link, useLocation } from 'react-router-dom'
import profilePhoto from '../assets/photos/DEV-PATEL.jpg'
export function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-6 w-full z-50 flex ml-[260px]">
      <div className="flex items-center justify-start space-x-8 bg-[#171717] rounded-xl px-6 py-2.5">
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
          to="/guestbook"
          className={`px-3 py-1 rounded-lg transition-colors ${
            location.pathname === '/guestbook'
              ? 'bg-white/10 text-white'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          Guest Book
        </Link>
        <Link
          to="/discord"
          className={`px-3 py-1 rounded-lg transition-colors ${
            location.pathname === '/discord'
              ? 'bg-white/10 text-white'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          Discord
        </Link>
      </div>
    </nav>
  )
}
