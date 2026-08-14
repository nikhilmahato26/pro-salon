import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Hero from './sections/Hero'
import ValuesStrip from './sections/ValuesStrip'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Academy from './sections/Academy'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function Loader({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-ebony flex flex-col items-center justify-center"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }}
    >
      <div className="relative mb-8">
        <motion.div
          className="w-20 h-20 border border-gold/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-2 border border-gold/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gold" />
        </div>
      </div>
      <motion.span
        className="font-script text-2xl md:text-3xl text-gold-gradient block mb-4 text-center px-4"
        style={{ fontFamily: "'Great Vibes', cursive" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Professional Beauty Parlour & Meckup Artist
      </motion.span>
      <div className="w-48 h-px bg-white/10 overflow-hidden">
        <motion.div
          className="h-full bg-gold origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          onAnimationComplete={onFinish}
        />
      </div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => { document.body.style.cursor = 'auto' }
  }, [])

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading && <Loader key="loader" onFinish={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Navbar />
          <main>
            <Hero />
            <ValuesStrip />
            <Services />
            <Gallery />
            <About />
            <Academy />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
