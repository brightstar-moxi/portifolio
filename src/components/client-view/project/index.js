// "use client"

// import {  useRef } from "react";
// import AnimationWapper from "../animation-wrapper";
// import { motion, useScroll } from "framer-motion";
// import { useRouter } from "next/navigation";

// export default function ClientProjectView({data}){
// console.log(data, "Client Project View");




// const containerRef = useRef(null);
// const {scrollXProgress} = useScroll
// ({container: containerRef})
// const router = useRouter()

//     return(
//         <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="project">
//             <AnimationWapper className={'py-6 sm:py-16'}>
//             <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
//                     <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
//                         {
//                             "My Projects".split(' ').map((item, index) => (
//                                 <span className={`${index === 1 || index === 3 ? 'text-[#FF4500]' : 'text-[#fff]'}`}
//                                 >{item} {" "}</span>
//                             ))
//                         }
//                     </h1>
//                     <svg id="progress" width={100} height={100} viewBox="0 0 100 100">
//             <circle
//               cx={"50"}
//               cy={"50"}
//               r="30"
//               pathLength={"1"}
//               className="stroke-[#fff]"
//             />
//             <motion.circle
//               cx={"50"}
//               cy={"50"}
//               r="30"
//               pathLength={"1"}
//               className="stroke-[#FF4500]"
//               style={{ pathLength: scrollXProgress }}
//             />
//           </svg>
                  
//                 </div>
//             </AnimationWapper>
//             <AnimationWapper>
//             <ul className="project-wrapper" ref={containerRef}>
//                 {
//                     data && data.length ? data.map((item,index)=>(
//                         <li className="w-full flex items-stretch cursor-pointer"
//                         key={index}>
//                              <div className="border-2 w-full relative border-[#FF4500] transition-all rounded-lg flex flex-col">
//                              <div className="flex p-4 flex-col xl:flex-row w-full items-stretch xl:items-center">
//                              <div className="flex order-2 xl:order-1">
//                                 <div className="flex flex-col">
//                                     <h3 className="text-3xl text-[#fff] capitalize font-extrabold">{item.name}</h3>
//                                     <p className="text-sm mt-2 text-white-500 capitalize font-bold">
//                             {/* {item.createdAt.split("T")[0]} */}
//                               {new Date(item._creationTime).toLocaleDateString()}
//                             </p>
//                             <div className="grid gap-2 mt-5 grid-cols-2 h-full max-h-[200px] w-full">
//                                 {
//                                     item?.technologies.split(",").map((techItem)=>(
//                                         <div className="w-full flex justify-start items-center">
//                                               <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[120px] px-6 border-[2px] border-[#FF4500] bg-[#000] text-[#fff] font-semibold rounded-lg text-xs tracking-widest hover:shadow-green-main transition-all outline-none">
//                                         {techItem}
//                                     </button>
//                                         </div>
//                                     ))
//                                 }
//                             </div>
                          
//                                 </div>
//                              </div>
//                              </div>
//                                <div className="absolute w-full bottom-0 justify-center flex gap-2">
//                       <button onClick={()=>router.push(item.website)} className="p-2 text-[#000] font-semibold text-[14px] tracking-widest bg-[#FF4500] transition-all outline-none">
//                         Website
//                       </button>
//                       <button onClick={()=>router.push(item.github)} className="p-2 text-[#000]} font-semibold text-[14px] tracking-widest bg-[#FF4500] transition-all outline-none">
//                         Github
//                       </button>
//                     </div>
//                              </div>
//                         </li>
//                     )) : null
//                 }
//             </ul>
//             </AnimationWapper>
//         </div>
//     )
// }





"use client";

import { motion } from "framer-motion";
import AnimationWrapper from "../animation-wrapper";
import { useRouter } from "next/navigation";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

export default function ClientProjectView({ data }) {
  const router = useRouter();

  return (
    <section
      id="project"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute left-0 bottom-0 w-96 h-96 bg-orange-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}

        <AnimationWrapper>

          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="inline-flex px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400">
              Portfolio
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white">

              Featured
              <span className="text-orange-500">
                {" "}Projects
              </span>

            </h2>

            <p className="text-zinc-400 mt-6 leading-8">

              A collection of modern, scalable and responsive
              applications built with today's best technologies.

            </p>

          </div>

        </AnimationWrapper>

        {/* Projects */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {data?.map((item) => (

            <AnimationWrapper key={item._id}>

              <motion.div
                whileHover={{
                  y: -12,
                }}
                transition={{
                  duration: .3,
                }}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-orange-500 transition-all"
              >

                {/* Thumbnail */}

                <div className="relative h-56 bg-gradient-to-br from-orange-500/20 via-zinc-900 to-zinc-900 flex items-center justify-center">

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  ) : (
                    <FaCode
                      className="text-orange-500"
                      size={80}
                    />
                  )}

                </div>

                {/* Body */}

                <div className="p-7">

                  <span className="text-orange-500 text-sm">

                    {new Date(
                      item._creationTime
                    ).toLocaleDateString()}

                  </span>

                  <h3 className="text-2xl font-bold text-white mt-3">

                    {item.name}

                  </h3>

                  <div className="flex flex-wrap gap-2 mt-6">

                    {item.technologies
                      ?.split(",")
                      .map((tech, index) => (

                        <span
                          key={index}
                          className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 text-sm"
                        >
                          {tech.trim()}
                        </span>

                      ))}

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-4 mt-8">

                    <button
                      onClick={() =>
                        router.push(item.website)
                      }
                      className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl transition"
                    >
                      <FaExternalLinkAlt />

                      Live Demo
                    </button>

                    <button
                      onClick={() =>
                        router.push(item.github)
                      }
                      className="flex-1 flex items-center justify-center gap-2 border border-zinc-700 hover:border-orange-500 text-white py-3 rounded-xl transition"
                    >
                      <FaGithub />

                      GitHub
                    </button>

                  </div>

                </div>

              </motion.div>

            </AnimationWrapper>

          ))}

        </div>

      </div>
    </section>
  );
}