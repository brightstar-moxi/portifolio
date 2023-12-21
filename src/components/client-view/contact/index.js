"use client"

import { useEffect, useState } from "react"
import AnimationWapper from "../animation-wrapper"
import { addData } from "@/services"

const controls = [
    {
        name: 'name',
        placeholder: "Enter your name",
        type: 'text',
        label: 'Name'

    },
    {
        name: 'email',
        placeholder: "Enter your email",
        type: 'email',
        label: 'Email'

    },
    {
        name: 'message',
        placeholder: "Enter your message",
        type: 'text',
        label: 'Message'

    }
]

const initialFormData = {
    name: "",
    email: "",
    message: ""
}

export default function ClientContactView() {


    const [formData, setFormData] = useState(initialFormData);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    async function handleSendMessage() {
        const res = await addData('contact', formData)
        console.log(res,'contact');
        if(res && res.success) {
            setFormData(initialFormData)
            setShowSuccessMessage(true)
        }
    }

    useEffect(()=>{
        if(showSuccessMessage){
setTimeout(()=>{
    setShowSuccessMessage(false)
}, 1500)
        }
    }, [showSuccessMessage])

    const isVaildForm = () => {
        return formData && formData.name !== '' && formData.email !== '' && formData.message !== '' ? true : false
    }
    console.log(isVaildForm(), "isVaildForm");

    return (
        <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="contact">
            <AnimationWapper className={'py-6'}>
                <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
                    <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                        {
                            'Contact Me'.split(' ').map((item, index) => (
                                <span className={`${index === 1 || index === 3 ? 'text-[#FF4500]' : 'text-[#fff]'}`}
                                >{item} {" "}</span>
                            ))
                        }
                    </h1>
                </div>
            </AnimationWapper>
            <div className="text-gray-500 relative">
                <div className="container px-5">
                    <div className="w-full">
                        <div className="flex flex-wrap -m-2">
                            {
                                controls.map((controlItem) =>
                                    controlItem.name === 'message' ? (
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label className="text-sm text-[#fff]">
                                                    {controlItem.label}
                                                </label>
                                                <textarea
                                                    id={controlItem.name}
                                                    name={controlItem.name}
                                                    value={formData[controlItem.name]}
                                                    onChange={(e) => setFormData({
                                                        ...formData,
                                                        [controlItem.name]: e.target.value
                                                    })}
                                                    className="w-full border-[#FF4500] border-[2px] bg-[#000000] rounded  h-32 text-base outline-none text-[#ffffff] py-1 px-3 resize-none leading-6"
                                                ></textarea>
                                            </div>
                                        </div>
                                    )
                                        : (
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label className="text-sm text-[#fff]">
                                                        {controlItem.label}
                                                    </label>
                                                    <input
                                                        id={controlItem.name}
                                                        name={controlItem.name}
                                                        value={formData[controlItem.name]}
                                                        onChange={(e) => setFormData({
                                                            ...formData,
                                                            [controlItem.name]: e.target.value
                                                        })}
                                                        className="w-full border-[#FF4500] border-[2px] bg-[#000000] rounded  text-base outline-none text-[#ffffff] py-1 px-3  leading-6"
                                                    />
                                                </div>
                                            </div>
                                        ))
                            }
                            {
                                showSuccessMessage && <p className="text-[14px] font-bold my-[8px] text-[#ffffff]">Your Message Is Succesfilly Delivered !</p>
                            }
                            <div className="p-2 w-full">
                               
                                <button
                                 disabled={!isVaildForm()}
                                onClick={handleSendMessage} className="disabled:opacity-50 py-3 lg:py-4 px-12 lg:px-16 text-[#fff] font-semibold rounded-lg text-2xl tracking-widest bg-[#FF4500] outline-none">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}