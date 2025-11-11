import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">3rbst</span>
            <span className="hidden sm:inline-block px-2 py-1 bg-rose-100 text-rose-600 text-xs font-semibold rounded-full">
              First in Germany
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#doctors" className="text-gray-700 hover:text-rose-500 transition">
              Find Doctors
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-rose-500 transition">
              How It Works
            </a>
            <a href="#about" className="text-gray-700 hover:text-rose-500 transition">
              About
            </a>
            <a href="#articles" className="text-gray-700 hover:text-rose-500 transition">
              Articles
            </a>
            <button className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition font-medium">
              Join Community
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#doctors" className="block text-gray-700 hover:text-rose-500 transition">
              Find Doctors
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-rose-500 transition">
              How It Works
            </a>
            <a href="#about" className="block text-gray-700 hover:text-rose-500 transition">
              About
            </a>
            <a href="#articles" className="block text-gray-700 hover:text-rose-500 transition">
              Articles
            </a>
            <button className="w-full px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition font-medium">
              Join Community
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
