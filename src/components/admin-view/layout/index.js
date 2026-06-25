"use client";
import { useState } from "react";
import Sidebar from "../sidebar";
import Navbar from "../navbar";

export default function AdminLayout({
  children,
  currentSelectedTab,
  setCurrentSelectedTab,
  resetFormDatas,
  setUpdate,
  setAuthUser,
}) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-[#0b0f14] text-orange-100">
    <Sidebar
  menuItems={[
    { id: "dashboard", label: "Dashboard" },
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]}
   mobileOpen={mobileOpen}
  setMobileOpen={setMobileOpen}

  currentSelectedTab={currentSelectedTab}
  setCurrentSelectedTab={setCurrentSelectedTab}
  resetFormDatas={resetFormDatas}
  setUpdate={setUpdate}
  setAuthUser={setAuthUser}
  collapsed={collapsed}
  setCollapsed={setCollapsed}
/>
      <div
  className={`
    flex-1
    flex
    flex-col
    transition-all
    ${collapsed ? "md:ml-20" : "md:ml-64"}
  `}
>
  <Navbar setMobileOpen={setMobileOpen} collapsed={collapsed}/>

   
  <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      </div>
    </div>
  );
}