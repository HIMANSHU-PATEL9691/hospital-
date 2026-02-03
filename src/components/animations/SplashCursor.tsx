import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Splash {
  id: number;
  x: number;
  y: number;
}

const SplashCursor = () => {
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    const newSplash: Splash = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setSplashes((prev) => [...prev, newSplash]);

    setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== newSplash.id));
    }, 600);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, [handleMouseMove, handleMouseLeave, handleClick]);

  return (
    <>
      {/* Custom cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="h-6 w-6 rounded-full border-2 border-primary bg-primary/20" />
      </motion.div>

      {/* Splash effects */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={splash.id}
            className="pointer-events-none fixed z-[9998]"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              left: splash.x - 25,
              top: splash.y - 25,
            }}
          >
            <div className="h-12 w-12 rounded-full bg-primary/30" />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default SplashCursor;
