import { motion } from "framer-motion";
import video from "../assets/videos/intro.mp4";

export default function IntroVideo({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      {/* 🎬 الفيديو */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

        <motion.button
          onClick={onFinish}
          className="text-white text-sm tracking-[6px] border px-6 py-3 rounded-full backdrop-blur-md"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          TAP TO OPEN
        </motion.button>

      </div>
    </motion.div>
  );
}