import { motion } from "framer-motion";
import video from "../assets/videos/intro.mp4";

export default function VideoPlayer({ onEnd }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <video
        autoPlay
        muted
        playsInline
        onEnded={onEnd}
        className="w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

    </motion.div>
  );
}