import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BounceInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const BounceIn = ({ children, className = '', delay = 0 }: BounceInProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        type: 'spring',
        stiffness: 400,
        damping: 15,
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

export default BounceIn;
