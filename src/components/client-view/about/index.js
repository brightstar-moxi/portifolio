// "use client"

// import { useMemo } from "react";
// import AnimationWapper from "../animation-wrapper";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import aboutMeImage from "../../../assets/pppp-removebg-preview.png"

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

// const skillItemVariant = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//         y: 0,
//         opacity: 1
//     }
// }

// export default function ClientAboutView({ data }) {
//     console.log(data, 'about');

//     const setVariants = useMemo(() => variants(), []);

//     const aboutDataInfo = [
//         {
//             label: 'Client',
//             value: data?.noofclients || '0'
//         },
//         {
//             label: 'Projects',
//             value: data?.noofprojects || '0'
//         },
//         {
//             label: 'Experience',
//             value: data?.yearofexperience || '0'
//         },

//     ];

//     const headingText = "Why Should You Hire Me For Your Next Project?"
//     return (
//         <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="about">
//             <div className="w-full flex">
//                 <AnimationWapper className="rounded-lg w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[#FF4500] bg-[#000] z-10">
//                     {
//                         aboutDataInfo.map((infoItem, index) => (
//                             <motion.div className={`flex items-center justify-start
//                             ${
//                               index === 0
//                                 ? "sm:justify-start"
//                                 : index === 1
//                                 ? "sm:justify-center"
//                                 : "sm:justify-end"
//                             } py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0
//                             `}
//                                 key={index}
//                                 custom={{ duration: 2 + index }}
//                                 variants={setVariants}
//                             >
//                                 <div className="flex m-0 w-40 sm:w-auto">
//                                     <div className="flex flex-col">
//                                         <p className="text-[50px] text-[#FF4500]">{infoItem.value}</p>
//                                         <p className="text-[25px] font-bold text-[#ffffff]">{infoItem.label}</p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))
//                     }
//                 </AnimationWapper>
//             </div>
//             <AnimationWapper className={'pt-6'}>
//                 <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
//                     <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
//                         {
//                             headingText.split(' ').map((item, index) => (
//                                 <span className={`${index === 8 ? 'text-[#FF4500]' : 'text-[#fff]'}`}
//                                 >{item} {" "}</span>
//                             ))
//                         }
//                     </h1>
//                     <p className="text-[#fff] mt-4 mb-8 font-bold">{data?.aboutme}</p>
//                 </div>
//             </AnimationWapper>
//             <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
//                 <AnimationWapper className='flex w-flex'>
//                     <motion.div variants={setVariants} className="h-full w-full p-4">
//                         <Image
//                             src={aboutMeImage}
//                             alt="About Me"
//                             layout="responsive"
//                             height={414}
//                             width={508}
//                             quality={100}
//                         />
//                     </motion.div>
//                 </AnimationWapper>
//                 <AnimationWapper className={"flex items-center w-full p-4"}>
//                     <motion.div variants={setVariants}
//                         className="grid gap-4 grid-cols-3 h-full max-h-[200px] w-full"
//                     >
//                         {
//                             data?.skills.split(',').map((skill) => (
//                                 <motion.div
//                                     className="w-full flex justify-center items-center"
//                                     variants={skillItemVariant}
//                                 >
//                                     <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[160px] px-6 border-[2px] border-[#FF4500] bg-[#000] text-[#fff] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-main transition-all outline-none">
//                                         {skill}
//                                     </button>
//                                 </motion.div>
//                             ))
//                         }
//                     </motion.div>
//                 </AnimationWapper>
//             </div>
//         </div>
//     )
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "../../../assets/brightstar.png";
import AnimationWrapper from "../animation-wrapper";
import CountUp from "react-countup";

