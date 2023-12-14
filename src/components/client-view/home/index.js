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
                            <motion.div className="flex gap-3">
                                <FaFacebookF color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px] " />
                                <FaTwitter color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px] " />
                                <FaLinkedinIn color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px] " />
                                <FaInstagram color="rgba(13, 183, 96, 1)" className="w-[40px] h-[40px] " />

                            </motion.div>
                        </p>
                    </div>
                </motion.div>
            </AnimationWapper>
        </div>
    )
}