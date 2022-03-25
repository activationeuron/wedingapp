import { motion } from 'framer-motion';
export function SlideIn({ children }) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { x: 0 },
        hidden: { x: -300, scale: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}
