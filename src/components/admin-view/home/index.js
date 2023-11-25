'use client'

import FormControl from "../form-controls"

const controls = [
    {
        name : 'heading',
        placeholder: 'Enter heading text',
        type: "text",
        label:"Enter heading text"
    },
    {
        name : 'summary',
        placeholder: 'Enter Career summary',
        type: "text",
        label:"Enter Career summary"
    },
]

export default function AdminHomeView(){
    return (
        <div className="w-full">
            <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <FormControl
                controls={controls}
                />
            </div>
        </div>
    )
}