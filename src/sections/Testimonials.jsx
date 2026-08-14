import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeInUp, LineDraw } from '../components/MagicUI'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride, December 2024',
    quote: 'Professional Beauty Parlour & Meckup Artist made me feel like an absolute queen on my wedding day. The HD bridal look lasted all day, and I received so many compliments. The team truly understood my vision.',
    stars: 5,
    avatar: 'PS',
    color: '#F2B8C6',
  },
  {
    name: 'Divya Mehta',
    role: 'Academy Graduate, 2024',
    quote: 'I completed the Pro Bridal Master course and landed my first bridal client within a month! The mentorship and hands-on training was incredible. Best investment I made in myself.',
    stars: 5,
    avatar: 'DM',
    color: '#C9A96E',
  },
  {
    name: 'Sneha Patel',
    role: 'Sangeet & Reception',
    quote: 'The team did my entire family for our sangeet and reception. Every look was perfect, from my mother-in-law to my bridesmaids. Professional, punctual and absolutely talented.',
    stars: 5,
    avatar: 'SP',
    color: '#E8D5C4',
  },
  {
    name: 'Riya Kapoor',
    role: 'Editorial Client',
    quote: 'I needed a dramatic editorial look for my portfolio shoot and wow — they absolutely nailed it. Bold, striking, yet refined. The makeup photographer kept raving about the quality.',
    stars: 5,
    avatar: 'RK',
    color: '#F2B8C6',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoplay])

  const prev = () => { setAutoplay(false); setCurrent(c => (c - 1 + testimonials.length) % testimonials.length) }
  const next = () => { setAutoplay(false); setCurrent(c => (c + 1) % testimonials.length) }

  return (
    <section className="py-28 lg:py-40 bg-ebony relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInUp delay={0}>
            <span className="font-body text-[10px] tracking-[6px] uppercase text-gold/60 mb-4 block">Kind Words</span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] font-light text-white leading-none">
              Client{' '}
              <span className="italic text-gold-gradient" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Stories
              </span>
            </h2>
          </FadeInUp>
          <LineDraw className="max-w-xs mx-auto mt-6" delay={0.3} />
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="text-center px-4 lg:px-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[current].stars)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Star size={14} className="fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-2xl lg:text-3xl font-light italic text-white/85 leading-relaxed mb-10 max-w-3xl mx-auto">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-body font-medium text-ebony text-sm"
                  style={{ backgroundColor: testimonials[current].color }}
                >
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <div className="font-body text-sm font-medium text-white">{testimonials[current].name}</div>
                  <div className="font-body text-xs text-white/35 tracking-wide mt-0.5">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i) }}
                  className="transition-all duration-300"
                >
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      i === current ? 'w-6 h-1 bg-gold' : 'w-1 h-1 bg-white/20'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
