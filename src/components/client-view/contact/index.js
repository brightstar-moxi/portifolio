// "use client"

// import { useEffect, useState } from "react"
// import AnimationWapper from "../animation-wrapper"
// // import { addData } from "@/services"
// import { useMutation } from "convex/react";
// import { api } from "../../../../convex/_generated/api";
// const controls = [
//     {
//         name: 'name',
//         placeholder: "Enter your name",
//         type: 'text',
//         label: 'Name'

//     },
//     {
//         name: 'email',
//         placeholder: "Enter your email",
//         type: 'email',
//         label: 'Email'

//     },
//     {
//         name: 'message',
//         placeholder: "Enter your message",
//         type: 'text',
//         label: 'Message'

//     }
// ]

// const initialFormData = {
//     name: "",
//     email: "",
//     message: ""
// }

// export default function ClientContactView() {

//     const createContact = useMutation(api.contact.create);

//     const [formData, setFormData] = useState(initialFormData);
//     const [showSuccessMessage, setShowSuccessMessage] = useState(false)

//     // async function handleSendMessage() {
//     //     const res = await addData('contact', formData)
//     //     console.log(res,'contact');
//     //     if(res && res.success) {
//     //         setFormData(initialFormData)
//     //         setShowSuccessMessage(true)
//     //     }
//     // }

//     async function handleSendMessage() {
//   try {
//     await createContact({
//       name: formData.name,
//       email: formData.email,
//       message: formData.message,
//     });

//     setFormData(initialFormData);
//     setShowSuccessMessage(true);
//   } catch (error) {
//     console.error(error);
//   }
// }

//     useEffect(()=>{
//         if(showSuccessMessage){
// setTimeout(()=>{
//     setShowSuccessMessage(false)
// }, 1500)
//         }
//     }, [showSuccessMessage])

//     const isVaildForm = () => {
//         return formData && formData.name !== '' && formData.email !== '' && formData.message !== '' ? true : false
//     }
//     console.log(isVaildForm(), "isVaildForm");

//     return (
//         <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="contact">
//             <AnimationWapper className={'py-6'}>
//                 <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
//                     <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
//                         {
//                             'Contact Me'.split(' ').map((item, index) => (
//                                 <span className={`${index === 1 || index === 3 ? 'text-[#FF4500]' : 'text-[#fff]'}`}
//                                 >{item} {" "}</span>
//                             ))
//                         }
//                     </h1>
//                 </div>
//             </AnimationWapper>
//             <div className="text-gray-500 relative">
//                 <div className="container px-5">
//                     <div className="w-full">
//                         <div className="flex flex-wrap -m-2">
//                             {
//                                 controls.map((controlItem) =>
//                                     controlItem.name === 'message' ? (
//                                         <div className="p-2 w-full">
//                                             <div className="relative">
//                                                 <label className="text-sm text-[#fff]">
//                                                     {controlItem.label}
//                                                 </label>
//                                                 <textarea
//                                                     id={controlItem.name}
//                                                     name={controlItem.name}
//                                                     value={formData[controlItem.name]}
//                                                     onChange={(e) => setFormData({
//                                                         ...formData,
//                                                         [controlItem.name]: e.target.value
//                                                     })}
//                                                     className="w-full border-[#FF4500] border-[2px] bg-[#000000] rounded  h-32 text-base outline-none text-[#ffffff] py-1 px-3 resize-none leading-6"
//                                                 ></textarea>
//                                             </div>
//                                         </div>
//                                     )
//                                         : (
//                                             <div className="p-2 w-full">
//                                                 <div className="relative">
//                                                     <label className="text-sm text-[#fff]">
//                                                         {controlItem.label}
//                                                     </label>
//                                                     <input
//                                                         id={controlItem.name}
//                                                         name={controlItem.name}
//                                                         value={formData[controlItem.name]}
//                                                         onChange={(e) => setFormData({
//                                                             ...formData,
//                                                             [controlItem.name]: e.target.value
//                                                         })}
//                                                         className="w-full border-[#FF4500] border-[2px] bg-[#000000] rounded  text-base outline-none text-[#ffffff] py-1 px-3  leading-6"
//                                                     />
//                                                 </div>
//                                             </div>
//                                         ))
//                             }
//                             {
//                                 showSuccessMessage && <p className="text-[14px] font-bold my-[8px] text-[#ffffff]">Your Message Is Succesfilly Delivered !</p>
//                             }
//                             <div className="p-2 w-full">

//                                 <button
//                                  disabled={!isVaildForm()}
//                                 onClick={handleSendMessage} className="disabled:opacity-50 py-3 lg:py-4 px-12 lg:px-16 text-[#fff] font-semibold rounded-lg text-2xl tracking-widest bg-[#FF4500] outline-none">Send Message</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }




"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import AnimationWapper from "../animation-wrapper";
import { FaWhatsapp } from "react-icons/fa";

const initialFormData = {
    name: "",
    email: "",
    message: "",
};

