// "use client"
// import { motion } from "framer-motion";
// import AnimationWapper from "../animation-wrapper";
// // import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";

// export default function ClientexprienceView({experienceData, educationData}){

//     console.log(experienceData, educationData, 'experienceData');

//     return(
//         <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="experience">
//             <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
//                 <div className="flex flex-col gap-5">
//                     <AnimationWapper className={'py-6 sm:py-16'}>
//                         <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
//                         <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
//                         {
//                             'My Experience'.split(' ').map((item, index) => (
//                                 <span className={`${index === 1 || index === 3 ? 'text-[#FF4500]' : 'text-[#fff]'}`}
//                                 >{item} {" "}</span>
//                             ))
//                         }
//                     </h1>
//                         </div>
//                     </AnimationWapper>
//                     <AnimationWapper>
//                         <div className="flex w-full">
//                         <motion.div className="container">
//                 <Timeline position="right">
//                   {experienceData && experienceData.length
//                     ? experienceData.map((experienceItem) => (
//                         <TimelineItem>
//                           <TimelineSeparator>
//                             <TimelineDot className="bg-[#FF4500]" />
//                             <TimelineConnector className="bg-[#FF4500]" />
//                           </TimelineSeparator>
//                           <TimelineContent>
//                             <div className="border-[2px] p-4 rounded-[8px] border-[#FF4500] mt-[14px] ml-[16px]">
//                               <p className="font-bold ">
//                                 {experienceItem.duration}
//                               </p>
//                               <h3 className="font-extrabold mt-2 text-[#fff]">
//                                 {experienceItem.company},{" "}
//                                 {experienceItem.location}
//                               </h3>
//                               <p className="font-extrabold mt-2">
//                                 {experienceItem.position}
//                               </p>
//                               <p className="font-extralight mt-2">
//                                 {experienceItem.jobprofile}
//                               </p>
//                             </div>
//                           </TimelineContent>
//                         </TimelineItem>
//                       ))
//                     : null}
//                 </Timeline>
//               </motion.div>
//                         </div>
//                     </AnimationWapper>
//                 </div>
//                 <div className="flex flex-col gap-5">
//                     <AnimationWapper className={'py-6 sm:py-16'}>
//                         <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
//                         <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
//                         {
//                             'My Education'.split(' ').map((item, index) => (
//                                 <span className={`${index === 1 || index === 3 ? 'text-[#FF4500]' : 'text-[#fff]'}`}
//                                 >{item} {" "}</span>
//                             ))
//                         }
//                     </h1>
//                         </div>
//                     </AnimationWapper>
//                     <AnimationWapper>
//                         <div className="flex w-full">
//                         <motion.div className="container">
//                 <Timeline position="right">
//                   {educationData && educationData.length
//                     ? educationData.map((educationItem) => (
//                         <TimelineItem>
//                           <TimelineSeparator>
//                             <TimelineDot className="bg-[#FF4500]" />
//                             <TimelineConnector className="bg-[#FF4500]" />
//                           </TimelineSeparator>
//                           <TimelineContent>
//                             <div className="border-[2px] p-4 rounded-[8px] border-[#FF4500] mt-[14px] ml-[16px]">
//                               <p className="font-bold">
//                                 {educationItem.year}
//                               </p>
//                               <h3 className="font-extrabold mt-2 text-[#fff]">
//                                 {educationItem.college}
//                               </h3>
//                               <p className="font-extrabold mt-2">
//                                 {educationItem.degree}
//                               </p>

//                             </div>
//                           </TimelineContent>
//                         </TimelineItem>
//                       ))
//                     : null}
//                 </Timeline>
//               </motion.div>
//                         </div>
//                     </AnimationWapper>
//                 </div>
//             </div>
//         </div>
//     )
// }
"use client";

import { motion } from "framer-motion";
import AnimationWrapper from "../animation-wrapper";

export default function ClientExperienceView({
  experienceData,
  educationData,
}) {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-40 w-96 h-96 bg-orange-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* ================= EXPERIENCE ================= */}

          <div>

            <AnimationWrapper>

              <div className="mb-14">

                <span className="inline-flex px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400">
                  Career Journey
                </span>

                <h2 className="mt-6 text-5xl font-bold text-white">

                  My
                  <span className="text-orange-500">
                    {" "}Experience
                  </span>

                </h2>

              </div>

            </AnimationWrapper>

            <div className="relative ml-5">

              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-orange-500 via-orange-400 to-transparent shadow-[0_0_20px_rgba(249,115,22,.5)]" />

              {experienceData?.map((item, index) => (

                <AnimationWrapper key={item._id}>

                  <motion.div
                    whileHover={{
                      x: 10,
                    }}
                    className="relative mb-12"
                  >

                    {/* Timeline Dot */}

                    <div className="absolute -left-[31px] w-5 h-5 rounded-full bg-orange-500 border-4 border-zinc-950" />

                    {/* Card */}

                    <div className="ml-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-orange-500 transition-all">

                      <span className="text-orange-500 font-semibold">

                        {item.duration}

                      </span>

                      <h3 className="text-2xl font-bold text-white mt-3">

                        {item.position}

                      </h3>

                      <p className="text-zinc-400 mt-2">

                        {item.company} • {item.location}

                      </p>

                      <p className="text-zinc-400 mt-6 leading-8">

                        {item.jobprofile}

                      </p>

                    </div>

                  </motion.div>

                </AnimationWrapper>

              ))}

            </div>

          </div>

          {/* ================= EDUCATION ================= */}

          <div>

            <AnimationWrapper>

              <div className="mb-14">

                <span className="inline-flex px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400">
                  Learning Journey
                </span>

                <h2 className="mt-6 text-5xl font-bold text-white">

                  My
                  <span className="text-orange-500">
                    {" "}Education
                  </span>

                </h2>

              </div>

            </AnimationWrapper>

            <div className="relative border-l border-zinc-800 ml-5">

              {educationData?.map((item) => (

                <AnimationWrapper key={item._id}>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -60,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                    }}
                    whileHover={{
                      x: 12,
                      scale: 1.02,
                    }}
                    className="relative mb-12"
                  >

                    <div
                      className="
    absolute
    -left-[31px]
    w-5
    h-5
    rounded-full
    bg-orange-500
    border-4
    border-[#09090B]
    shadow-[0_0_25px_rgba(249,115,22,.9)]
  "
                    />

                    <div cclassName="
ml-8
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-7
hover:border-orange-500
hover:shadow-[0_0_35px_rgba(249,115,22,.18)]
transition-all
duration-500
">

                      <span className="text-orange-400 text-sm tracking-widest uppercase font-semibold">

                        {item.year}

                      </span>

                      <h3 className="text-3xl font-bold text-white mt-3">

                        {item.degree}

                      </h3>

                      <p className="text-zinc-500 mt-2">

                        {item.college}

                      </p>

                    </div>

                  </motion.div>

                </AnimationWrapper>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}