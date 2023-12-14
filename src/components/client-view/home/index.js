"use client"
import { motion } from "framer-motion"

import AnimationWapper from "../animation-wrapper";
import { useMemo } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'

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
        icon: <FaFacebookF />
    },
    {
        id: 'twitter',
        icon: <FaTwitter />
    },
    {
        id: 'linkedin',
        icon: <FaLinkedinIn />
    },
    {
        id: 'instagram',
        icon: <FaInstagram />
    },
]

export default function ClientHomeView({ data }) {

    const setVariants = useMemo(() => variants(), [])
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
                                    .split(" ").map((item, index) => (<span
                                        className={`${index === 2 || index === 3 ? "text-green-main" : "text-[#000]"}`}
                                    >
                                        {item} {" "}
                                    </span>))
                                    : null
                            }
                        </h1>
                        <p className="text[#000] mt-4 mb-8 font-bold">
                            {
                                data && data.length ? data[0]?.summary : null
                            }
                        </p>
                        <motion.div className="flex gap-3 cursor-pointer">
                            {
                                socialIcon.map((item) => {
                                    <motion.div
                                        key={item.id}
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
                                })
                            }

                        </motion.div>



                    </div>
                </motion.div>
            </AnimationWapper>
        </div>
    )
}