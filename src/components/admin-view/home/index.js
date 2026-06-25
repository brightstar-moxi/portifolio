"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "heading",
    placeholder: "Enter heading text",
    type: "text",
    label: "Heading",
  },
  {
    name: "summary",
    placeholder: "Enter career summary",
    type: "text",
    label: "Summary",
  },
];

export default function AdminHomeView({
  formData,
  setFormData,
  handleSaveData,
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            Home Section
          </h2>

          <p className="text-zinc-400 mt-2">
            Update your hero section information.
          </p>
        </div>

        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        <div className="mt-8">
          <button
            onClick={() => handleSaveData("home")}
            className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-semibold
              px-6
              py-3
              rounded-xl
              transition-all
            "
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}