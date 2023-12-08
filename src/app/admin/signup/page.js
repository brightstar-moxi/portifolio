"use client"

import { registerNewUser } from '@/services/signup';
import { useState } from 'react';
// import { useRouter } from 'next/router';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
   
    password: '',
  });
 
//   const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(value);
  };

  async function handleSubmit (e) {
    e.preventDefault();
    // Implement registration logic here (e.g., send data to a backend API)
    
    const data = await registerNewUser(formData);
  //  if (data.success){
  //   setIsRegistered(true);
  //   setFormData(initialFormData);
  //  }else{
   
  //   setFormData(initialFormData);
  //  }
    // For demonstration purposes, navigate to the home page after registration
   
  

    
   

    console.log(data);
  
    // router.push('/');
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow border rounded w-50 py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
          />
        </label>
        <br />
       
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow border rounded w-50
             py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
          />
        </label>
        <br />
        <button type="submit" className=" mt-[10px] border border-green-600 p-4 font-bold  text-{16px}">Register</button>
      </form>
    </div>
  );
};

export default Register;
