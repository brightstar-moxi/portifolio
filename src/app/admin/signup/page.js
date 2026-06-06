"use client"

// import { registerNewUser } from '@/services/signup';
import { useState } from 'react';
// import { useRouter } from 'next/router';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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

  async function handleSubmit(e) {
    e.preventDefault();
    // Implement registration logic here (e.g., send data to a backend API)

    // const data = await registerNewUser(formData);
    const signup = useMutation(api.user.signup);
    //  if (data.success){
    //   setIsRegistered(true);
    //   setFormData(initialFormData);
    //  }else{

    //   setFormData(initialFormData);
    //  }
    // For demonstration purposes, navigate to the home page after registration






    console.log(signup);

    // router.push('/');
  };

  // return (
  //   <div>
  //     <h1>Registration</h1>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Username:
  //         <input
  //           type="text"
  //           name="username"
  //           value={formData.username}
  //           onChange={handleChange}

  //           className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
  //         />
  //       </label>
  //       <br />

  //       <label>
  //         Password:
  //         <input
  //           type="password"
  //           name="password"
  //           value={formData.password}
  //           onChange={handleChange}
  //           className="shadow border rounded w-full
  //            py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
  //         />
  //       </label>
  //       <br />
  //       <button type="submit" 
  //       className=" mt-[10px] border border-green-600 p-4 font-bold  text-[16px]">Register</button>
  //     </form>
  //   </div>
  // );

  return (
  <div className="min-h-screen bg-black text-white p-10">
    <h1 className="text-3xl mb-6">Registration</h1>

    <form className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        placeholder="Username"
        className="border border-orange-500 bg-black text-white p-3"
      />

      <input
        type="password"
        placeholder="Password"
        className="border border-orange-500 bg-black text-white p-3"
      />

      <button
        type="submit"
        className="bg-orange-500 p-3 text-white"
      >
        Register
      </button>
    </form>
  </div>
);
};

export default Register;
