// 'use client'

// import FormControls from "../form-controls";

// const controls = [
//     {
//       name: "name",
//       placeholder: "Project Name",
//       type: "text",
//       label: "Project Name",
//     },
//     {
//       name: "technologies",
//       placeholder: "Enter Technologies",
//       type: "text",
//       label: "Enter Technologies",
//     },
//     {
//       name: "website",
//       placeholder: "Website",
//       type: "text",
//       label: "Website",
//     },
//     {
//       name: "github",
//       placeholder: "Github",
//       type: "text",
//       label: "github",
//     },
//   ];
  

// export default function AdminProjectView({ formData, setFormData, handleSaveData, data }){
//     return (
//         <div className="md:w-3/5 mx-auto">
//         <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-10">
//                 {
//                   data && data.length ?
//                   data.map((item)=> <div className="flex flex-col gap-4 border p-4 border-green-600">
//                     <p className="text-[#000]">{item.name}</p>
//                     <p className="text-[#000]">{item.technologies}</p>
//                     <p className="text-[#000]">{item.website}</p>
//                     <p className="text-[#000]">{item.github}</p>
                   
//                   </div>)
//                   :null
//                 }
//               </div>
//             <FormControls
//                 controls={controls}
//                 formData={formData}
//                 setFormData={setFormData}
//             />
//             <button onClick={()=> handleSaveData("project")} className=" mt-[10px] border border-green-600 p-4 font-bold  text-{16px}">Add Info</button>
//         </div>
//     </div>
//     )
// }
"use client";
import { useState } from "react";
import FormControls from "../form-controls";
import DataTable from "../data-table";

const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Enter Technologies",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "Github",
  },
  {
  name: "image",
  placeholder: "Project Image URL",
  type: "text",
  label: "Project Image",
}
];

export default function AdminProjectView({
  formData,
  setFormData,
  handleSaveData,
  data,
  handleEdit,
  handleDelete,
}) {
   const [showForm, setShowForm] = useState(false);
  return (
   <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
<div className="flex items-center justify-between mb-6">
  <div>
    <h2 className="text-2xl font-bold text-white">
      Projects
    </h2>

    <p className="text-zinc-500 text-sm">
      Projects &gt; All Projects
    </p>
  </div>

  <button
    onClick={() => setShowForm(true)}
    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg"
  >
    + Add New
  </button>
</div>
      {showForm && (
  <div className="mt-8 bg-zinc-950 border border-zinc-800 rounded-2xl p-6">

    <FormControls
      controls={controls}
      formData={formData}
      setFormData={setFormData}
    />

    <div className="flex flex-col sm:flex-row gap-3 mt-4">

      <button
        onClick={() => handleSaveData("project")}
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
<div className="space-y-4">
  {data?.map((item) => (
    <div
      key={item._id}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">

        {/* Thumbnail */}
       <img
  src={item.image ||"./placeholder.png"}
  alt={item.name}
  className="w-16 h-16 rounded-lg object-cover"
/>
        {/* Details */}
      <div className="mt-8">
          <h3 className="text-white font-semibold">
            {item.name}
          </h3>

          <p className="text-zinc-400 text-sm">
            {item.technologies}
          </p>
        </div>

      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={() => {
            handleEdit(item);
            setShowForm(true);
          }}
          className="text-white hover:text-orange-500"
        >
          ✏️
        </button>

        <button
          onClick={() => handleDelete(item._id)}
          className="text-orange-500 hover:text-red-500"
        >
          🗑️
        </button>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}