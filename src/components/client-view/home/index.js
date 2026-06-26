// "use client"
// import { motion } from "framer-motion"

// import AnimationWapper from "../animation-wrapper";
// import { useMemo, useRef } from "react";
// import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
// import Image from "next/image";
// import allImage from "../../../assets/Onlystar-removebg-preview.png"

// function variants() {
//     return {
//         offscreen: {
//             y: 150,
//             opacity: 0
//         },
//         onscreen: ({ duration = 2 } = {}) => ({
//             y: 0,
//             opacity: 1,
//             transition: {
//                 type: 'spring',
//                 duration
//             }
//         })
//     }
// }

// const socialIcon = [
//     {
//         id: 'facebook',
//         icon: <FaFacebookF
//             color="rgb(255, 57, 8)"
//             className="w-[40px] h-[40px] "
//         />
//     },
//     {
//         id: 'twitter',
//         icon: <FaTwitter
//             color="rgb(255, 57, 8)"
//             className="w-[40px] h-[40px] " />
//     },
//     {
//         id: 'linkedin',
//         icon: <FaLinkedinIn
//             color="rgb(255, 57, 8)"
//             className="w-[40px] h-[40px] " />
//     },
//     {
//         id: 'instagram',
//         icon: <FaInstagram color="rgb(255, 57, 8)"
//             className="w-[40px] h-[40px] " />
//     },
// ]

// export default function ClientHomeView({ data }) {

//     const setVariants = useMemo(() => variants(), []);
//     const containerRef = useRef(null)
//     return (
//         <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
//             <AnimationWapper >
//                 <motion.div
//                     className={
//                         "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
//                     }
//                     variants={setVariants}>
//                     <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
//                         <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
//                             {
//                                 data && data.length ? data[0]?.heading
//                                     .split(" ").map((item, index) => (<span key={item.id, index.id}
//                                         className={`${index === 2 || index === 3 ? "text-[#FF4500]" : "text-[#fff]"}`}
//                                     >
//                                         {item} {" "}
//                                     </span>))
//                                     : null
//                             }
//                         </h1>
//                         <p className="text[#ffffff] mt-4 mb-8 font-bold">
//                             {
//                                 data && data.length ? data[0]?.summary : null
//                             }
//                         </p>
//                         <motion.div className="flex gap-3 cursor-pointer">
//                             {
//                                 socialIcon.map((item) => (
//                                     <motion.div
//                                         key={item.id}  // Add key prop here
//                                         initial={{ scale: 0 }}
//                                         animate={{ rotate: 360, scale: 1 }}
//                                         transition={{
//                                             type: "spring",
//                                             damping: 20,
//                                             stiffness: 80,
//                                             duration: 4,
//                                         }}
//                                         whileHover={{ scale: 1.2, rotate: 360 }}
//                                         whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
//                                     >
//                                         {item.icon}
//                                     </motion.div>
//                                 ))
//                             }


//                         </motion.div>



//                     </div>
//                     <motion.div ref={containerRef} className="flex w-full justify-end">
//                         <motion.div
//                             drag
//                             dragConstraints={containerRef}
//                             className="w-[400px] h-[400px] relative bg-[#FF4500]">

//                             <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#ffffff] absolute"></div>
//                             <Image
//                                 src={allImage}
//                                 alt="Profile Picture"
//                                 layout="responsive"
//                                 quality={100}
//                                 height={300}
//                                 width={300}
//                                 className="absolute top-[-15px]"
//                             />
//                         </motion.div>
//                     </motion.div>
//                 </motion.div>
//             </AnimationWapper>
//         </div>
//     )
// }



"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import AnimationWrapper from "../animation-wrapper";
import allImage from "../../../assets/Onlystar-removebg-preview.png";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function variants() {
  return {
    offscreen: {
      opacity: 0,
      y: 80,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
}

const socialLinks = [
  {
    id: "github",
    href: "#",
    icon: <FaGithub />,
  },
  {
    id: "linkedin",
    href: "#",
    icon: <FaLinkedinIn />,
  },
  {
    id: "email",
    href: "#contact",
    icon: <FaEnvelope />,
  },
];

export default function ClientHomeView({ data }) {
  const setVariants = useMemo(() => variants(), []);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-[160px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">

        <AnimationWrapper>

          <motion.div
            variants={setVariants}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >

            {/* LEFT */}

            <div>

              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-orange-400 text-sm"
              >
                👋 Available for Freelance & Full-Time
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white"
              >
                {data?.length
                  ? data[0]?.heading
                      .split(" ")
                      .map((word, index) => (
                        <span
                          key={index}
                          className={
                            index >= 2
                              ? "text-orange-500"
                              : ""
                          }
                        >
                          {word}{" "}
                        </span>
                      ))
                  : "Brightstar"}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .4 }}
                className="mt-8 text-zinc-400 text-lg leading-8 max-w-xl"
              >
                {data?.length
                  ? data[0]?.summary
                  : "Passionate Full Stack Developer building beautiful web applications with modern technologies."}
              </motion.p>

              {/* Buttons */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .6 }}
                className="flex flex-wrap gap-5 mt-10"
              >

                <Link
                  href="#contact"
                  className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-xl text-white font-semibold shadow-lg shadow-orange-500/20"
                >
                  Hire Me

                  <FaArrowRight />
                </Link>

                <Link
                  href="#project"
                  className="px-8 py-4 rounded-xl border border-zinc-700 text-white hover:bg-zinc-900 transition"
                >
                  View Projects
                </Link>

              </motion.div>

              {/* Social */}

              <div className="flex gap-5 mt-12">

                {socialLinks.map((item) => (

                  <motion.a
                    key={item.id}
                    href={item.href}
                    whileHover={{
                      y: -8,
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: .9,
                    }}
                    className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500 text-xl hover:border-orange-500 transition"
                  >
                    {item.icon}
                  </motion.a>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                scale: .8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="relative flex justify-center"
            >

              {/* Glow */}

              <div className="absolute w-[430px] h-[430px] rounded-full bg-orange-500 blur-[150px] opacity-20" />

              {/* Card */}

              <motion.div

                animate={{
                  y: [0, -15, 0],
                }}

                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}

                className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-[40px] p-8 shadow-2xl"
              >

                <Image
                  src={allImage}
                  alt="Brightstar"
                  width={420}
                  height={420}
                  priority
                  className="object-contain"
                />

                {/* Floating Cards */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="absolute -left-12 top-12 bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4"
                >
                  <h3 className="text-orange-500 text-3xl font-bold">
                    4+
                  </h3>

                  <p className="text-zinc-400 text-sm">
                    Years Experience
                  </p>

                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="absolute -right-12 bottom-10 bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4"
                >
                  <h3 className="text-orange-500 text-3xl font-bold">
                    20+
                  </h3>

                  <p className="text-zinc-400 text-sm">
                    Projects
                  </p>

                </motion.div>

              </motion.div>

            </motion.div>

          </motion.div>

        </AnimationWrapper>

      </div>
    </section>
  );
}