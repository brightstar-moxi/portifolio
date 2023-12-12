"use client"
import { motion } from "framer-motion"

import AnimationWapper from "../animation-wrapper";
import { useMemo } from "react";

function variants(){
return{
    offscreen :{
        y:150,
        opacity : 0
    },
    onscreen: ({duration =2}= {}) => ({
        y : 0,
        opacity : 1,
        transition : {
            type : 'spring',
            duration
        }
    })
}
}

export default function ClientHomeView({ data }) {

    const setVariants = useMemo(()=> variants(), [])
    return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
            <AnimationWapper >
                <motion.div
                className={
                    "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
                }
                variants={setVariants}>
                    <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                        <h1></h1>
                    </div>
                </motion.div>
            </AnimationWapper>
        </div>
    )
}