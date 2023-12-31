"use client"
import { motion } from "framer-motion";
import AnimationWapper from "../animation-wrapper";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";

export default function ClientexprienceView({experienceData, educationData}){

    console.log(experienceData, educationData, 'experienceData');

    return(
        <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="experience">
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-5">
                    <AnimationWapper className={'py-6 sm:py-16'}>
                        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                        <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                        {
                            'My Experience'.split(' ').map((item, index) => (
                                <span className={`${index === 1 || index === 3 ? 'text-[#FF4500]' : 'text-[#fff]'}`}
                                >{item} {" "}</span>
                            ))
                        }
                    </h1>
                        </div>
                    </AnimationWapper>
                    <AnimationWapper>
                        <div className="flex w-full">
                        <motion.div className="container">
                <Timeline position="right">
                  {experienceData && experienceData.length
                    ? experienceData.map((experienceItem) => (
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot className="bg-[#FF4500]" />
                            <TimelineConnector className="bg-[#FF4500]" />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className="border-[2px] p-4 rounded-[8px] border-[#FF4500] mt-[14px] ml-[16px]">
                              <p className="font-bold ">
                                {experienceItem.duration}
                              </p>
                              <h3 className="font-extrabold mt-2 text-[#fff]">
                                {experienceItem.company},{" "}
                                {experienceItem.location}
                              </h3>
                              <p className="font-extrabold mt-2">
                                {experienceItem.position}
                              </p>
                              <p className="font-extralight mt-2">
                                {experienceItem.jobprofile}
                              </p>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
                        </div>
                    </AnimationWapper>
                </div>
                <div className="flex flex-col gap-5">
                    <AnimationWapper className={'py-6 sm:py-16'}>
                        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                        <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                        {
                            'My Education'.split(' ').map((item, index) => (
                                <span className={`${index === 1 || index === 3 ? 'text-[#FF4500]' : 'text-[#fff]'}`}
                                >{item} {" "}</span>
                            ))
                        }
                    </h1>
                        </div>
                    </AnimationWapper>
                    <AnimationWapper>
                        <div className="flex w-full">
                        <motion.div className="container">
                <Timeline position="right">
                  {educationData && educationData.length
                    ? educationData.map((educationItem) => (
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot className="bg-[#FF4500]" />
                            <TimelineConnector className="bg-[#FF4500]" />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className="border-[2px] p-4 rounded-[8px] border-[#FF4500] mt-[14px] ml-[16px]">
                              <p className="font-bold">
                                {educationItem.year}
                              </p>
                              <h3 className="font-extrabold mt-2 text-[#fff]">
                                {educationItem.college}
                              </h3>
                              <p className="font-extrabold mt-2">
                                {educationItem.degree}
                              </p>
                             
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
                        </div>
                    </AnimationWapper>
                </div>
            </div>
        </div>
    )
}