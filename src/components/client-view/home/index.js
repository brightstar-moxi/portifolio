"use client"
import { motion } from "framer-motion"

import AnimationWapper from "../animation-wrapper";

function variants(){
return{
    offscreen :{
        y:150,
        opacity : 0
    },
    onscreen
}
}

export default function ClientHomeView({ data }) {

    return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
            <AnimationWapper className={
                "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            }>
                <motion.div variants={setVariants}></motion.div>
            </AnimationWapper>
        </div>
    )
}