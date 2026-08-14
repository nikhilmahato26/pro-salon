import { motion } from 'framer-motion'
import { Instagram, Facebook, Heart } from 'lucide-react'
import { FadeInUp } from '../components/MagicUI'

const footerLinks = {
  Services: ['Bridal Meckup', 'Party Looks', 'Hair Styling & Spa', 'All Parlour Services'],
  Academy: ['Basic to Advanced', 'Bridal Master', 'Hair & Makeup Course', 'Certifications'],
  Studio: ['About Us', 'Services', 'Gallery', 'Contact & Booking'],
}

export default function Footer() {
  return (
    <footer className="bg-ebony border-t border-white/6">
      {/* CTA Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-b border-gold/15 py-14 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.1)_0%,transparent_70%)]" />
        <FadeInUp>
          <p className="font-body text-[10px] tracking-[5px] uppercase text-gold/60 mb-3">Ready to Transform?</p>
          <h3
            className="font-display text-4xl lg:text-5xl font-light text-white italic mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Your Most Beautiful Look Awaits
          </h3>
          <motion.button
            className="btn-gold"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Appointment
          </motion.button>
        </FadeInUp>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/colours-makeover-logo.png"
                alt="Professional Beauty Parlour & Meckup Artist"
                className="h-16 w-auto object-contain"
              />
              <div>
                <h4 className="font-display text-xl text-white font-light leading-tight">
                  Professional Beauty Parlour
                </h4>
                <p className="font-body text-[9px] tracking-[3px] uppercase text-gold/80">
                  & Meckup Artist
                </p>
              </div>
            </div>
            <p className="font-body text-white/45 text-sm leading-[1.8] mb-4 max-w-sm">
              Premier beauty parlour & makeup artistry in A/P Balawadi (Kha), Tel. Khanapur, Dist. Sangli. Complete salon care, bridal transformations, and all parlour services.
            </p>
            <div className="space-y-1.5 mb-6 text-xs font-body text-white/50">
              <p>📍 A/P Balawadi (Kha) Tel. Khanapur Dist. Sangli</p>
              <p>📞 <a href="tel:9552340641" className="hover:text-gold transition-colors">+91 9552340641</a> / <a href="tel:7276025792" className="hover:text-gold transition-colors">+91 7276025792</a></p>
              <p>✉️ <a href="mailto:vishalpakhare1911@gmail.com" className="hover:text-gold transition-colors">vishalpakhare1911@gmail.com</a></p>
            </div>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/coloursmakeover?igsh=MnVkeDQ3YXB6Mmgx' },
                { Icon: Facebook, href: '#' },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/12 flex items-center justify-center text-white/35 hover:border-gold hover:text-gold transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon size={13} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body text-[10px] tracking-[4px] uppercase text-white/40 mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const target = link.toLowerCase().includes('about') ? 'about'
                          : link.toLowerCase().includes('contact') || link.toLowerCase().includes('book') ? 'contact'
                          : link.toLowerCase().includes('gallery') ? 'gallery'
                          : link.toLowerCase().includes('academy') || link.toLowerCase().includes('course') ? 'academy'
                          : 'services';
                        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="font-body text-sm text-white/35 hover:text-gold transition-colors duration-200 block text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30 tracking-wide">
            © 2026 Professional Beauty Parlour & Meckup Artist. All rights reserved. A/P Balawadi (Kha) Tel. Khanapur Dist. Sangli.
          </p>
          <p className="font-body text-xs text-white/20 flex items-center gap-1.5">
            Crafted with <Heart size={10} className="text-blush/50 fill-blush/50" /> for beauty
          </p>
        </div>
      </div>
    </footer>
  )
}
