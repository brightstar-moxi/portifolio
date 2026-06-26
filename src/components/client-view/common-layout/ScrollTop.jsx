"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollTop() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / height) * 100;

      setProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  const radius = 22;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>

      {progress > 8 && (

        <motion.button
          initial={{ opacity: 0, scale: .6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: .6 }}
          transition={{ duration: .3 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-8 right-8 z-[9999]"
        >

          <div className="relative h-16 w-16">

            <svg
              className="-rotate-90"
              width="64"
              height="64"
            >
              <circle
                cx="32"
                cy="32"
                r={radius}
                stroke="#27272A"
                strokeWidth="4"
                fill="transparent"
              />

              <circle
                cx="32"
                cy="32"
                r={radius}
                stroke="#F97316"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{
                  transition:
                    "stroke-dashoffset .2s linear",
                }}
              />
            </svg>

           <div
  className="
    absolute
    inset-0
    flex
    items-center
    justify-center
    rounded-full
    bg-zinc-900/80
    backdrop-blur-xl
    border
    border-white/10
    shadow-[0_0_25px_rgba(249,115,22,0.18)]
    text-orange-400
    transition-all
    duration-300
    hover:scale-110
    hover:border-orange-500/40
    hover:shadow-[0_0_35px_rgba(249,115,22,0.45)]
  "
>
  ↑
</div>

          </div>

        </motion.button>

      )}

    </AnimatePresence>
  );
}