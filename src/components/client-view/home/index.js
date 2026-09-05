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
import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Typewriter } from "react-simple-typewriter";
import AnimationWrapper from "../animation-wrapper";
import allImage from "../../../assets/pii.png";
import { Link as LinkScroll } from "react-scroll";
import { FiChevronDown } from "react-icons/fi";

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
    // const containerRef = useRef(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setRotate({
            x: -((y / rect.height) - 0.5) * 18,
            y: ((x / rect.width) - 0.5) * 18,
        });
    };

    const resetRotate = () => {
        setRotate({
            x: 0,
            y: 0,
        });
    };
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
                            <p className="mt-6 text-xl lg:text-2xl text-zinc-300 font-medium">
                                <span className="text-orange-500">
                                    <Typewriter
                                        words={[
                                            "Full Stack Developer",
                                            "MERN Stack Engineer",
                                            "Next.js Developer",
                                            "React Specialist",
                                        ]}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={40}
                                        delaySpeed={1800}
                                    />
                                </span>
                            </p>

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

                            {/* <motion.div
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

              </motion.div> */}
                            <div className="mt-10 flex flex-wrap items-center gap-4">

                                {/* Hire Me */}
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.96 }}
                                    onClick={() =>
                                        scroller.scrollTo("contact", {
                                            duration: 1200,
                                            smooth: true,
                                        })
                                    }
                                    className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-[0_15px_35px_rgba(249,115,22,.35)]"
                                >
                                    <Link
                                        href="#contact"
                                        className="flex items-center gap-3  "
                                    >
                                        Hire Me

                                        <FaArrowRight />
                                    </Link>
                                </motion.button>

                                {/* Download CV */}
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.96 }}

                                    className="rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-4 font-semibold text-white hover:border-orange-500 hover:text-orange-400"
                                >
                                    <Link
                                        href="#project"

                                    >
                                        View Projects
                                    </Link>
                                </motion.div>

                            </div>
                            {/* Social */}

                            <div className="flex gap-5 mt-12">

                                {socialLinks.map((item) => (

                                    <motion.div
                                        key={item.id}
                                        href={item.href}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.15,
                                        }}
                                        whileTap={{
                                            scale: 0.9,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 250,
                                        }}
                                        className="
        group
        relative
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-zinc-700
        bg-zinc-900/80
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-orange-500
        hover:shadow-[0_0_35px_rgba(249,115,22,.35)]
      "
                                    >
                                        <span className="group-hover:scale-110 transition-all">
                                            {item.icon}
                                        </span>
                                    </motion.div>

                                ))}

                                {/* <motion.div className="flex gap-5 mt-8">
  {socialLinks.map((item) => (
    <motion.a
      key={item.id}
    href={item.href}
      whileHover={{
        y: -8,
        scale: 1.15,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="
        group
        relative
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-zinc-700
        bg-zinc-900/80
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-orange-500
        hover:shadow-[0_0_35px_rgba(249,115,22,.35)]
      "
    >
      <span className="group-hover:scale-110 transition-all">
        {item.icon}
      </span>
    </motion.a>
  ))}
</motion.div> */}

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
                                onMouseMove={handleMove}
                                onMouseLeave={resetRotate}
                                animate={{
                                    rotateX: rotate.x,
                                    rotateY: rotate.y,
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    rotateX: {
                                        type: "spring",
                                        stiffness: 180,
                                        damping: 18,
                                    },
                                    rotateY: {
                                        type: "spring",
                                        stiffness: 180,
                                        damping: 18,
                                    },
                                    y: {
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }}
                                style={{
                                    transformStyle: "preserve-3d",
                                    perspective: 1000,
                                }}
                                className="
    relative
    bg-zinc-900/80
    backdrop-blur-xl
    border
    border-zinc-800
    rounded-[40px]
    p-8
    shadow-[0_35px_80px_rgba(249,115,22,.20)]
    overflow-visible
  "
                            >

                                {/* Animated Orange Glow */}

                                <motion.div
                                    animate={{
                                        scale: [1, 1.15, 1],
                                        opacity: [.25, .4, .25],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="
      absolute
      -top-24
      -right-24
      h-72
      w-72
      rounded-full
      bg-orange-500
      blur-[120px]
    "
                                />

                                {/* Glass Border */}

                                <div />

                                {/* Floating Image */}

                                <motion.div
                                    animate={{
                                        y: [0, -12, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        transform: "translateZ(80px)",
                                    }}
                                    className="relative z-10"
                                >
                                    <Image
                                        src={allImage}
                                        alt="Brightstar"
                                        width={420}
                                        height={420}
                                        priority
                                        className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,.45)]"
                                    />
                                </motion.div>

                                {/* Experience Card */}

                                <motion.div
                                    animate={{
                                        y: [0, -8, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                    style={{
                                        transform: "translateZ(100px)",
                                    }}
                                    className="
      absolute
      -left-9
      top-20
      rounded-2xl
      border
     
      bg-zinc-900/90
      backdrop-blur-xl
      px-4
      py-3
      shadow-xl
    "
                                >
                                    <h3 className="text-3xl font-bold text-orange-500">
                                        4+
                                    </h3>

                                    <p className="text-xs text-zinc-400">
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
<div className="mt-20 flex justify-center">

  <LinkScroll
  to="about"
  smooth={true}
  duration={1000}
  className="cursor-pointer"
>
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
    }}
    className="flex flex-col items-center text-zinc-400"
  >
    <span className="text-xs uppercase tracking-[6px]">
      Scroll
    </span>

    <FiChevronDown
      size={28}
      className="mt-2 text-orange-500"
    />
  </motion.div>
</LinkScroll>

</div>
            </div>
        </section>
    );
}