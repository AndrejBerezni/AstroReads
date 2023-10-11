import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IAnimationFadeInFromBelowDelayProps {
  children: ReactNode;
}

function AnimationFadeInFromBelowDelay({
  children,
}: IAnimationFadeInFromBelowDelayProps) {
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
        duration: 1,
        delay: 1,
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationFadeInFromBelowDelay;
