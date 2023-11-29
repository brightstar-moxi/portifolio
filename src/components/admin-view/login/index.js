'use client'

import FormControls from "../form-controls"

const controls = [
    {
        name: 'username',
        placeholder: 'Enter user name',
        type: "text",
        label: "Enter user name"
    },
    {
        name: 'password',
        placeholder: 'Enter password',
        type: "password",
        label: "Enter password"
    },
]

export default function Login({ formData, setFormData,handleSaveData }){

    return(
        <div className="md:w-3/5 mx-auto">
        <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <FormControls
                controls={controls}
                formData={formData}
                setFormData={setFormData}
            />
            <button onClick={()=> handleSaveData("home")} className=" mt-[10px] border border-green-600 p-4 font-bold  text-{16px}">Add Info</button>
        </div>
    </div>
    )
}