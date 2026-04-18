import { motion } from "framer-motion";

export default function Envelope({ onOpen }) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#efe6d8]">

      <motion.div
        className="relative cursor-pointer"
        onClick={onOpen}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >

        {/* الظرف */}
        <div className="w-72 h-44 bg-[#e8dccb] rounded-lg shadow-xl relative overflow-hidden">

          {/* flap */}
          <motion.div
            className="absolute top-0 w-full h-1/2 bg-[#d8cbb5]"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            whileTap={{ rotateX: -120 }}
            transition={{ duration: 1 }}
          />

          {/* seal */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 bg-red-700 rounded-full flex items-center justify-center text-white shadow-lg">
            K&M
          </div>

        </div>

      </motion.div>

    </div>
  );
}