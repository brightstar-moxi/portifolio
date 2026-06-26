'use client'
import { useState } from "react";


import FormControls from "../form-controls";
import DataTable from "../data-table";

const controls = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
]

export default function AdminEducationView({ formData, setFormData, handleSaveData, data, handleEdit,
  handleDelete, }) {
  console.log(formData);
  const [showForm, setShowForm] = useState(false);
  return (
<div className="w-full max-w-5xl mx-auto px-4">
       <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex items-center justify-between mb-6">
  <div>
    <h2 className="text-2xl font-bold text-white">
      Education
    </h2>

    <p className="text-zinc-500 text-sm">
      Education &gt; All Education
    </p>
  </div>

  <button
    onClick={() => setShowForm(true)}
    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg"
  >
    + Add New
  </button>
</div>



      {/* <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {
            data && data.length ?
              data.map((item) => <div className="flex flex-col gap-4 border p-4 border-green-600 text-orange-100">
                <p className="text-[#000]">{item.degree}</p>
                <p className="text-[#000]">{item.year}</p>
                <p className="text-[#000]">{item.college}</p>


              </div>)
              : null
          }
        </div> */}


        <div className="space-y-4">
  {data?.map((item) => (
    <div
      key={item._id}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex justify-between items-center"
    >
      <div>
        <h3 className="text-white font-semibold text-lg">
          {item.degree}
        </h3>

       <p className="text-zinc-400">
  {item.college}
</p>
        <p className="text-zinc-500 text-sm">
          {item.year}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button
          onClick={() => {
            handleEdit(item);
            setShowForm(true);
          }}
          className="text-white hover:text-orange-500 transition"
        >
          ✏️
        </button>

        <button
          onClick={() => handleDelete(item._id)}
          className="text-orange-500 hover:text-red-500 transition"
        >
          🗑️
        </button>
      </div>
    </div>
  ))}
</div>

      {showForm && (
  <div className="mt-8 bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
    <FormControls
      controls={controls}
      formData={formData}
      setFormData={setFormData}
    />

    <div className="flex gap-3 mt-4">
      <button
        onClick={() => handleSaveData("education")}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
      >
        Save
      </button>

      <button
        onClick={() => setShowForm(false)}
        className="border border-zinc-700 text-white px-6 py-3 rounded-lg"
      >
        Cancel
      </button>
    </div>
  </div>
)}
        {/* <DataTable
          data={data}
          columns={[
            "degree",
            "year",
            "college",
          ]}
          onEdit={handleEdit}
          onDelete={handleDelete}
        /> */}
      </div>
    </div>
  )
}