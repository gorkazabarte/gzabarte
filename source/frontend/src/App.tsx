import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './index.css'

import About from './components/About'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Skills from './components/Skills'

import { Sun, Moon } from 'lucide-react'

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode')
      if (stored !== null) return stored === 'true'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  const closeTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [isDarkMode])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDarkMode = () => setIsDarkMode(prev => !prev)
  const handleLinkClick = () => setIsMenuOpen(false)


  const openDropdown = () => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current)
    }
    setDropdownOpen(true)
  }

  const closeDropdownWithDelay = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setDropdownOpen(false)
    }, 150)
  }

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav
          className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-200"
          role="navigation"
          aria-label="Primary"
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link
                to="/"
                className="text-xl font-bold text-gray-950 dark:text-white transition-colors duration-200"
                onClick={handleLinkClick}
              >
                DevOps Engineer
              </Link>

              <div className="flex items-center space-x-8">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
                  >
                    Skills
                  </a>
                  <a
                    href="#experience"
                    className="text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
                  >
                    Experience
                  </a>
                  <a
                    href="#certifications"
                    className="text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
                  >
                    Certifications
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
                  >
                    Contact
                  </a>

                  {/* BLOGS DROPDOWN */}
                  <div
                    className="relative"
                    tabIndex={0}
                    onFocus={openDropdown}
                    onBlur={closeDropdownWithDelay}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdownWithDelay}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                  >
                    <button
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-gray-400 transition-colors duration-200"
                      aria-controls="blogs-dropdown"
                      type="button"
                    >
                      Blogs ▾
                    </button>
                    {dropdownOpen && (
                      <div
                        id="blogs-dropdown"
                        className="absolute bg-white dark:bg-gray-800 mt-2 shadow-lg rounded-md z-50"
                        role="menu"
                      >
                        <Link
                          to="/blogs/category/technology"
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          role="menuitem"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Technology
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Dark mode toggle */}
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-lg text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
                    aria-label="Toggle dark mode"
                    type="button"
                  >
                    {isDarkMode ? (
                      <Sun className="w-5 h-5" />
                    ) : (
                      <Moon className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Mobile menu toggle */}
                <button
                  onClick={toggleMenu}
                  className="md:hidden text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                  type="button"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden py-4 px-4 space-y-4 bg-white dark:bg-gray-900"
            >
              <a
                href="#about"
                onClick={handleLinkClick}
                className="block text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={handleLinkClick}
                className="block text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
              >
                Skills
              </a>
              <a
                href="#experience"
                onClick={handleLinkClick}
                className="block text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
              >
                Experience
              </a>
              <a
                href="#certifications"
                onClick={handleLinkClick}
                className="block text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
              >
                Certifications
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
              >
                Contact
              </a>
              <Link
                to="/blogs/category/technology"
                onClick={handleLinkClick}
                className="block text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
              >
                Technology
              </Link>
            </div>
          )}
        </nav>

        {/* Main content */}
        <main className="pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Experience />
                  <Skills />
                  <Certifications />
                  <Contact />
                </>
              }
            />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/category/:category" element={<BlogList />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="text-center py-4 text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} DevOps Engineer. All rights reserved.
        </footer>
      </div>
    </Router>
  )
}

export default App
