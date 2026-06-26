"use client";
import {
  Bell,
  Search,
  UserCircle2,
  Menu,
} from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function Navbar({ setMobileOpen, collapsed,}) {
 const contacts = useQuery(api.contact.get) || [];

const unread = contacts.filter(
  (item) => item.status === "New"
).length;
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
   <Menu size={24} />
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
<div className="hidden lg:flex flex-1 max-w-md mx-10">
  <div className="relative w-full">

    <Search
      size={18}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
    />

    <input
      type="text"
      placeholder="Search..."
      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-11 pr-4 py-2 text-white outline-none focus:border-orange-500"
    />

  </div>
</div>
     <div className="flex items-center gap-3 flex-shrink-0">
     <button className="relative">
  <Bell size={22} className="text-white" />

  {unread > 0 && (
    <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-orange-500 text-xs flex items-center justify-center text-white">
      {unread}
    </span>
  )}
</button>
        <div
  className="
  h-11
  w-11
  rounded-full
  bg-gradient-to-br
  from-orange-500
  to-orange-700
  flex
  items-center
  justify-center
  font-bold
  text-white
  shadow-lg
"
>
  B
</div>
      </div>
      </div>
    </header>
  );
}