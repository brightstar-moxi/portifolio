// "use client"

// import { useEffect, useState } from "react";
// import { Link as LinkScroll, scroller } from "react-scroll";


// const menuItems = [
//     {
//         id: 'home',
//         label: 'Home'
//     },
//     {
//         id: "about",
//         label: "About"
//     },
//     {
//         id: "experience",
//         label: "Experience"
//     },
//     {
//         id: "project",
//         label: "Project"
//     },
//     // {
//     //     id: "contact",
//     //     label: "Contact"
//     // },

// ];

// function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
//     return getMenuItems.map((item) => <LinkScroll
//         activeClass="active"
//         to={item.id}
//         spy={true}
//         smooth={true}
//         duration={1000}
//         onSetActive={() => setActiveLink(item.id)}
//         className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
//  ${activeLink === item.id
//                 ? "text-[#FF4500] animation-active shadow-[#FF4500]"
//                 : "text-[#fff] font-bold hover:text-[#FF4500]"
//             }`}
//     >
//         {item.label}
//     </LinkScroll>)
// }

// export default function Navbar() {
//     const [activeLink, setActiveLink] = useState('home');
//     const [scrollActive, SetScrollActive] = useState(false);

//     useEffect(() => {
//         window.addEventListener('scroll', () => {
//             SetScrollActive(window.screenY > 20);
//         })
//     }, [])
//     return <>
//         <header className={`fixed top-0 w-full z-30 bg-[#000] transition-all ${scrollActive ? "shadow-md pt-0" : "pt-4"}`}>
//             <nav className="max-w-screen-xl px6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4" >
//                 <div className="col-start-1 col-end-2 flex items-center">
//                     <div className=" cursor-pointer flex gap-2 font-bold items-center text-[20px] text-[#FF4500]">
//                         <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded[8px] border-[#FF4500] bg-[#FF4500] ">
//                             <span className="text-[#fff] text-[25px] font-bold">B</span>
//                         </div>
//                        rightstar
//                     </div>
//                 </div>
//                 <ul className="hidden lg:flex col-start-4 col-end-8 text-whiteitems-center">
//                     <CreateMenus
//                         setActiveLink={setActiveLink}
//                         activeLink={activeLink}
//                         getMenuItems={menuItems}
//                     />
//                 </ul>
//                 <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
//                     <button  onClick={() =>
//                 scroller.scrollTo("contact", {
//                   duration: 1500,
//                   delay: 100,
//                   smooth: true,
//                 })
//               } className="py-3 px-6 border-[2px] bg-[#000] border-[#FF4500] text-[#fff] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none">Contact Me</button>
//                 </div>
//             </nav>
//         </header>
//         <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
//             <div className="bg-[#000] sm:px-3">
//                 <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
//                     <CreateMenus
//                         setActiveLink={setActiveLink}
//                         activeLink={activeLink}
//                         getMenuItems={menuItems}
//                     />
//                               </ul>
//             </div>
//         </nav>

//     </>
// }


"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-3 cursor-pointer">

            <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-orange-500/30">
              B
            </div>

            <span className="text-white font-bold text-xl">
              Bright
              <span className="text-orange-500">star</span>
            </span>

          </div>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-10">

            {menuItems.map((item) => (
              <LinkScroll
                key={item.id}
                to={item.id}
                spy
                smooth
                duration={700}
                offset={-80}
                onSetActive={() => setActiveLink(item.id)}
                className={`cursor-pointer transition duration-300 ${
                  activeLink === item.id
                    ? "text-orange-500"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
              </LinkScroll>
            ))}

          </ul>

          {/* Contact */}

          <div className="hidden lg:block">

            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  smooth: true,
                  duration: 700,
                  offset: -60,
                })
              }
              className="px-6 py-3 rounded-xl border border-orange-500 text-white hover:bg-orange-500 transition-all duration-300"
            >
              Contact Me
            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            {mobileMenu ? (
              <HiX size={30} />
            ) : (
              <HiOutlineMenuAlt3 size={30} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed top-20 left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-500 z-40 ${
          mobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">

          {menuItems.map((item) => (
            <LinkScroll
              key={item.id}
              to={item.id}
              smooth
              spy
              duration={700}
              offset={-80}
              onClick={() => setMobileMenu(false)}
              className="text-white text-lg cursor-pointer hover:text-orange-500"
            >
              {item.label}
            </LinkScroll>
          ))}

          <button
            onClick={() => {
              setMobileMenu(false);
              scroller.scrollTo("contact", {
                smooth: true,
                duration: 700,
                offset: -60,
              });
            }}
            className="mt-4 w-full py-3 rounded-xl bg-orange-500 text-white"
          >
            Contact Me
          </button>

        </div>
      </div>
    </>
  );
}