import { motion } from 'framer-motion';
export function SlideUp({ children }) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 300, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
