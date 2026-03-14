import { motion } from 'motion/react';

const PARTICLES = [
  { top: '5%', left: '10%', size: 3, duration: 8, delay: 0 },
  { top: '15%', left: '85%', size: 2, duration: 10, delay: 1 },
  { top: '25%', left: '30%', size: 4, duration: 7, delay: 2 },
  { top: '35%', left: '70%', size: 2, duration: 12, delay: 0.5 },
  { top: '45%', left: '20%', size: 3, duration: 9, delay: 1.5 },
  { top: '55%', left: '90%', size: 2, duration: 11, delay: 3 },
  { top: '65%', left: '50%', size: 4, duration: 8, delay: 0.8 },
  { top: '75%', left: '15%', size: 3, duration: 10, delay: 2 },
  { top: '80%', left: '75%', size: 2, duration: 7, delay: 1.2 },
  { top: '90%', left: '40%', size: 3, duration: 9, delay: 0.3 },
  { top: '10%', left: '55%', size: 2, duration: 13, delay: 2.5 },
  { top: '20%', left: '45%', size: 4, duration: 8, delay: 1.8 },
  { top: '30%', left: '95%', size: 2, duration: 10, delay: 0.6 },
  { top: '40%', left: '5%', size: 3, duration: 11, delay: 3.5 },
  { top: '50%', left: '60%', size: 2, duration: 9, delay: 2.2 },
  { top: '60%', left: '35%', size: 4, duration: 7, delay: 1 },
  { top: '70%', left: '80%', size: 3, duration: 12, delay: 0.4 },
  { top: '85%', left: '25%', size: 2, duration: 8, delay: 2.8 },
  { top: '92%', left: '65%', size: 3, duration: 10, delay: 1.6 },
  { top: '8%', left: '78%', size: 2, duration: 9, delay: 3.2 },
];

const ORBS = [
  {
    background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
    width: 600,
    height: 600,
    top: '-5%',
    left: '-5%',
    durationOffset: 0,
  },
  {
    background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)',
    width: 800,
    height: 800,
    top: '20%',
    right: '-10%',
    durationOffset: 2,
  },
  {
    background: 'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)',
    width: 500,
    height: 500,
    bottom: '-5%',
    left: '10%',
    durationOffset: 4,
  },
];

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Layer 1: Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-pulse"
        style={{
          background:
            'linear-gradient(135deg, #000000 0%, #0a0014 20%, #1a0a3a 40%, #0d0020 60%, #000000 80%, #0a0014 100%)',
          backgroundSize: '400% 400%',
        }}
      />

      {/* Layer 2: Purple radial orbs */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            background: orb.background,
            width: orb.width,
            height: orb.height,
            top: orb.top,
            left: 'left' in orb ? orb.left : undefined,
            right: 'right' in orb ? orb.right : undefined,
            bottom: 'bottom' in orb ? orb.bottom : undefined,
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 6 + orb.durationOffset,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Layer 3: Floating particle dots */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: 'rgba(167, 139, 250, 0.6)',
            boxShadow: '0 0 6px rgba(167, 139, 250, 0.8)',
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Layer 4: Subtle grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}
