"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "aboutme",
    placeholder: "Tell us about yourself",
    type: "textarea",
    label: "About Me",
  },
  {
    name: "noofprojects",
    placeholder: "20",
    type: "text",
    label: "Projects Completed",
  },
  {
    name: "yearofexperience",
    placeholder: "5",
    type: "text",
    label: "Years of Experience",
  },
  {
    name: "noofclients",
    placeholder: "100+",
    type: "text",
    label: "Clients",
  },
  {
    name: "skills",
    placeholder: "React, Next.js, Node.js",
    type: "text",
    label: "Skills",
  },
];

export default function AdminAboutView({
  formData,
  setFormData,
  handleSaveData,
}) {
  return (
    <div className="max-w-md">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          About Section
        </h2>

        <p className="text-zinc-500 text-sm mb-6">
          About &gt; About Section
        </p>

        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        <button
          onClick={() => handleSaveData("about")}
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
        >
          Update
        </button>
      </div>
    </div>
  );
}