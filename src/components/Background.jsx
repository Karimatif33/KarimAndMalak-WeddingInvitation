import { motion } from "framer-motion";
import video from "../assets/videos/wedding.mp4";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      >
        <source src={video} />
      </video>

      <div className="absolute inset-0 bg-[rgba(48,28,18,0.28)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(55,29,20,0.42)] via-[rgba(86,55,40,0.2)] to-[rgba(238,225,214,0.88)]" />

      <motion.div
        className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[rgba(242,217,209,0.24)] blur-3xl sm:h-80 sm:w-80"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-[rgba(182,144,85,0.16)] blur-3xl sm:h-96 sm:w-96"
        animate={{ x: [0, -24, 0], y: [0, 16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
