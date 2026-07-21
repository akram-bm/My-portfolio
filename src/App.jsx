import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useLanguage } from './context/LanguageContext'
import { useDarkMode } from './context/DarkModeContext'
import translations from './i18n/translations'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Formation from './pages/Formation'
import Skills from './pages/Skills'
import Certifications from './pages/Certifications'
import Languages from './pages/Languages'
import Contact from './pages/Contact'
import CVPreview from './pages/CVPreview'
import logo from './assets/images/logo1.png'
import './App.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, toggleLang } = useLanguage()
  const { isDark, toggleDark } = useDarkMode()
  const t = translations[lang].nav

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  const navItems = [
    { path: '/', label: t.home },
    { path: '/experience', label: t.experience },
    { path: '/projects', label: t.projects },
    { path: '/formation', label: t.formation },
    { path: '/skills', label: t.skills },
    { path: '/certifications', label: t.certifications },
    { path: '/languages', label: t.languages },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Logo" className="navbar__logo-img" />
        </Link>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`navbar__link ${isActive(item.path) ? 'navbar__link--active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`navbar__link navbar__link--cta ${isActive('/contact') ? 'navbar__link--active' : ''}`}
          >
            {t.getInTouch}
          </Link>
          <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
            <span className={`lang-toggle__option ${lang === 'fr' ? 'lang-toggle__option--active' : ''}`}>FR</span>
            <span className="lang-toggle__divider">/</span>
            <span className={`lang-toggle__option ${lang === 'en' ? 'lang-toggle__option--active' : ''}`}>EN</span>
          </button>
          <button className="theme-toggle" onClick={toggleDark} aria-label="Toggle dark mode">
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Logo" className="footer__logo-img" />
          <p className="footer__tagline">{t.tagline}</p>
        </div>
        <div className="footer__links">
          <Link to="/" className="footer__link">{translations[lang].nav.home}</Link>
          <Link to="/experience" className="footer__link">{translations[lang].nav.experience}</Link>
          <Link to="/projects" className="footer__link">{translations[lang].nav.projects}</Link>
          <Link to="/formation" className="footer__link">{translations[lang].nav.formation}</Link>
          <Link to="/skills" className="footer__link">{translations[lang].nav.skills}</Link>
          <Link to="/certifications" className="footer__link">{translations[lang].nav.certifications}</Link>
          <Link to="/languages" className="footer__link">{translations[lang].nav.languages}</Link>
          <Link to="/contact" className="footer__link">{translations[lang].nav.contact}</Link>
        </div>
        <div className="footer__social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} {t.copyright}</p>
      </div>
    </footer>
  )
}

function App() {
  const location = useLocation()

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv-preview" element={<CVPreview />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App