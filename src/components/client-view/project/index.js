"use client"

import AnimationWapper from "../animation-wrapper";

export default function ClientProjectView({data}){
console.log(data, "Client Project View");
    return(
        <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="project">
            <AnimationWapper className={'py-6 sm:py-16'}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                    <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                        {
                            "My Projects".split(' ').map((item, index) => (
                                <span className={`${index === 8 ? 'text-green-main' : 'text-[#000]'}`}
                                >{item} {" "}</span>
                            ))
                        }
                    </h1>
                  
                </div>
            </AnimationWapper>
        </div>
    )
}