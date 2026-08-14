import { motion } from 'framer-motion'
import { FadeInUp, FadeIn, LineDraw, Marquee } from '../components/MagicUI'

const values = [
  { title: 'Precision', desc: 'Every stroke intentional, every detail perfected.' },
  { title: 'Elegance', desc: 'Timeless aesthetics crafted for the modern woman.' },
  { title: 'Passion', desc: 'We love what we do — and it shows in every look.' },
  { title: 'Empowerment', desc: 'Helping women feel their most confident selves.' },
]

const marqueeItems = [
  'Bridal Meckup', 'Professional Beauty Parlour', 'All Parlour Services',
  'Hair & Skin Treatments', 'Balawadi · Sangli', 'Expert Makeovers',
]

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-40 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      {/* Marquee Banner */}
      <div className="mb-24 py-5 border-y border-white/5">
        <Marquee items={marqueeItems} speed={20} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <FadeIn delay={0} className="relative">
            <div className="relative">
              {/* Main image */}
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&q=80"
                  alt="Professional Beauty Parlour & Meckup Artist"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
                {/* Frame */}
                <div className="absolute inset-0 border border-gold/15" />
                <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-gold/50" />
                <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-gold/50" />
              </motion.div>

              {/* Floating quote card */}
              <motion.div
                className="absolute -bottom-8 -right-4 lg:-right-10 bg-gold/10 backdrop-blur-sm border border-gold/30 p-6 max-w-xs"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="font-display text-lg italic text-white/80 leading-snug mb-3">
                  "Beauty is not about being perfect — it's about feeling like your most radiant self."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-gold/50" />
                  <span className="font-body text-[10px] tracking-[3px] uppercase text-gold/70">Our Philosophy</span>
                </div>
              </motion.div>

              {/* Year badge */}
              <motion.div
                className="absolute -top-6 -left-4 lg:-left-8 w-24 h-24 bg-gold flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="font-display text-ebony text-3xl font-light leading-none">8+</span>
                <span className="font-body text-ebony text-[8px] tracking-[2px] uppercase mt-1">Years</span>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <div>
            <FadeInUp delay={0.1}>
              <span className="font-body text-[10px] tracking-[6px] uppercase text-gold/60 mb-4 block">Our Story</span>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <h2 className="font-display text-[clamp(32px,4.5vw,56px)] font-light text-white leading-[1.1] mb-6">
                Welcome to{' '}
                <span
                  className="italic block text-gold-gradient"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Professional Beauty Parlour
                </span>
                <span className="text-white/80 text-[clamp(18px,2.5vw,28px)] block mt-1 tracking-wider">
                  & Meckup Artist
                </span>
              </h2>
            </FadeInUp>

            <LineDraw delay={0.3} className="max-w-16 mb-8" />

            <FadeInUp delay={0.35}>
              <p className="font-body text-white/50 text-sm leading-[1.9] mb-5">
                Born from a passion for beauty and a deep commitment to excellence, Professional Beauty Parlour & Meckup Artist has been enhancing natural beauty and transforming looks in A/P Balawadi (Kha), Tel. Khanapur, Dist. Sangli.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <p className="font-body text-white/40 text-sm leading-[1.9] mb-10">
                We take pride in offering all beauty parlour and makeover services — from bespoke bridal makeup and hairstyle artistry to rejuvenating facials, skin treatments, and complete salon grooming. We ensure every client leaves feeling confident, radiant, and empowered.
              </p>
            </FadeInUp>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <FadeInUp key={v.title} delay={0.5 + i * 0.1}>
                  <div className="border border-white/8 p-5 group hover:border-gold/30 transition-colors duration-300">
                    <div className="font-display text-lg text-gold font-light mb-2 group-hover:text-gold-light transition-colors">
                      {v.title}
                    </div>
                    <p className="font-body text-white/35 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
