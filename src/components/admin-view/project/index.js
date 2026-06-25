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
];

export default function AdminProjectView({
  formData,
  setFormData,
  handleSaveData,
  data,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="md:w-4/5 mx-auto">
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">

        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />

        <button
          onClick={() => handleSaveData("project")}
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Save Project
        </button>

     <DataTable
  data={data}
  columns={[
    "name",
    "technologies",
    "website",
    "github",
  ]}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
      </div>
    </div>
  );
}