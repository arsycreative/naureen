"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const directionVariants = {
    up: {
      initial: { y: 60, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    down: {
      initial: { y: -60, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    },
    left: {
      initial: { x: -60, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    right: {
      initial: { x: 60, opacity: 0 },
      animate: { x: 0, opacity: 1 },
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
    },
  };

  const variants = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      animate={inView ? variants.animate : variants.initial}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.6, 0.01, 0.05, 0.95],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
