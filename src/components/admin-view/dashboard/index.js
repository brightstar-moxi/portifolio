"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function Dashboard() {
    const home = useQuery(api.home.get) || [];
    const about = useQuery(api.about.get) || [];
    const experience = useQuery(api.experience.get) || [];
    const projects = useQuery(api.projects.get) || [];
    const contacts = useQuery(api.contact.get) || [];

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
    ];

    return (
        <div>
            <h2 className="text-white text-3xl font-bold mb-8">
                Overview
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
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
            </div>
        </div>
    );
}