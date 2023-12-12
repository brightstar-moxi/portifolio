"use client"

import { useEffect, useState } from "react"

const menuItems = [
    {
        id : 'home',
        label : 'Home'
    },
    {
        id:"about",
        label:"About"
    },
    {
        id:"experience",
        label:"Experience"
    },
    {
        id:"project",
        label:"Project"
    },
    {
        id:"contact",
        label:"Contact"
    },
    
]
export default function Navbar(){
    const [activeLink, setActiveLink] = useState('home');
    const [scrollActive, SetScrollActive] = useState(false);

    useEffect(() =>{
 window.addEventListener('scroll', () => {
    SetScrollActive(window.screenY > 20);
    })
    }, [])
    return<>
    <header className={"fixed top-0 wfull z-30 bg-white"}>
        <nav className="max-w-screen-xl px6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4" ></nav>
    </header>
    
    </>
}