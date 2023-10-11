import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IAnimationTrendingBookProps {
  children: ReactNode;
  delay: number;
}

function AnimationTrendingBook({
  children,
  delay,
}: IAnimationTrendingBookProps) {
  return (
    <motion.div
      className="trending-book-item-wrapper"
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
        delay: delay * 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationTrendingBook;
