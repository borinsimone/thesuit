import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const breakpoints = {
  mobile: '480px',
  tablet: '769px',
  laptop: '1024px',
};

// Definizione del tipo per le animazioni
interface AnimationProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

export const FadeIn = ({
  children,
  duration = 0.3,
  delay = 0.2,
  className,
}: AnimationProps) => {
  return (
    <motion.div
      className={className}
      initial='hidden'
      whileInView='visible'
      transition={{ duration, delay }}
      variants={{
        visible: { scale: 1, opacity: 1 },
        hidden: { scale: 0, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export const FromLeft = ({
  children,
  duration = 0.3,
  delay = 0.2,
  className,
  as: Component = 'div',
}: AnimationProps) => {
  return (
    <motion.div
      as={Component}
      className={className}
      initial='hidden'
      whileInView='visible'
      transition={{ duration, delay }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: '-100px', opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
export const FromBot = ({
  children,
  duration = 0.3,
  delay = 0.2,
  className,
}: AnimationProps) => {
  return (
    <motion.div
      className={className}
      initial='hidden'
      whileInView='visible'
      transition={{ duration, delay }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '50px', opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
