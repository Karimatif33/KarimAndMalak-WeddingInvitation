import { motion } from "framer-motion";

export default function FadeSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}