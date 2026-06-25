"use client";

export default function Sidebar({
  currentSelectedTab,
  setCurrentSelectedTab,
  resetFormDatas,
  setUpdate,
  setAuthUser,
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
    <aside className="w-[260px] min-h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col">
      
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-orange-500">
          Portfolio
        </h1>
      </div>

      <div className="flex-1 p-4 text-orange-100">
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