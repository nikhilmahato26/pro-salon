import { motion } from 'framer-motion'
import { Check, Clock, Users, Award } from 'lucide-react'
import { FadeInUp, FadeIn, LineDraw, CountUp } from '../components/MagicUI'

const courses = [
  {
    level: 'Beginner',
    title: 'Foundation Artistry',
    duration: '3 Months',
    sessions: '24 Sessions',
    desc: 'Perfect start for aspiring MUAs. Master skin prep, correction techniques, basic eye & lip work.',
    price: '₹25,000',
    highlights: ['Skin Prep & Foundation', 'Eye Makeup Basics', 'Lip Art', 'Natural & Glam Looks'],
    tag: 'Most Popular',
    tagColor: '#F2B8C6',
  },
  {
    level: 'Advanced',
    title: 'Pro Bridal Master',
    duration: '4 Months',
    sessions: '32 Sessions',
    desc: 'Complete bridal, airbrush & HD techniques for professional MUAs ready to take on weddings.',
    price: '₹45,000',
    highlights: ['HD & Airbrush Mastery', 'Bridal Packages', 'Editorial Techniques', 'Portfolio Building'],
    tag: 'Career Fast-Track',
    tagColor: '#C9A96E',
  },
  {
    level: 'Certificate',
    title: 'Complete Artistry',
    duration: '6 Months',
    sessions: '52 Sessions',
    desc: 'Full professional certification covering all areas from bridal to editorial, business & client management.',
    price: '₹75,000',
    highlights: ['All Skills Covered', 'Industry Certification', 'Business Training', 'Job Placement Support'],
    tag: 'Best Value',
    tagColor: '#E8D5C4',
  },
]

const stats = [
  { value: 1200, suffix: '+', label: 'Students Trained' },
  { value: 98, suffix: '%', label: 'Placement Rate' },
  { value: 6, suffix: '+', label: 'Course Levels' },
  { value: 8, suffix: '+', label: 'Years Teaching' },
]

export default function Academy() {
  return (
    <section id="academy" className="py-28 lg:py-40 bg-ebony relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-gold/5 blur-[80px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-blush/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <FadeInUp delay={0}>
              <span className="font-body text-[10px] tracking-[6px] uppercase text-gold/60 mb-4 block">Professional Education</span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="font-display text-[clamp(40px,5vw,72px)] font-light text-white leading-none">
                Beauty{' '}
                <span className="italic text-gold-gradient block" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Academy
                </span>
              </h2>
            </FadeInUp>
          </div>
          <FadeInUp delay={0.2} className="lg:text-right">
            <p className="font-body text-white/45 text-sm leading-relaxed max-w-md lg:ml-auto">
              Train under industry experts with hands-on experience, live model sessions, and career guidance that launches real careers in beauty.
            </p>
          </FadeInUp>
        </div>

        <LineDraw delay={0.2} className="mb-20" />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <FadeInUp key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display text-5xl lg:text-6xl font-light mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} className="text-gold" />
                </div>
                <div className="font-body text-[10px] tracking-[3px] uppercase text-white/35">{stat.label}</div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Courses */}
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <FadeInUp key={course.title} delay={i * 0.15}>
              <motion.div
                className="relative border border-white/8 bg-white/[0.02] p-8 h-full flex flex-col"
                whileHover={{ y: -8, borderColor: 'rgba(201,169,110,0.3)' }}
                transition={{ duration: 0.4 }}
              >
                {/* Tag */}
                <div
                  className="inline-flex self-start mb-6 px-3 py-1 text-[9px] font-body tracking-[3px] uppercase"
                  style={{ backgroundColor: `${course.tagColor}15`, color: course.tagColor, border: `1px solid ${course.tagColor}30` }}
                >
                  {course.tag}
                </div>

                <div className="font-body text-[10px] tracking-[3px] uppercase text-white/30 mb-2">{course.level}</div>
                <h3 className="font-display text-2xl font-light text-white mb-3 leading-tight">{course.title}</h3>
                <p className="font-body text-white/40 text-sm leading-relaxed mb-6">{course.desc}</p>

                {/* Meta */}
                <div className="flex gap-6 mb-6 pb-6 border-b border-white/8">
                  <div className="flex items-center gap-2 text-white/40">
                    <Clock size={12} className="text-gold/60" />
                    <span className="font-body text-xs">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/40">
                    <Users size={12} className="text-gold/60" />
                    <span className="font-body text-xs">{course.sessions}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5 mb-8 flex-1">
                  {course.highlights.map(h => (
                    <div key={h} className="flex items-center gap-3">
                      <div className="w-4 h-4 border border-gold/30 flex items-center justify-center flex-shrink-0">
                        <Check size={9} className="text-gold" />
                      </div>
                      <span className="font-body text-xs text-white/50">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl text-gold font-light">{course.price}</span>
                    <span className="font-body text-xs text-white/30">full course</span>
                  </div>
                  <motion.button
                    className="btn-outline-gold w-full text-[10px] py-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Enquire Now
                  </motion.button>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-gold/20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-gold/20" />
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
