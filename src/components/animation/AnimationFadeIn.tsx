import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IAnimationFadeInProps {
  children: ReactNode;
}

function AnimationFadeIn({ children }: Readonly<IAnimationFadeInProps>) {
  return (
    <motion.div
      animate={{
        scale: 1,
        opacity: 1,
      }}
      initial={{
        scale: 0,
        opacity: 0,
      }}
      transition={{
        duration: 1,
        delay: 1.5,
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationFadeIn;
