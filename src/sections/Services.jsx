import { motion } from 'framer-motion'
import { SparklesIcon, HeartIcon, CameraIcon, GraduationCapIcon, ScissorsIcon } from 'lucide-react'
import { FadeInUp, LineDraw } from '../components/MagicUI'

const services = [
  {
    icon: HeartIcon,
    tag: '01',
    title: 'Bridal Meckup & Makeovers',
    subtitle: 'Your Dream Wedding Look',
    desc: 'Complete bridal packages from pre-bridal care to wedding day makeup. HD, airbrush, traditional bridal looks, jewellery styling & saree draping.',
    price: 'Custom Packages',
    features: ['HD & Airbrush Bridal Look', 'Saree & Dupatta Draping', 'Jewellery & Hair Setting', 'Pre-Bridal Packages'],
    image: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.04%20(1).jpeg',
    accent: '#F2B8C6',
  },
  {
    icon: SparklesIcon,
    tag: '02',
    title: 'Party & Special Occasions',
    subtitle: 'Glow for Every Event',
    desc: 'Engagement, sangeet, reception, festive and family functions. Flawless party makeup and glam tailored to match your outfit and style.',
    price: 'Popular Choice',
    features: ['Engagement & Reception Glam', 'Festive & Sangeet Makeup', 'Side / Family Makeup', 'Hairstyling Included'],
    image: '/festive/WhatsApp%20Image%202026-05-20%20at%2010.33.25%20(2).jpeg',
    accent: '#C9A96E',
  },
  {
    icon: ScissorsIcon,
    tag: '03',
    title: 'Hair Styling & Spa Treatments',
    subtitle: 'Style, Treat & Transform',
    desc: 'Professional hair cutting, styling, hair spa, smoothing, straightening, keratin treatments, and traditional to modern bridal hairstyles.',
    price: 'All Hair Services',
    features: ['Bridal Updos & Braiding', 'Hair Spa & Nourishment', 'Straightening & Keratin', 'Custom Hair Cuts & Blowdry'],
    image: '/glam/WhatsApp%20Image%202026-05-20%20at%2010.28.32.jpeg',
    accent: '#E8D5C4',
  },
  {
    icon: SparklesIcon,
    tag: '04',
    title: 'Facials & Skin Treatments',
    subtitle: 'Radiant, Glowing Skin',
    desc: 'Rejuvenating facials, cleanup, skin brightening, de-tan, and fruit / gold / diamond facials using premium skin-safe products.',
    price: 'Complete Skincare',
    features: ['Gold & Diamond Facials', 'Deep Cleansing & De-Tan', 'Skin Glowing Treatments', 'Anti-Tan & Bleach'],
    image: '/beauty.jpg',
    accent: '#F2B8C6',
  },
  {
    icon: CameraIcon,
    tag: '05',
    title: 'All Parlour Services',
    subtitle: 'Complete Head-to-Toe Care',
    desc: 'Complete beauty salon services including threading, waxing, manicure, pedicure, mehendi, skin care, and day-to-day beauty grooming.',
    price: 'All Sarvice Offered',
    features: ['Threading & Waxing', 'Manicure & Pedicure', 'Mehendi & Body Polishing', 'Daily Salon & Grooming'],
    image: '/editorial/WhatsApp%20Image%202026-05-20%20at%2010.30.18%20(1).jpeg',
    accent: '#C9A96E',
  },
  {
    icon: GraduationCapIcon,
    tag: '06',
    title: 'Beauty & Meckup Academy',
    subtitle: 'Learn Professional Artistry',
    desc: 'Comprehensive training for aspiring beauticians and makeup artists. Hands-on learning, practical guidance, and certification.',
    price: 'Course Enrollment',
    features: ['Basic to Advanced Meckup', 'Hair Styling Mastery', 'Practical Hands-on Sessions', 'Certificate of Completion'],
    image: '/glam/WhatsApp%20Image%202026-05-20%20at%2010.28.31%20(2).jpeg',
    accent: '#E8D5C4',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-40 bg-ebony relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-blush/5 blur-[80px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeInUp delay={0}>
            <span className="font-body text-[10px] tracking-[6px] uppercase text-gold/60 mb-4 block">
              What We Offer
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] font-light text-white leading-none mb-4">
              Our{' '}
              <span className="italic text-gold-gradient" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Services
              </span>
            </h2>
          </FadeInUp>
          <LineDraw className="max-w-xs mx-auto mt-6" delay={0.3} />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <FadeInUp key={service.title} delay={i * 0.12} className={i === services.length - 1 && services.length % 2 !== 0 ? 'md:col-span-2' : ''}>
              <motion.div
                className="group relative bg-white/[0.03] border border-white/8 overflow-hidden"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ebony/20 to-ebony/90" />

                  {/* Tag number */}
                  <div className="absolute top-4 left-4 font-display text-7xl font-light text-white/10 leading-none">
                    {service.tag}
                  </div>

                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-ebony/70 backdrop-blur-sm border border-gold/30 px-3 py-1.5">
                    <span className="font-body text-xs text-gold tracking-wider">{service.price}</span>
                  </div>

                  {/* Icon */}
                  <div
                    className="absolute bottom-4 left-6 w-10 h-10 flex items-center justify-center border"
                    style={{ borderColor: `${service.accent}40`, backgroundColor: `${service.accent}15` }}
                  >
                    <service.icon size={16} style={{ color: service.accent }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="font-body text-[9px] tracking-[3px] uppercase mb-2" style={{ color: service.accent + 'aa' }}>
                    {service.subtitle}
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-light text-white mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-body text-white/45 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gold/60" />
                        <span className="font-body text-[11px] text-white/40 tracking-wide">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="btn-outline-gold text-[10px] py-3 px-6 w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book This Service
                  </motion.button>
                </div>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
                />
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeInUp delay={0.4} className="text-center mt-16">
          <p className="font-body text-white/30 text-sm mb-6 tracking-wide">
            Looking for something custom? Let's talk about your vision.
          </p>
          <motion.button
            className="btn-gold"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Custom Quote
          </motion.button>
        </FadeInUp>
      </div>
    </section>
  )
}
