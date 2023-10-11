import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IAnimationFadeInFromBelowProps {
  children: ReactNode;
}

function AnimationFadeInFromBelow({
  children,
}: IAnimationFadeInFromBelowProps) {
  return (
    <motion.div
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{
        y: 200,
        opacity: 0,
      }}
      transition={{
        duration: 2,
        type: 'spring',
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationFadeInFromBelow;
