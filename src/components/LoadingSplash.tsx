"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function LoadingSplash({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0f0f]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 0.8], opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white text-3xl font-bold tracking-widest"
          >
            <span className="text-purple-400">ByteX</span> Technology
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
