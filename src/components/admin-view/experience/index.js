'use client'
import { useState } from "react";
import FormControls from "../form-controls";
// import DataTable from "../data-table";

const controls = [
    {
        name: "position",
        placeholder: "Position",
        type: "text",
        label: "Position",
      },
      {
        name: "company",
        placeholder: "Company",
        type: "text",
        label: "Company",
      },
      {
        name: "duration",
        placeholder: "Duration",
        type: "text",
        label: "Duration",
      },
      {
        name: "location",
        placeholder: "Location",
        type: "text",
        label: "Location",
      },
      {
        name: "jobprofile",
        placeholder: "Job Profile",
        type: "text",
        label: "Job Profile",
      },
    ]
export default function AdminExperienceView({ formData, setFormData, handleSaveData, data,  handleEdit,
  handleDelete, }){
    console.log(formData);
    const [showForm, setShowForm] = useState(false);
   return (
  <div className="w-full max-w-5xl mx-auto px-4">

    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Experience
        </h2>

        <p className="text-zinc-500 text-sm">
          Experience &gt; All Experiences
        </p>
      </div>

      <button
        onClick={() => setShowForm(true)}
        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg"
      >
        + Add Experience
      </button>
    </div>

    {/* Cards */}
    <div className="space-y-4">
      {data?.map((item) => (
        <div
          key={item._id}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between items-center"
        >
          <div>
            <h3 className="text-white font-semibold text-lg">
              {item.position}
            </h3>

            <p className="text-zinc-400">
              {item.company}
            </p>

            <p className="text-zinc-500 text-sm">
              {item.duration}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                handleEdit(item);
                setShowForm(true);
              }}
              className="text-white"
            >
              ✏️
            </button>

            <button
              onClick={() => handleDelete(item._id)}
              className="text-orange-500"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Form */}
    {showForm && (
      <div className="mt-8 bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => handleSaveData("experience")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Add Info
          </button>

          <button
            onClick={() => setShowForm(false)}
            className="border border-zinc-700 px-6 py-3 rounded-lg text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    )}

  </div>
)};