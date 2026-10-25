'use client'

import { motion } from 'framer-motion'

interface Circle {
  size: number
  color: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  delay?: number
}

interface FloatingCirclesProps {
  circles?: Circle[]
  className?: string
}

const defaultCircles: Circle[] = [
  { size: 200, color: 'rgba(233, 30, 140, 0.12)', top: '10%', right: '-5%', delay: 0 },
  { size: 150, color: 'rgba(74, 144, 184, 0.10)', top: '60%', left: '-3%', delay: 1 },
  { size: 120, color: 'rgba(233, 30, 140, 0.08)', bottom: '10%', right: '10%', delay: 2 },
  { size: 80, color: 'rgba(201, 169, 110, 0.10)', top: '30%', left: '15%', delay: 0.5 },
]

export default function FloatingCircles({ circles = defaultCircles, className = '' }: FloatingCirclesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            top: circle.top,
            left: circle.left,
            right: circle.right,
            bottom: circle.bottom,
            filter: 'blur(40px)',
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: circle.delay || 0,
          }}
        />
      ))}
    </div>
  )
}
