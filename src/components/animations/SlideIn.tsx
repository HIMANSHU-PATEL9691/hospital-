import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

const SlideIn = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'left',
}: SlideInProps) => {
  const getOffset = () => {
    switch (direction) {
      case 'left':
        return { x: -100 };
      case 'right':
        return { x: 100 };
      case 'up':
        return { y: 100 };
      case 'down':
        return { y: -100 };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
