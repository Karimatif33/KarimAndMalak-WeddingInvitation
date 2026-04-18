import { motion } from "framer-motion";
import { useState } from "react";

export default function Intro({ onOpen }) {
  const [breakSeal, setBreakSeal] = useState(false);

  const handleClick = () => {
    setBreakSeal(true);
    setTimeout(onOpen, 1200);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#efe6d8]">

      <div className="relative cursor-pointer" onClick={handleClick}>

        {/* ✉️ Envelope */}
        <div className="w-64 h-40 bg-[#e8dccb] rounded-lg shadow-xl relative overflow-hidden">

          {/* flap */}
          <motion.div
            className="absolute top-0 w-full h-1/2 bg-[#d8cbb5]"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            animate={breakSeal ? { rotateX: -120 } : {}}
            transition={{ duration: 1 }}
          />

          {/* 💥 Wax split */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1"
            animate={breakSeal ? { scale: 0.8 } : {}}
          >
            <motion.div
              className="w-6 h-6 bg-red-700 rounded-full"
              animate={breakSeal ? { x: -20, rotate: -20 } : {}}
            />
            <motion.div
              className="w-6 h-6 bg-red-700 rounded-full"
              animate={breakSeal ? { x: 20, rotate: 20 } : {}}
            />
          </motion.div>

        </div>

      </div>

      {/* text */}
      <motion.p
        className="absolute bottom-20 tracking-[6px] text-sm"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        TAP TO OPEN
      </motion.p>

    </div>
  );
}