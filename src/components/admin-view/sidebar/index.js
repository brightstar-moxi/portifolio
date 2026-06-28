"use client";
import {
  FiGrid,
  FiHome,
  FiUser,
  FiBriefcase,
  FiBook,
  FiFolder,
  FiMail,
} from "react-icons/fi";
export default function Sidebar({

 
  currentSelectedTab,
  setCurrentSelectedTab,
  resetFormDatas,
  setUpdate,
  setAuthUser,
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
    const menuItems = [
        // { id: "dashboard", label: "Dashboard" },
        // { id: "home", label: "Home" },
        // { id: "about", label: "About" },
        // { id: "experience", label: "Experience" },
        // { id: "education", label: "Education" },
        // { id: "project", label: "Projects" },
        // { id: "contact", label: "Contact" },
       
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <FiGrid />,
  },
  {
    id: "home",
    label: "Home",
    icon: <FiHome />,
  },
  {
    id: "about",
    label: "About",
    icon: <FiUser />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: <FiBriefcase />,
  },
  {
    id: "education",
    label: "Education",
    icon: <FiBook />,
  },
  {
    id: "project",
    label: "Projects",
    icon: <FiFolder />,
  },
  {
    id: "contact",
    label: "Messages",
    icon: <FiMail />,
  },

    ];

    return (
//  <aside
//   className={`
//      fixed
//     left-0
//     top-0
//     z-50
//     h-screen
//     bg-zinc-950
//     border-r
//     border-zinc-800
//     flex
//     flex-col
//     transition-all
//     duration-300

//     ${
//       mobileOpen
//         ? "translate-x-0"
//         : "-translate-x-full md:translate-x-0"
//     }

//     ${collapsed ? "w-20" : "w-64"}
//   `}
// >

<aside
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: collapsed ? "80px" : "256px",
    height: "100vh",
    background: "#111",
    zIndex: 99999,
    transform: mobileOpen
      ? "translateX(0)"
      : window.innerWidth >= 768
      ? "translateX(0)"
      : "translateX(-100%)",
    transition: "all .3s",
  }}
>
            <div className="flex items-center justify-between p-5 border-b border-zinc-800">

                {!collapsed && (
                    <h2 className="text-white font-bold text-xl">
                        Portfolio
                    </h2>
                )}

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="text-white"
                >
                    ☰
                </button>
<button
  onClick={() => setMobileOpen(false)}
  className="md:hidden text-white"
>
  ✕
</button>
            </div>

            {/* <div className="flex-1 p-4 text-orange-100">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setCurrentSelectedTab(item.id);
              resetFormDatas();
              setUpdate(false);
            }}
            className={`w-full text-left px-4 py-3 rounded-xl mb-2 transition-all
            ${
              currentSelectedTab === item.id
                ? "bg-orange-500 text-white"
                : "text-zinc-300 hover:bg-zinc-800"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div> */}
            <div className="mt-6">

                {menuItems.map((item) => (

                    <button
                        key={item.id}
                        onClick={() => {
                            setCurrentSelectedTab(item.id);
                            resetFormDatas();
                            setUpdate(false);
                        }

                        }
                        className={`
        flex
        items-center
        gap-3
        w-full
        px-5
        py-4
        text-left
        transition-all

        ${currentSelectedTab === item.id
                                ? "bg-orange-500 text-white"
                                : "text-zinc-400 hover:bg-zinc-900"
                            }
      `}
                    >

                        <span>{item.icon}</span>

                        {!collapsed && (
                            <span>{item.label}</span>
                        )}

                    </button>

                ))}

            </div>

            <div className="p-4 border-t border-zinc-800">
                <button
                    onClick={() => {
                        setAuthUser(false);
                        sessionStorage.removeItem("authUser");
                    }}
                    // className="w-full px-4 py-3 rounded-xl bg-red-500 text-orange-100"
                    className="     flex
        items-center
        gap-3
        w-full
        px-5
        py-4
        text-left
        transition-all"
                >
                    Logout
                </button>
            </div>
        </aside>
    );
}