"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function Dashboard() {
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
            <h2 className="text-white text-3xl font-bold mb-8">
                Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.title}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition-all"
                    >
                        <p className="text-zinc-400">
                            {card.title}
                        </p>

                        <h3 className="text-4xl font-bold text-white mt-4">
                            {card.value}
                        </h3>
                    </div>
                ))}
                <div className="mt-10">
    <h3 className="text-white text-2xl font-bold mb-4">
        Recent Messages
    </h3>

    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
        <table className="w-full">
            <thead>
                <tr className="border-b border-zinc-800">
                    <th className="text-left p-4 text-zinc-400">
                        Name
                    </th>

                    <th className="text-left p-4 text-zinc-400">
                        Email
                    </th>

                    <th className="text-left p-4 text-zinc-400">
                        Message
                    </th>
                </tr>
            </thead>

            <tbody>
                {contacts.slice(0, 5).map((item) => (
                    <tr
                        key={item._id}
                        className="border-b border-zinc-800"
                    >
                        <td className="p-4 text-white">
                            {item.name}
                        </td>

                        <td className="p-4 text-white">
                            {item.email}
                        </td>

                        <td className="p-4 text-white">
                            {item.message}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

<div className="mt-10">
    <h3 className="text-white text-2xl font-bold mb-4">
        Quick Actions
    </h3>

    <div className="flex gap-4 flex-wrap">
        <button
            className="bg-orange-500 px-6 py-3 rounded-xl text-white font-semibold"
        >
            Add Project
        </button>

        <button
            className="bg-zinc-800 px-6 py-3 rounded-xl text-white font-semibold"
        >
            Add Experience
        </button>

        <button
            className="bg-zinc-800 px-6 py-3 rounded-xl text-white font-semibold"
        >
            View Messages
        </button>
    </div>
</div>
            </div>
            
        </div>
    );
}