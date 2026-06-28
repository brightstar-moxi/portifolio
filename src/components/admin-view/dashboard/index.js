"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import {
  Home,
  FolderGit2,
   FolderPlus,
  Mail,
  Briefcase,
   User,
} from "lucide-react";

export default function Dashboard({
  setCurrentSelectedTab,
}) {
    const home = useQuery(api.home.get) || [];
    // const about = useQuery(api.about.get) || [];
    const experience = useQuery(api.experience.get) || [];
    const projects = useQuery(api.projects.get) || [];
    const contacts = useQuery(api.contact.get) || [];
// const education = useQuery(api.education.get) || [];

  const cards = [
  {
    title: "Home",
    value: home.length,
    subtitle: "Section",
    icon: Home,
    color: "bg-orange-500",
  },
  {
    title: "Projects",
    value: projects.length,
    subtitle: "Total Projects",
    icon: FolderGit2,
    color: "bg-purple-600",
  },
  {
    title: "Messages",
    value: contacts.length,
    subtitle: "New Messages",
    icon: Mail,
    color: "bg-green-600",
  },
  {
    title: "Experience",
    value: experience.length,
    subtitle: "Experiences",
    icon: Briefcase,
    color: "bg-blue-600",
  },
];
const quickActions = [
  {
    title: "Edit Home Section",
    description: "Update your home content",
    icon: Home,
    tab: "home",
  },
  {
    title: "Add New Project",
    description: "Showcase your work",
    icon: FolderPlus,
    tab: "project",
  },
  {
    title: "View Messages",
    description: "Check incoming messages",
    icon: Mail,
    tab: "contact",
  },
  {
    title: "Update About Section",
    description: "Update your information",
    icon: User,
    tab: "about",
  },
];
    return (
  <div  className="w-full max-w-full overflow-x-hidden p-4 md:p-6">
    <h2 className="text-white text-3xl font-bold mb-2">
      Dashboard
    </h2>

    <p className="text-zinc-400 mb-8">
      Welcome back! Here's what's happening with your portfolio.
    </p>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
     {cards.map((card) => {
  const Icon = card.icon;

  return (
    <div
      key={card.title}
      className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-2xl
      p-6
      hover:border-orange-500
      transition-all
      duration-300
      "
    >
      <div className="flex items-center gap-4">

        <div
          className={`${card.color} w-12 h-12 rounded-xl flex items-center justify-center`}
        >
          <Icon size={22} className="text-white" />
        </div>

        <div>
          <p className="text-white font-semibold">
            {card.title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-1">
            {card.value}
          </h2>

          <p className="text-zinc-400 text-sm">
            {card.subtitle}
          </p>
        </div>

      </div>
    </div>
  );
})}
    </div>

    {/* Bottom Section */}
    <div className="grid lg:grid-cols-3 gap-6 mt-8">

      {/* Messages */}
      {/* <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-x-auto"> */}
<div className="lg:col-span-2 bg-zinc-900 rounded-2xl border border-zinc-800 p-6 overflow-x-auto">
       <div className="flex justify-between items-center mb-4">
  <h3 className="text-white text-xl font-bold">
    Recent Messages
  </h3>

  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
   {
contacts.filter(item => item.status === "New").length
}
  </span>
</div>
<div className="overflow-x-auto">
      <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="text-left p-3 text-zinc-400">
                Name
              </th>

              <th className="text-left p-3 text-zinc-400">
                Email
              </th>

              <th className="text-left p-3 text-zinc-400">
                Message
              </th>
               <th className="text-left p-3 text-zinc-400">
      Status
    </th>
            </tr>
          </thead>

          <tbody>
            {contacts.slice(0, 5).map((item) => (
              <tr
                key={item._id}
                className="border-b border-zinc-800"
              >
                <td className="p-3 text-white">
                  {item.name}
                </td>

                <td className="p-3 text-white">
                  {item.email}
                </td>

                <td className="p-3 text-white">
               <p className="max-w-xs truncate">
  {item.message}
</p>
                </td>

  <td className="p-3">
   <span
  className={`px-3 py-1 rounded-full text-xs ${
    item.status === "New"
      ? "bg-orange-500/20 text-orange-400"
      : "bg-blue-500/20 text-blue-400"
  }`}
>
  {item.status}
</span>
  </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-5">
  <button
    onClick={() => setCurrentSelectedTab("contact")}
    className="text-orange-500 hover:underline"
  >
    View all messages →
  </button>
</div>
      </div>
</div>
      {/* Quick Actions */}
     <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

  <h3 className="text-white text-xl font-bold mb-5">
    Quick Actions
  </h3>

  <div className="space-y-3">

    {quickActions.map((action) => {
      const Icon = action.icon;

      return (
        <button
          key={action.title}
          onClick={() => setCurrentSelectedTab(action.tab)}
          className="
          w-full
          flex
          items-center
          gap-4
          p-4
          rounded-xl
          border
          border-zinc-800
          bg-zinc-800/50
          hover:bg-zinc-800
          hover:border-orange-500
          transition-all
          duration-300
          "
        >

          <div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>

          <div className="text-left">

            <h4 className="text-white font-semibold">
              {action.title}
            </h4>

            <p className="text-zinc-400 text-sm">
              {action.description}
            </p>

          </div>

        </button>
      );
    })}

  </div>

</div>

    </div>
  </div>
);
}