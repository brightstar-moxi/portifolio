'use client'
import FormControls from "../form-controls";


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
export default function AdminExperienceView({ formData, setFormData, handleSaveData, data }){
    console.log(formData);
    return (
        <div className="md:w-3/5 mx-auto">
            <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-10">
                {
                  data && data.length ?
                  data.map((item)=> <div className="flex flex-col gap-4 border p-4 border-green-600">
                    <p className="text-[#000]">{item.position}</p>
                    <p className="text-[#000]">{item.company}</p>
                    <p className="text-[#000]">{item.duration}</p>
                    <p className="text-[#000]">{item.location}</p>
                    <p className="text-[#000]">{item.jobprofile}</p>
                  
                  </div>)
                  :null
                }
              </div>
                <FormControls
                    controls={controls}
                    formData={formData}
                    setFormData={setFormData}
                />
                <button onClick={()=> handleSaveData("experience")} className=" mt-[10px] border border-green-600 p-4 font-bold  text-{16px}">Add Info</button>
            </div>
        </div>
    )
}