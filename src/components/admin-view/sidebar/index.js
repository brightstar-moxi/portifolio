"use client";

export default function Sidebar({

    currentSelectedTab,
    setCurrentSelectedTab,
    resetFormDatas,
    setUpdate,
    setAuthUser,
    collapsed,
    setCollapsed,
}) {
    const menuItems = [
        { id: "dashboard", label: "Dashboard" },
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "experience", label: "Experience" },
        { id: "education", label: "Education" },
        { id: "project", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <aside
            className={`
    min-h-screen
    bg-zinc-950
    border-r
    border-zinc-800
    flex
    flex-col
    transition-all
    duration-300
    ${collapsed ? "w-20" : "w-[260px]"}
  `}
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

                        <span>◉</span>

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
                    className="w-full px-4 py-3 rounded-xl bg-red-500 text-orange-100"
                >
                    Logout
                </button>
            </div>
        </aside>
    );
}