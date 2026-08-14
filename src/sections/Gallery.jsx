import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { FadeInUp, LineDraw } from '../components/MagicUI'

const galleryItems = [
  // Bridal – 12 images
  { id: 1,  url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.03.jpeg',       tag: 'Bridal',    size: 'tall'   },
  { id: 2,  url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.04.jpeg',       tag: 'Bridal',    size: 'normal' },
  { id: 3,  url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.04%20(1).jpeg', tag: 'Bridal',    size: 'normal' },
  { id: 4,  url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.06.jpeg',       tag: 'Bridal',    size: 'tall'   },
  { id: 5,  url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.06%20(1).jpeg', tag: 'Bridal',    size: 'normal' },
  { id: 6,  url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.07.jpeg',       tag: 'Bridal',    size: 'normal' },
  { id: 7,  url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.07%20(1).jpeg', tag: 'Bridal',    size: 'tall'   },
  { id: 8,  url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.07%20(2).jpeg', tag: 'Bridal',    size: 'normal' },
  { id: 9,  url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.08.jpeg',       tag: 'Bridal',    size: 'normal' },
  { id: 10, url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.08%20(1).jpeg', tag: 'Bridal',    size: 'tall'   },
  { id: 11, url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.08%20(2).jpeg', tag: 'Bridal',    size: 'normal' },
  { id: 12, url: '/bridel/WhatsApp%20Image%202026-05-20%20at%2010.26.09.jpeg',       tag: 'Bridal',    size: 'normal' },
  // Editorial – 6 images
  { id: 13, url: '/editorial/WhatsApp%20Image%202026-05-20%20at%2010.30.17.jpeg',       tag: 'Editorial', size: 'tall'   },
  { id: 14, url: '/editorial/WhatsApp%20Image%202026-05-20%20at%2010.30.17%20(1).jpeg', tag: 'Editorial', size: 'normal' },
  { id: 15, url: '/editorial/WhatsApp%20Image%202026-05-20%20at%2010.30.17%20(2).jpeg', tag: 'Editorial', size: 'normal' },
  { id: 16, url: '/editorial/WhatsApp%20Image%202026-05-20%20at%2010.30.18.jpeg',       tag: 'Editorial', size: 'tall'   },
  { id: 17, url: '/editorial/WhatsApp%20Image%202026-05-20%20at%2010.30.18%20(1).jpeg', tag: 'Editorial', size: 'normal' },
  { id: 18, url: '/editorial/WhatsApp%20Image%202026-05-20%20at%2010.30.18%20(2).jpeg', tag: 'Editorial', size: 'normal' },
  // Festive – 5 images
  { id: 19, url: '/festive/WhatsApp%20Image%202026-05-20%20at%2010.33.25.jpeg',       tag: 'Festive',   size: 'tall'   },
  { id: 20, url: '/festive/WhatsApp%20Image%202026-05-20%20at%2010.33.25%20(1).jpeg', tag: 'Festive',   size: 'normal' },
  { id: 21, url: '/festive/WhatsApp%20Image%202026-05-20%20at%2010.33.25%20(2).jpeg', tag: 'Festive',   size: 'normal' },
  { id: 22, url: '/festive/WhatsApp%20Image%202026-05-20%20at%2010.33.26.jpeg',       tag: 'Festive',   size: 'tall'   },
  { id: 23, url: '/festive/WhatsApp%20Image%202026-05-20%20at%2010.33.26%20(1).jpeg', tag: 'Festive',   size: 'normal' },
  // Glam – 7 images
  { id: 24, url: '/glam/WhatsApp%20Image%202026-05-20%20at%2010.28.29.jpeg',       tag: 'Glam',      size: 'tall'   },
  { id: 25, url: '/glam/WhatsApp%20Image%202026-05-20%20at%2010.28.30.jpeg',       tag: 'Glam',      size: 'normal' },
  { id: 26, url: '/glam/WhatsApp%20Image%202026-05-20%20at%2010.28.30%20(1).jpeg', tag: 'Glam',      size: 'normal' },
  { id: 27, url: '/glam/WhatsApp%20Image%202026-05-20%20at%2010.28.31.jpeg',       tag: 'Glam',      size: 'tall'   },
  { id: 28, url: '/glam/WhatsApp%20Image%202026-05-20%20at%2010.28.31%20(1).jpeg', tag: 'Glam',      size: 'normal' },
  // { id: 29, url: '/glam/WhatsApp%20Image%202026-05-20%20at%2010.28.31%20(2).jpeg', tag: 'Glam',      size: 'normal' },
  // { id: 30, url: '/glam/WhatsApp%20Image%202026-05-20%20at%2010.28.32.jpeg',       tag: 'Glam',      size: 'tall'   },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const tags = ['All', 'Bridal', 'Editorial', 'Glam', 'Festive']
  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(g => g.tag === filter)

  return (
    <section id="gallery" className="py-28 lg:py-40 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-gold/4 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInUp delay={0}>
            <span className="font-body text-[10px] tracking-[6px] uppercase text-gold/60 mb-4 block">Our Portfolio</span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-display text-[clamp(40px,6vw,80px)] font-light text-white leading-none">
              The{' '}
              <span className="italic text-gold-gradient" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Works
              </span>
            </h2>
          </FadeInUp>
          <LineDraw className="max-w-xs mx-auto mt-6" delay={0.3} />
        </div>

        {/* Filter Tabs */}
        <FadeInUp delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {tags.map(tag => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`font-body text-[10px] tracking-[3px] uppercase px-5 py-2.5 border transition-all duration-300 ${
                filter === tag
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-white/10 text-white/40 hover:border-gold/40 hover:text-white/70'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {tag}
            </motion.button>
          ))}
        </FadeInUp>

        {/* Masonry Grid */}
        <motion.div
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          layout
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                className="break-inside-avoid overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => setSelected(item)}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={item.url}
                    alt={item.tag}
                    className={`w-full object-cover ${
                      item.size === 'tall' ? 'h-80' : item.size === 'wide' ? 'h-44' : 'h-56'
                    }`}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ebony/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                    <div>
                      <span className="font-body text-[10px] tracking-[3px] uppercase text-gold block mb-1">{item.tag}</span>
                      <span className="font-display text-lg text-white italic">View</span>
                    </div>
                  </div>
                  {/* Border accent */}
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-ebony/95 backdrop-blur-lg flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={e => e.stopPropagation()}
            >
              <img src={selected.url} alt={selected.tag} className="w-full object-cover max-h-[80vh]" />
              <div className="absolute top-4 left-4 border border-gold/30 px-4 py-1.5 bg-ebony/80 backdrop-blur-sm">
                <span className="font-body text-xs text-gold tracking-[3px] uppercase">{selected.tag}</span>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-ebony/80 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-gold transition-all"
              >
                <X size={16} />
              </button>
              {/* Frame accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-gold/60 -translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-gold/60 translate-x-1 translate-y-1" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
