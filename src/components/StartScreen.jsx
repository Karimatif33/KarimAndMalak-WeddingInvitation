import { motion } from "framer-motion";
import img from "../assets/images/envelope.jpg";

export default function StartScreen({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 cursor-pointer overflow-hidden"
      onClick={onFinish}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onFinish();
        }
      }}
      role="button"
      tabIndex={0}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
    >
      <img
        src={img}
        alt="Wedding invitation cover"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(33,18,13,0.15)] via-[rgba(60,35,24,0.45)] to-[rgba(20,11,7,0.72)]" />

      <div className="absolute inset-x-4 bottom- top-8 flex items-center justify-center sm:inset-x-6 sm:bottom-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="section-card mx-auto w-full max-w-xl"
        >
          <div className="section-inner invitation-panel soft-highlight">
            <div className="mx-auto flex justify-center">
              <p className="eyebrow">Open The Invitation</p>
            </div>
            <h1 className="section-title text-[2.4rem] sm:text-6xl">
              Karim &amp; Malak
            </h1>
            <p className="section-copy mx-auto max-w-lg">
              A celebration of love, family, and the beginning of forever.
            </p>
            <div className="mt-8 inline-flex rounded-full border border-[rgba(120,86,66,0.14)] bg-white/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#5f4a43]">
              Tap Anywhere To Enter
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
