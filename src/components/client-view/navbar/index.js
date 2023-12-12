"use client"

import { useEffect, useState } from "react"

const menuItems = [
    {
        id: 'home',
        label: 'Home'
    },
    {
        id: "about",
        label: "About"
    },
    {
        id: "experience",
        label: "Experience"
    },
    {
        id: "project",
        label: "Project"
    },
    {
        id: "contact",
        label: "Contact"
    },

]
export default function Navbar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrollActive, SetScrollActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            SetScrollActive(window.screenY > 20);
        })
    }, [])
    return <>
        <header className={`fixed top-0 wfull z-30 bg-white-500 transition-all ${scrollActive ? "shadow-md pt-0" : "pt-4"}`}>
            <nav className="max-w-screen-xl px6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4" >
                <div className="col-start-1 col-end-2 flex items-center">
                    <div className=" cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main">
                        <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded[8px] border-green-main bg-green-main ">
                            <span className="text-[#fff] text-[25px] font-bold">P</span>
                        </div>
                        ortfolio
                    </div>
                </div>
            </nav>
        </header>

    </>
}