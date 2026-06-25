"use client";

export default function Navbar() {
  return (
    <div className="h-[70px] border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-8">
      
      <div>
        <h1 className="text-white text-2xl font-bold">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
          A
        </div>

        <div>
          <p className="text-white font-semibold">
            Admin
          </p>
        </div>
      </div>

    </div>
  );
}