export default function ClientAboutView({ data }) {
    const stats = [
        {
            title: "Clients",
            value: data?.noofclients || "0",
        },
        {
            title: "Projects",
            value: data?.noofprojects || "0",
        },
        {
            title: "Experience",
            value: data?.yearofexperience || "0",
        },
    ];

    const skills =
        data?.skills?.split(",").map((item) => item.trim()) || [];

    return (
        <section
            id="about"
            className="relative py-28 overflow-hidden"
        >
            {/* Background */}

            <div className="absolute left-0 top-40 w-80 h-80 bg-orange-500/10 blur-[150px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}

                <AnimationWrapper>

                    <div className="text-center max-w-3xl mx-auto mb-20">

                        <span className="inline-flex px-5 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">

                            About Me

                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">

                            Why Companies Love
                            <span className="text-orange-500">
                                {" "}Working With Me
                            </span>

                        </h2>

                        <p className="mt-6 text-zinc-400 leading-8 text-justify">

                            {data?.aboutme}

                        </p>

                    </div>

                </AnimationWrapper>

                {/* Main */}

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Image */}

                    <AnimationWrapper>

                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                            }}
                            className="relative"
                        >

                            <div className="absolute inset-0 bg-orange-500 blur-[120px] opacity-20 rounded-full" />

                            <div className="relative bg-zinc-900 border border-zinc-800 rounded-[35px] p-8">

                                <Image
                                    src={aboutMeImage}
                                    alt="About"
                                    width={550}
                                    height={650}
                                    className="rounded-2xl"
                                    priority
                                />

                            </div>

                        </motion.div>

                    </AnimationWrapper>

                    {/* Right */}

                    <AnimationWrapper>

                        <div>

                            {/* Stats */}

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">

                                {stats.map((item) => (

                                    <motion.div
                                        whileHover={{
                                            y: -8,
                                        }}
                                        key={item.title}
                                        className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
p-6
text-center
shadow-[0_10px_35px_rgba(0,0,0,.35)]
hover:border-orange-500
hover:shadow-[0_0_30px_rgba(249,115,22,.25)]
transition-all
duration-500
"
                                    >

                                        <h3 className="text-3xl sm:text-4xl font-black text-orange-500">

                                            <CountUp
                                                end={item.value}
                                                duration={2.5}
                                            />+
                                        </h3>

                                       <p className="text-sm sm:text-base text-zinc-400 mt-2">

                                            {item.title}

                                        </p>

                                    </motion.div>

                                ))}

                            </div>

                            {/* Skills */}

                            <h3 className="text-2xl font-bold text-white mb-6">

                                Technical Skills

                            </h3>

                            <div className="flex flex-wrap gap-4">

                                {skills.map((skill, index) => (

                                    <motion.div
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            y: 20
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        transition={{
                                            delay: index * 0.08,
                                            duration: .45
                                        }}
                                        whileHover={{
                                            scale: 1.08,
                                            y: -5
                                        }}
                                        viewport={{
                                            once: true
                                        }}
                                        whileTap={{
                                            scale: .95,
                                        }}
                                        className="
px-6
py-3
rounded-xl
bg-white/5
backdrop-blur-xl
border
border-white/10
text-zinc-300
hover:border-orange-500
hover:text-white
hover:shadow-[0_0_20px_rgba(249,115,22,.25)]
transition-all
duration-300
"
                                    >

                                        {skill}

                                    </motion.div>

                                ))}

                            </div>

                            {/* Bottom Card */}

                            <motion.div
                                whileHover={{
                                    y: -5,
                                }}
                                className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8"
                            >

                                <h3 className="text-2xl font-bold text-white">

                                    Building Scalable Digital Experiences

                                </h3>

                                <p className="mt-4 text-orange-100 leading-8">

                                    I specialize in developing modern, responsive, and
                                    high-performance web applications using React,
                                    Next.js, Node.js, Express, MongoDB, Convex, and
                                    Tailwind CSS while delivering exceptional user
                                    experiences.

                                </p>

                            </motion.div>

                        </div>

                    </AnimationWrapper>

                </div>

            </div>
        </section>
    );
}