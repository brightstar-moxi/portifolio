"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        filter: "blur(8px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: .8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}