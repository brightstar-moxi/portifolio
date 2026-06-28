"use client";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import FormControls from "../form-controls";

const controls = [
  {
    name: "username",
    placeholder: "Enter User name",
    type: "text",
    label: "Enter User name",
  },
  {
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    label: "Enter Password",
  },
];

export default function Login({ formData, setFormData, handleLogin }) {
//  const [showPassword, setShowPassword] = useState(false);
// const [loading, setLoading] = useState(false);
  return (
    // <div className="w-full">
    //   <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //     <FormControls
    //       controls={controls}
    //       formData={formData}
    //       setFormData={setFormData}
    //     />
    //     <button
    //       onClick={handleLogin}
    //       className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
    //     >
    //       Login
    //     </button>
    //   </div>
    // </div>

<div className="flex flex-1 items-center justify-center p-8">

  <motion.div
    initial={{ opacity: 0, y: 40, scale: .95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: .6 }}
    className="w-full max-w-md bg-zinc-900/70 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-10 shadow-2xl"
  >

    <h2 className="text-4xl font-bold text-white">
      Welcome Back
    </h2>

    <p className="mt-3 text-zinc-400">
      Login to your dashboard
    </p>

    <div className="mt-10">

      <FormControls
        controls={controls}
        formData={formData}
        setFormData={setFormData}
      />

    </div>

    <motion.button
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 35px rgba(249,115,22,.45)",
      }}
      whileTap={{
        scale: .98,
      }}
      onClick={handleLogin}
      className="
        mt-8
        w-full
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-orange-500
        to-orange-600
        text-white
        font-semibold
        text-lg
      "
    >
      Login →
    </motion.button>

  </motion.div>

</div>














//    <div className="min-h-screen bg-[#09090B] flex">

//   {/* Left Side */}
//   <div className="hidden lg:flex relative flex-1 overflow-hidden items-center justify-center">

//     <div className="absolute w-[450px] h-[450px] bg-orange-500/20 blur-[140px] rounded-full" />

//     <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400/10 blur-[120px] rounded-full" />
// <motion.div
//   initial={{ opacity: 0, y: 40, scale: .95 }}
//   animate={{ opacity: 1, y: 0, scale: 1 }}
//   transition={{ duration: .6 }}
//   className="w-full max-w-md bg-zinc-900/70 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-10 shadow-2xl"
// ></motion.div>
//     <div className="relative z-10 max-w-lg">

//       <h1 className="text-6xl font-black text-white leading-tight">
//         Portfolio
//         <br />
//         CMS
//       </h1>

//       <p className="mt-8 text-xl text-zinc-400 leading-9">
//         Manage your portfolio, projects,
//         messages and website content from
//         one beautiful dashboard.
//       </p>

//     </div>

//   </div>

//   {/* Right Side */}
//   <div className="flex flex-1 items-center justify-center p-8">

//   <motion.div
//   initial={{ opacity: 0, y: 40, scale: .95 }}
//   animate={{ opacity: 1, y: 0, scale: 1 }}
//   transition={{ duration: .6 }}
//   className="w-full max-w-md bg-zinc-900/70 backdrop-blur-2xl border border-zinc-800 rounded-3xl p-10 shadow-2xl"
// >
//       <h2 className="text-4xl font-bold text-white">
//         Welcome Back
//       </h2>

//       <p className="mt-3 text-zinc-400">
//         Login to your dashboard.
//       </p>

//       <div className="mt-10 space-y-6">

//         {/* Username */}
//         <div className="relative">

//           <label className="absolute -top-2 left-4 bg-zinc-900 px-2 text-xs text-orange-500">
//             Username
//           </label>

//           <input
//             type="text"
//             placeholder="Enter your username"
//             className="w-full bg-[#111] border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all"
//           />

//         </div>

//         {/* Password */}
//         <div className="relative">

//   <label className="absolute -top-2 left-4 bg-zinc-900 px-2 text-xs text-orange-500">
//     Password
//   </label>

//   <input
//     type={showPassword ? "text" : "password"}
//     placeholder="Enter your password"
//     className="w-full bg-[#111] border border-zinc-700 rounded-2xl px-5 py-4 pr-14 text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20"
//   />

//   <button
//     type="button"
//     onClick={() => setShowPassword(!showPassword)}
//     className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-orange-500"
//   >
//     {showPassword ? <FiEyeOff /> : <FiEye />}
//   </button>

// </div>

//         {/* Remember Me */}
//         <div className="flex items-center justify-between">

//           <label className="flex items-center gap-3 text-zinc-400 text-sm">

//             <input
//               type="checkbox"
//               className="accent-orange-500"
//             />

//             Remember me

//           </label>

//           <button
//             type="button"
//             className="text-orange-500 hover:text-orange-400 text-sm"
//           >
//             Forgot Password?
//           </button>

//         </div>

//         {/* Login Button */}
//         <motion.button
//           whileHover={{
//             scale: 1.03,
//             boxShadow: "0 0 35px rgba(249,115,22,.45)",
//           }}
//           whileTap={{
//             scale: .98,
//           }}
//           type="submit"
//           className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg"
//         >
//         <motion.button
//   onClick={handleLogin}
//   disabled={loading}
// >
//   {loading ? "Logging in..." : "Login →"}
// </motion.button>
//         </motion.button>

//       </div>

//     </motion.div>

//   </div>

// </div>
   );
 }