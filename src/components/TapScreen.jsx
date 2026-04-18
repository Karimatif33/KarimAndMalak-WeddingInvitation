import { motion } from "framer-motion";

export default function TapScreen({ onTap }) {
  return (
    <div
      onClick={onTap}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] text-white cursor-pointer"
    >

      {/* خلفية بسيطة */}
      <div className="absolute inset-0 bg-black/70" />

      {/* النص */}
      <motion.div
        className="relative z-10 text-center"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="tracking-[8px] text-sm">TAP TO OPEN</p>
      </motion.div>

    </div>
  );
}