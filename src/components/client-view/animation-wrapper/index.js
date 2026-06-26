// 'use client'
// import { motion } from "framer-motion"

// export default function AnimationWapper({
// children, className, ...props
// }){

//     return(
//        <motion.div
//        initial="offscreen"
//        whileInView={'onscreen'}
//        viewport={{once: true, amount:"0.8"}}
//        className={className}
//        {...props}
//        >
//         {children}
//         </motion.div>
//     )
// }

"use client";

import { motion } from "framer-motion";

export default function AnimationWrapper({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      {children}
    </motion.div>
  );
}