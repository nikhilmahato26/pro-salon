import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { AnimatedText, FadeIn, FadeInUp } from '../components/MagicUI'

// Beautiful hero images from Unsplash (makeup/beauty themed)
const heroImages = [
  '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.04.jpeg',
  '/beauty.jpg',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
]

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { width, height } = containerRef.current.getBoundingClientRect()
      const x = (clientX / width - 0.5) * 20
      const y = (clientY / height - 0.5) * 20
      containerRef.current.style.setProperty('--mx', `${x}px`)
      containerRef.current.style.setProperty('--my', `${y}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-ebony grain-overlay"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold/8 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-blush/10 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/4 blur-[120px]" />
      </div>

      {/* Decorative lines */}
      <motion.div
        className="absolute left-8 top-1/4 w-px h-48 bg-gradient-to-b from-transparent via-gold/40 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      <motion.div
        className="absolute right-8 bottom-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="relative z-10">
            {/* Pre-title */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold font-body text-xs tracking-[4px] uppercase">
                Balawadi (Khanapur) · Sangli
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-display font-light leading-[0.95] mb-6">
              <div className="overflow-hidden">
                <motion.div
                  className="text-white text-[clamp(42px,6.5vw,84px)] block font-light"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Professional
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  className="gold-shimmer text-[clamp(44px,6.8vw,88px)] italic block"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Beauty Parlour
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  className="text-white/80 text-[clamp(20px,3vw,36px)] font-light tracking-widest block mt-2"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  & Meckup Artist
                </motion.div>
              </div>
            </h1>

            {/* Description */}
            <motion.p
              className="font-body text-white/50 text-sm leading-relaxed max-w-md mt-8 mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Where beauty meets perfection. Premier beauty parlour & makeup destination in A/P Balawadi (Kha), Khanapur, Sangli — providing all parlour services, stunning bridal makeovers & professional artistry.
            </motion.p>

            {/* Credential Highlights */}
            <motion.div
              className="flex flex-col gap-2 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { icon: '💄', text: 'Professional Meckup Artist & Bridal Specialist' },
                { icon: '✨', text: 'All Parlour, Hair & Skincare Services' },
                { icon: '📍', text: 'A/P Balawadi (Kha) Tel. Khanapur Dist. Sangli' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-base leading-none">{item.icon}</span>
                  <span className="font-body text-xs text-white/55 tracking-wide">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.button
                className="btn-gold"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Book Your Look</span>
              </motion.button>
              <motion.button
                className="btn-outline-gold"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-10 mt-14 pt-10 border-t border-white/8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              {[
                { num: '10,000+', label: 'Happy Clients' },
                { num: '14+', label: 'Years of Excellence' },
                { num: '1200+', label: 'Students Trained' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-gold font-light">{stat.num}</div>
                  <div className="font-body text-white/35 text-[10px] tracking-[2px] uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image Collage */}
          <div className="relative lg:h-[700px] hidden lg:block">
            {/* Main large image */}
            <motion.div
              className="absolute right-0 top-0 w-[75%] h-[85%] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <motion.div
                className="w-full h-full"
                style={{
                  transform: 'translate(var(--mx, 0px), var(--my, 0px)) scale(1.1)',
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <img
                  src={heroImages[0]}
                  alt="Luxury makeup"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Gold frame accent */}
              <div className="absolute inset-0 border border-gold/20" />
              <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-gold/60" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-gold/60" />
            </motion.div>

            {/* Small accent image bottom left */}
            <motion.div
              className="absolute left-0 bottom-0 w-[42%] h-[45%] overflow-hidden border-2 border-charcoal"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img
                src={heroImages[1]}
                alt="Bridal makeup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ebony/60 to-transparent" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute left-[35%] top-8 bg-gold/10 backdrop-blur-sm border border-gold/30 px-5 py-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              <div className="font-script text-2xl text-gold" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Luxury
              </div>
              <div className="font-body text-[8px] text-white/50 tracking-[3px] uppercase">
                Beauty Studio
              </div>
            </motion.div>

            {/* Vertical text */}
            <motion.div
              className="absolute -right-4 top-1/2 -translate-y-1/2 rotate-90 font-body text-[9px] tracking-[6px] uppercase text-gold/30 whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Balawadi (Kha) · Sangli
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="font-body text-[9px] tracking-[4px] uppercase text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={14} className="text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