export default function ClientContactView() {
    const createContact = useMutation(api.contact.create);

    const [formData, setFormData] = useState(initialFormData);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSendMessage() {
        try {
            setLoading(true);

            await createContact({
                name: formData.name,
                email: formData.email,
                message: formData.message,
            });

            setFormData(initialFormData);
            setShowSuccessMessage(true);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (showSuccessMessage) {
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showSuccessMessage]);

    const isValidForm =
        formData.name &&
        formData.email &&
        formData.message;

    return (
        <section
            id="contact"
            className="max-w-7xl mx-auto px-6 lg:px-12 py-28"
        >
            <AnimationWapper>
                <div className="text-center mb-16">

                    <span className="text-orange-500 font-semibold tracking-[0.3em] uppercase">
                        Contact
                    </span>

                    <h2 className="text-4xl lg:text-6xl font-bold text-white mt-4">
                        Let's Build Something Great
                    </h2>

                    <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
                        Have a project, freelance opportunity, or full-time role?
                        Send me a message and I'll get back to you as soon as possible.
                    </p>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12"
                >

                    {/* Left Side */}

                    <div className="space-y-8">

                        <div className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
shadow-[0_0_40px_rgba(249,115,22,.08)]
">

                            <h3 className="text-2xl font-bold text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">

                                <div>
                                    <p className="text-zinc-500">
                                        Email
                                    </p>

                                    <p className="text-white">
                                        brightstarmoxiz2@gmail.com
                                    </p>
                                </div>

                                <div>
                                    <p className="text-zinc-500">
                                        Location
                                    </p>

                                    <p className="text-white">
                                        Nigeria
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-zinc-500">
                                            WhatsApp
                                        </p>

                                        <p className="text-white">
                                            Chat with me
                                        </p>
                                    </div>

                                    <a
                                        href="https://wa.me/+2347025021586"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center hover:scale-110 transition"
                                    >
                                        <FaWhatsapp
                                            size={24}
                                            className="text-white"
                                        />
                                    </a>

                                </div>
                                <div>
                                    <p className="text-zinc-500">
                                        Availability
                                    </p>

                                    <p className="text-green-400">
                                        Available for work
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
shadow-[0_0_40px_rgba(249,115,22,.08)]
">

                        <div className="space-y-6">

                            <motion.input
                                whileFocus={{
                                    scale: 1.02,
                                }}
                                transition={{
                                    duration: .2,
                                }}
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className="bg-[#0b0f14]
w-full
rounded-xl
bg-white/5
backdrop-blur-xl
border
border-white/10
px-5
py-4
text-white
outline-none
focus:border-orange-500
focus:ring-2
focus:ring-orange-500/20
transition-all
"
                            />

                            <motion.input
                                whileFocus={{
                                    scale: 1.02,
                                }}
                                transition={{
                                    duration: .2,
                                }}
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="bg-[#0b0f14]
w-full
rounded-xl
bg-white/5
backdrop-blur-xl
border
border-white/10
px-5
py-4
text-white
outline-none
focus:border-orange-500
focus:ring-2
focus:ring-orange-500/20
transition-all
"
                            />

                            <motion.textarea
                                whileFocus={{
                                    scale: 1.02,
                                }}
                                transition={{
                                    duration: .2,
                                }}
                                rows={6}
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                                className="bg-[#0b0f14]
w-full
rounded-xl
bg-white/5
backdrop-blur-xl
border
border-white/10
px-5
py-4
text-white
outline-none
focus:border-orange-500
focus:ring-2
focus:ring-orange-500/20
transition-all
"
                            />

                            {showSuccessMessage && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}

                                    exit={{
                                        opacity: 0,
                                        y: -15,
                                    }}
                                    className="bg-green-500/20 border border-green-500 rounded-xl p-4 text-green-400"
                                >
                                    Message sent successfully.
                                </motion.div>
                            )}

                            <motion.button
                                whileHover={{
                                    scale: loading ? 1 : 1.04,
                                }}
                                whileTap={{
                                    scale: .96,
                                }}
                                disabled={!isValidForm || loading}
                                onClick={handleSendMessage}
                                className="
    group
    relative
    overflow-hidden
    w-full
    bg-orange-500
    disabled:opacity-60
    disabled:cursor-not-allowed
    text-white
    font-semibold
    py-4
    rounded-xl
    transition-all
    hover:shadow-[0_0_30px_rgba(249,115,22,.5)]
  "
                            >
                                <span className="flex items-center justify-center gap-3">

                                    {loading ? "Sending..." : "Send Message"}

                                    {loading ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 1,
                                                ease: "linear",
                                            }}
                                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                        />
                                    ) : (
                                        <motion.span
                                            animate={{
                                                x: [0, 6, 0],
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 1.6,
                                            }}
                                        >
                                            →
                                        </motion.span>
                                    )}

                                </span>
                            </motion.button>
                        </div>

                    </div>

                </motion.div>

            </AnimationWapper>
        </section>
    );
}