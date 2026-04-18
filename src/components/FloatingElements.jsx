import { motion } from "framer-motion";

export default function FloatingElements() {
  const items = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 opacity-30"
          initial={{
            y: "100vh",
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            y: "-10vh",
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
          }}
        >
          {i % 2 === 0 ? "🌸" : "🦋"}
        </motion.div>
      ))}
    </div>
  );
}