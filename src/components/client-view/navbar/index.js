"use client"
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
    return<>
    <header>
        <nav className="max-w-screen-xl px6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col" ></nav>
    </header>
    
    </>
}