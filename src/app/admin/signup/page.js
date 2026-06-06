"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function Register() {
  const signup = useMutation(api.user.signup);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signup({
        username: formData.username,
        password: formData.password,
      });

      setMessage("User registered successfully");

      setFormData({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Registration failed");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6">Registration</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md"
      >
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="border border-orange-500 bg-black text-white p-3 rounded"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border border-orange-500 bg-black text-white p-3 rounded"
        />

        <button
          type="submit"
          className="bg-orange-500 p-3 rounded font-semibold"
        >
          Register
        </button>

        {message && (
          <p className="text-green-400">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}