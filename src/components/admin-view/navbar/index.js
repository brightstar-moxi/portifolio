"use client";

export default function Navbar({ setMobileOpen, collapsed,}) {
  return (
   <header
 className="
    sticky
    top-0
    z-40
    w-full
    border-b
    border-zinc-800
    bg-zinc-950
    px-4
    md:px-6
    bg-[#0b0f14]
  "
>
   <div className="h-20 flex items-center justify-between">
   <div className="flex items-center gap-4 min-w-0">
  <button
    onClick={() => setMobileOpen(true)}
    className="md:hidden text-white text-2xl"
  >
    ☰
  </button>

  <div className="min-w-0">
  <h1 className="text-white text-lg md:text-2xl font-bold truncate">
      Admin Dashboard
    </h1>

<p className="hidden sm:block text-zinc-400 text-sm truncate">
      Manage your portfolio
    </p>
  </div>
</div>
     <div className="flex items-center gap-3 flex-shrink-0">
        <button className="relative">
          <span className="text-2xl text-white">
            🔔
          </span>

          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-orange-500" />
        </button>

        <div className="h-11 w-11 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white">
          A
        </div>
      </div>
      </div>
    </header>
  );
}