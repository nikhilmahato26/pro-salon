import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, Facebook } from 'lucide-react'

const navLinks = ['Home', 'Services', 'Gallery', 'Academy', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ebony/90 backdrop-blur-xl border-b border-gold/10' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/colours-makeover-logo.png"
              alt="Professional Beauty Parlour & Meckup Artist"
              className="h-14 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display text-base lg:text-lg font-light text-white tracking-wider leading-tight group-hover:text-gold transition-colors">
                Professional Beauty
              </span>
              <span className="font-body text-[8px] lg:text-[9px] tracking-[2px] uppercase text-gold/80">
                Parlour & Meckup Artist
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
              >
                <button
                  onClick={() => scrollTo(link)}
                  className="nav-link font-body text-xs"
                >
                  {link}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9552340641"
              className="font-body text-xs text-white/70 hover:text-gold border border-white/10 hover:border-gold/40 px-3.5 py-2 transition-all flex items-center gap-1.5"
            >
              <span>📞 9552340641</span>
            </a>
            <motion.button
              onClick={() => scrollTo('Contact')}
              className="btn-gold text-[10px] py-2.5 px-6 relative z-10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Book Now</span>
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white/70 hover:text-gold transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ebony flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                onClick={() => scrollTo(link)}
                className="font-display text-4xl font-light text-white/80 hover:text-gold transition-colors tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollTo('Contact')}
              className="btn-gold mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
