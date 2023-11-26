'use client'

// export default function FormControl(controls = [], formData, setFormData) {

//     // return controls.map((controlItem) => (<div key={controlItem.name} className="mb-4">
//     //     <label className="block text-gray-700 text-sm font-bold mb-2">{controlItem.label}</label>
//     //     <input
//     //         placeholder={controlItem.placeholder}
//     //         type={controlItem.type}
//     //         name={controlItem.name}
//     //         id={controlItem.name}
//     //         value={formData[controlItem.name]}
//     //         onChange={(e) => {
//     //             setFormData({
//     //                 ...formData,
//     //                 [controlItem.name]: e.target.value
//     //             })
//     //         }}
//     //         className="shadow border rounded-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
//     //     />
//     // </div>))
// return controls.map(({ label, placeholder, type, name }) => (
//     <div key={name} className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
//       <input
//         placeholder={placeholder}
//         type={type}
//         name={name}
//         id={name}
//         value={formData[name]}
//         onChange={(e) => {
//           setFormData({
//             ...formData,
//             [name]: e.target.value
//           });
//         }}
//         className="shadow border rounded-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
//       />
//     </div>
//   ));
// }
// Import necessary modules
// import { useState } from 'react';
// const [formData, setFormData] = useState({});


export default function FormControls({ controls, formData, setFormData }) {
  return (
    <>
      {controls.map((controlItem) => (
        <div key={controlItem.name} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {controlItem.label}
          </label>
          <input
            placeholder={controlItem.placeholder}
            type={controlItem.type}
            name={controlItem.name}
            id={controlItem.name}
            value={formData[controlItem.name] || ''}
            onChange={(e) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                [controlItem.name]: e.target.value,
              }));
            }}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
          />
        </div>
      ))}
    </>
  );
}
