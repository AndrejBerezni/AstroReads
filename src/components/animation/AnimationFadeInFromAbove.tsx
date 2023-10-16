import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IAnimationFadeInFromAboveProps {
  children: ReactNode;
}

function AnimationFadeInFromAbove({
  children,
}: Readonly<IAnimationFadeInFromAboveProps>) {
  return (
    <motion.div
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{
        y: -200,
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

export default AnimationFadeInFromAbove;
