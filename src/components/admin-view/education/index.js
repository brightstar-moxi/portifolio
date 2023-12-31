'use client'
import FormControls from "../form-controls";


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

export default function AdminEducationView({ formData, setFormData, handleSaveData, data }){
    console.log(formData);
    return (
        <div className="md:w-3/5 mx-auto">
            <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-10">
                {
                  data && data.length ?
                  data.map((item)=> <div className="flex flex-col gap-4 border p-4 border-green-600 ">
                    <p className="text-[#000]">{item.degree}</p>
                    <p className="text-[#000]">{item.year}</p>
                    <p className="text-[#000]">{item.college}</p>
                    
                  
                  </div>)
                  :null
                }
              </div>
                <FormControls
                    controls={controls}
                    formData={formData}
                    setFormData={setFormData}
                />
                <button onClick={()=> handleSaveData('education')} className=" mt-[10px] border border-green-600 p-4 font-bold  text-{16px}">Add Info</button>
            </div>
        </div>
    )
}