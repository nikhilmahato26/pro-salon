import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react'
import { FadeInUp, LineDraw } from '../components/MagicUI'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hi, I'd like to book a service at Professional Beauty Parlour & Meckup Artist!\n\nName: ${form.name}\nPhone: ${form.phone}${form.email ? `\nEmail: ${form.email}` : ''}${form.service ? `\nService: ${form.service}` : ''}${form.message ? `\nMessage: ${form.message}` : ''}`
    window.open(`https://wa.me/919552340641?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
  }

  const inputClass = `w-full bg-white/[0.04] border border-white/10 px-4 py-3.5 font-body text-sm text-white placeholder-white/25
    focus:outline-none focus:border-gold/50 transition-colors duration-300`

  const services = [
    'All Parlour Services',
    'Bridal Meckup & Makeover',
    'Party & Special Occasion Makeup',
    'Hair Styling & Hair Spa / Smoothing',
    'Facials & Skincare Treatments',
    'Beauty & Meckup Academy Enquiry',
    'Other Beauty Services',
  ]

  return (
    <section id="contact" className="py-28 lg:py-40 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-gold/4 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInUp delay={0}>
            <span className="font-body text-[10px] tracking-[6px] uppercase text-gold/60 mb-4 block">Get In Touch</span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-display text-[clamp(36px,5vw,72px)] font-light text-white leading-none">
              Book Your{' '}
              <span className="italic text-gold-gradient" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Appointment
              </span>
            </h2>
          </FadeInUp>
          <LineDraw className="max-w-xs mx-auto mt-6" delay={0.3} />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <FadeInUp delay={0.1}>
              <p className="font-body text-white/45 text-sm leading-[1.9]">
                Ready for your flawless transformation? Contact us today for appointments, bridal bookings, and parlour service enquiries.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-gold/70" />
                </div>
                <div>
                  <div className="font-body text-[10px] tracking-[3px] uppercase text-white/30 mb-1">Business Location / Address</div>
                  <div className="font-body text-sm text-white/80 whitespace-pre-line leading-relaxed">
                    A/P Balawadi (Kha){'\n'}Tel. Khanapur, Dist. Sangli{'\n'}Maharashtra, India
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-gold/70" />
                </div>
                <div>
                  <div className="font-body text-[10px] tracking-[3px] uppercase text-white/30 mb-1">Phone Numbers / WhatsApp</div>
                  <div className="space-y-1">
                    <div>
                      <a href="tel:9552340641" className="font-body text-sm text-white/80 hover:text-gold transition-colors duration-200 block">
                        +91 9552340641
                      </a>
                    </div>
                    <div>
                      <a href="tel:7276025792" className="font-body text-sm text-white/80 hover:text-gold transition-colors duration-200 block">
                        +91 7276025792
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-gold/70" />
                </div>
                <div>
                  <div className="font-body text-[10px] tracking-[3px] uppercase text-white/30 mb-1">Email Address</div>
                  <a href="mailto:vishalpakhare1911@gmail.com"
                    className="font-body text-sm text-white/80 hover:text-gold transition-colors duration-200">
                    vishalpakhare1911@gmail.com
                  </a>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-gold/70" />
                </div>
                <div>
                  <div className="font-body text-[10px] tracking-[3px] uppercase text-white/30 mb-1">Working Hours</div>
                  <div className="font-body text-sm text-white/65 whitespace-pre-line leading-relaxed">
                    Mon – Sun: 9:00 AM – 8:00 PM{'\n'}All Sarvice Available
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Social */}
            <FadeInUp delay={0.6}>
              <div>
                <div className="font-body text-[10px] tracking-[3px] uppercase text-white/30 mb-4">Follow Us</div>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: 'https://www.instagram.com/coloursmakeover?igsh=MnVkeDQ3YXB6Mmgx', label: 'Instagram' },
                    { icon: Facebook, href: '#', label: 'Facebook' },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={14} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right: Form */}
          <FadeInUp delay={0.2} className="lg:col-span-3">
            <div className="relative border border-white/8 p-8 lg:p-10">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-gold/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-gold/30" />

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center h-80 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 border-2 border-gold flex items-center justify-center mb-6">
                    <span className="text-gold text-2xl">✓</span>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">Message Sent!</h3>
                  <p className="font-body text-white/45 text-sm">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-[10px] tracking-[3px] uppercase text-white/35 block mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className={inputClass}
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="font-body text-[10px] tracking-[3px] uppercase text-white/35 block mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-[10px] tracking-[3px] uppercase text-white/35 block mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className={inputClass}
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="font-body text-[10px] tracking-[3px] uppercase text-white/35 block mb-2">Service Interested In</label>
                    <select
                      className={`${inputClass} appearance-none cursor-pointer`}
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="" className="bg-charcoal">Select a service...</option>
                      {services.map(s => (
                        <option key={s} value={s} className="bg-charcoal">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-[10px] tracking-[3px] uppercase text-white/35 block mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your occasion, date, requirements..."
                      className={`${inputClass} resize-none`}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-gold w-full relative z-10"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Send Message</span>
                  </motion.button>
                </form>
              )}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
