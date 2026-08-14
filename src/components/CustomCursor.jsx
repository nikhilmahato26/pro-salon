import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const followerX = useSpring(cursorX, { stiffness: 120, damping: 20 })
  const followerY = useSpring(cursorY, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const handleMove = (e) => {
      cursorX.set(e.clientX - 6)
      cursorY.set(e.clientY - 6)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{ left: cursorX, top: cursorY }}
      />
      <motion.div
        className="custom-cursor-follower"
        style={{ left: followerX, top: followerY, marginLeft: -12, marginTop: -12 }}
      />
    </>
  )
}
