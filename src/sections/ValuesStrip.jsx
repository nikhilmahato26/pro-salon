import { motion } from 'framer-motion'
import { Gem, Clock, Heart, Users } from 'lucide-react'
import { FadeInUp } from '../components/MagicUI'

const values = [
  { icon: Gem, title: 'Luxury Quality', desc: 'Only premium, skin-safe products' },
  { icon: Clock, title: 'Punctuality', desc: 'Always on time, every time' },
  { icon: Heart, title: 'Client-First', desc: 'Your vision, our expertise' },
  { icon: Users, title: 'Expert Team', desc: '8+ years of professional artistry' },
]

export default function ValuesStrip() {
  return (
    <section className="py-20 bg-charcoal border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,169,110,0.03)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <FadeInUp key={v.title} delay={i * 0.1}>
              <motion.div
                className="flex flex-col items-center text-center group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 border border-gold/25 flex items-center justify-center mb-5 group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-400">
                  <v.icon size={20} className="text-gold/60 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-display text-lg font-light text-white mb-2">{v.title}</h3>
                <p className="font-body text-white/35 text-xs tracking-wide">{v.desc}</p>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
