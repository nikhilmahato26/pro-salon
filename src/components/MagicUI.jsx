import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

// ── Animated Text Reveal (word by word) ─────────────────────────────────────
export function AnimatedText({ text, className = '', delay = 0, once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

// ── Character Stagger Reveal ─────────────────────────────────────────────────
export function CharReveal({ text, className = '', delay = 0, once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {text.split('').map((char, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', rotateX: -90 }}
            animate={isInView ? { y: 0, rotateX: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.03,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

// ── Fade In Up ──────────────────────────────────────────────────────────────
export function FadeInUp({ children, delay = 0, duration = 0.8, className = '', once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

// ── Fade In ─────────────────────────────────────────────────────────────────
export function FadeIn({ children, delay = 0, duration = 0.8, className = '', once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

// ── Stagger Container ────────────────────────────────────────────────────────
export function StaggerContainer({ children, className = '', staggerDelay = 0.1, once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

// ── Marquee ──────────────────────────────────────────────────────────────────
export function Marquee({ items, speed = 30 }) {
  const duplicated = [...items, ...items]
  return (
    <div className="marquee-wrapper flex overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {duplicated.map((item, i) => (
          <span key={i} className="flex items-center gap-6 text-xs tracking-[4px] uppercase font-light text-white/40">
            {item}
            <span className="inline-block w-1 h-1 rounded-full bg-gold" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

// ── Spotlight Card ───────────────────────────────────────────────────────────
export function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    ref.current.style.setProperty('--x', `${x}%`)
    ref.current.style.setProperty('--y', `${y}%`)
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div className="spotlight" />
      {children}
    </div>
  )
}

// ── Number Count Up ──────────────────────────────────────────────────────────
export function CountUp({ end, suffix = '', duration = 2, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const countRef = useRef(null)

  useEffect(() => {
    if (!isInView) return
    const start = 0
    const step = end / (duration * 60)
    let current = start
    const timer = setInterval(() => {
      current += step
      if (current >= end) {
        current = end
        clearInterval(timer)
      }
      if (countRef.current) countRef.current.textContent = Math.floor(current) + suffix
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView])

  return (
    <span ref={ref} className={className}>
      <span ref={countRef}>0{suffix}</span>
    </span>
  )
}

// ── Line Draw ────────────────────────────────────────────────────────────────
export function LineDraw({ className = '', delay = 0, once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  return (
    <motion.div
      ref={ref}
      className={`h-px bg-gradient-to-r from-transparent via-gold to-transparent ${className}`}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
      transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  )
}
