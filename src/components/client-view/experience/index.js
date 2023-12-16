"use client"

export default function ClientexprienceView({experienceData, educationData}){

    console.log(experienceData, educationData, 'experienceData');

    return(
        <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="experience">
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1"></div>
        </div>
    )
}