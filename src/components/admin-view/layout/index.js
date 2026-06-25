"use client";

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
  return (
    <div className="flex min-h-screen bg-[#0b0f14] text-orange-100">
      <Sidebar
        currentSelectedTab={currentSelectedTab}
        setCurrentSelectedTab={setCurrentSelectedTab}
        resetFormDatas={resetFormDatas}
        setUpdate={setUpdate}
        setAuthUser={setAuthUser}
      />
      <div className="flex-1 flex flex-col">
  <Navbar />

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      </div>
    </div>
  );
}