"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function Dashboard({
  setCurrentSelectedTab,
}) {
    const home = useQuery(api.home.get) || [];
    const about = useQuery(api.about.get) || [];
    const experience = useQuery(api.experience.get) || [];
    const projects = useQuery(api.projects.get) || [];
    const contacts = useQuery(api.contact.get) || [];
const education = useQuery(api.education.get) || [];

    const cards = [
        {
            title: "Projects",
            value: projects.length,
        },
        {
            title: "Messages",
            value: contacts.length,
        },
        {
            title: "Experience",
            value: experience.length,
        },
        {
            title: "Profile",
            value: about.length,
        },
        {
    title: "Education",
    value: education.length,
},
{
    title: "Home",
    value: home.length,
},
    ];

    return (
  <div>
    <h2 className="text-white text-3xl font-bold mb-2">
      Dashboard
    </h2>

    <p className="text-zinc-400 mb-8">
      Welcome back! Here's what's happening with your portfolio.
    </p>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
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
          "
        >
          <p className="text-zinc-400">
            {card.title}
          </p>

          <h3 className="text-4xl font-bold text-white mt-4">
            {card.value}
          </h3>
        </div>
      ))}
    </div>

    {/* Bottom Section */}
    <div className="grid lg:grid-cols-3 gap-6 mt-8">

      {/* Messages */}
      <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

       <div className="flex justify-between items-center mb-4">
  <h3 className="text-white text-xl font-bold">
    Recent Messages
  </h3>

  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
    {contacts.length}
  </span>
</div>

        <table className="w-full">
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
                  {item.message}
                </td>

  <td className="p-3">
    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
      New
    </span>
  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Actions */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

        <h3 className="text-white text-xl font-bold mb-4">
          Quick Actions
        </h3>

        <div className="space-y-3">

        <button
  onClick={() => setCurrentSelectedTab("home")}
  className="w-full text-left bg-zinc-800 p-4 rounded-xl text-white hover:bg-zinc-700"
>
  Edit Home Section
</button>

<button
  onClick={() => setCurrentSelectedTab("project")}
  className="w-full text-left bg-zinc-800 p-4 rounded-xl text-white hover:bg-zinc-700"
>
  Add New Project
</button>

<button
  onClick={() => setCurrentSelectedTab("contact")}
  className="w-full text-left bg-zinc-800 p-4 rounded-xl text-white hover:bg-zinc-700"
>
  View Messages
</button>

<button
  onClick={() => setCurrentSelectedTab("about")}
  className="w-full text-left bg-zinc-800 p-4 rounded-xl text-white hover:bg-zinc-700"
>
  Update About Section
</button>

        </div>
      </div>

    </div>
  </div>
);
}