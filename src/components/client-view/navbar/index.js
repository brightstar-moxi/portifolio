"use client"

import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";


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
    // {
    //     id: "contact",
    //     label: "Contact"
    // },

];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
    return getMenuItems.map((item) => <LinkScroll
        activeClass="active"
        to={item.id}
        spy={true}
        smooth={true}
        duration={1000}
        onSetActive={() => setActiveLink(item.id)}
        className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
 ${activeLink === item.id
                ? "text-[#FF4500] animation-active shadow-[#FF4500]"
                : "text-[#fff] font-bold hover:text-[#FF4500]"
            }`}
    >
        {item.label}
    </LinkScroll>)
}

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrollActive, SetScrollActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            SetScrollActive(window.screenY > 20);
        })
    }, [])
    return <>
        <header className={`fixed top-0 w-full z-30 bg-[#000] transition-all ${scrollActive ? "shadow-md pt-0" : "pt-4"}`}>
            <nav className="max-w-screen-xl px6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4" >
                <div className="col-start-1 col-end-2 flex items-center">
                    <div className=" cursor-pointer flex gap-2 font-bold items-center text-[20px] text-[#FF4500]">
                        <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded[8px] border-[#FF4500] bg-[#FF4500] ">
                            <span className="text-[#fff] text-[25px] font-bold">B</span>
                        </div>
                       rightstar
                    </div>
                </div>
                <ul className="hidden lg:flex col-start-4 col-end-8 text-whiteitems-center">
                    <CreateMenus
                        setActiveLink={setActiveLink}
                        activeLink={activeLink}
                        getMenuItems={menuItems}
                    />
                </ul>
                <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
                    <button  onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              } className="py-3 px-6 border-[2px] bg-[#000] border-[#FF4500] text-[#fff] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none">Contact Me</button>
                </div>
            </nav>
        </header>
        <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
            <div className="bg-[#000] sm:px-3">
                <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
                    <CreateMenus
                        setActiveLink={setActiveLink}
                        activeLink={activeLink}
                        getMenuItems={menuItems}
                    />
                              </ul>
            </div>
        </nav>

    </>
}