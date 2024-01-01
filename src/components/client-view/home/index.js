"use client"
import { motion } from "framer-motion"

import AnimationWapper from "../animation-wrapper";
import { useMemo, useRef } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'
import Image from "next/image";
import allImage from "../../../assets/Onlystar-removebg-preview.png"

function variants() {
    return {
        offscreen: {
            y: 150,
            opacity: 0
        },
        onscreen: ({ duration = 2 } = {}) => ({
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration
            }
        })
    }
}

const socialIcon = [
    {
        id: 'facebook',
        icon: <FaFacebookF
            color="rgb(255, 57, 8)"
            className="w-[40px] h-[40px] "
        />
    },
    {
        id: 'twitter',
        icon: <FaTwitter
            color="rgb(255, 57, 8)"
            className="w-[40px] h-[40px] " />
    },
    {
        id: 'linkedin',
        icon: <FaLinkedinIn
            color="rgb(255, 57, 8)"
            className="w-[40px] h-[40px] " />
    },
    {
        id: 'instagram',
        icon: <FaInstagram color="rgb(255, 57, 8)"
            className="w-[40px] h-[40px] " />
    },
]

export default function ClientHomeView({ data }) {

    const setVariants = useMemo(() => variants(), []);
    const containerRef = useRef(null)
    return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
            <AnimationWapper >
                <motion.div
                    className={
                        "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
                    }
                    variants={setVariants}>
                    <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                        <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
                            {
                                data && data.length ? data[0]?.heading
                                    .split(" ").map((item, index) => (<span key={item.id, index.id}
                                        className={`${index === 2 || index === 3 ? "text-[#FF4500]" : "text-[#fff]"}`}
                                    >
                                        {item} {" "}
                                    </span>))
                                    : null
                            }
                        </h1>
                        <p className="text[#ffffff] mt-4 mb-8 font-bold">
                            {
                                data && data.length ? data[0]?.summary : null
                            }
                        </p>
                        <motion.div className="flex gap-3 cursor-pointer">
                            {
                                socialIcon.map((item) => (
                                    <motion.div
                                        key={item.id}  // Add key prop here
                                        initial={{ scale: 0 }}
                                        animate={{ rotate: 360, scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            damping: 20,
                                            stiffness: 80,
                                            duration: 4,
                                        }}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                ))
                            }


                        </motion.div>



                    </div>
                    <motion.div ref={containerRef} className="flex w-full justify-end">
                        <motion.div
                            drag
                            dragConstraints={containerRef}
                            className="w-[400px] h-[400px] relative bg-[#FF4500]">

                            <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#ffffff] absolute"></div>
                            <Image
                                src={allImage}
                                alt="Profile Picture"
                                layout="responsive"
                                quality={100}
                                height={300}
                                width={300}
                                className="absolute top-[-15px]"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </AnimationWapper>
        </div>
    )
}