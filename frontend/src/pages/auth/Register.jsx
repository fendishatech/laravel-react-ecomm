import { useState } from "react";
import Dashboard from "../dashboard";
import axios from "axios";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      name: fullName,
      email,
      password,
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/api/register",
        userData
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dashboard>
      <div className="py-8 w-full bg-slate-100 flex items-center justify-center">
        <form
          onSubmit={handleRegister}
          className="p-6 h-[400px] flex flex-col justify-center gap-y-2 bg-white"
        >
          <h2 className="my-4 text-center text-2xl font-bold">Register</h2>

          <label className="text-sm text-gray-700" htmlFor="name">
            Full name
          </label>
          <input
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            className="px-4 py-2 bg-slate-100 focus:outline rounded"
            type="text"
            placeholder="Full Name"
          />

          <label className="text-sm text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="px-4 py-2 bg-slate-100 focus:outline rounded"
            type="email"
            placeholder="Email"
          />

          <label className="text-sm text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="px-4 py-2 rounded bg-slate-100 focus:outline"
            type="password"
            placeholder="Password"
          />
          <input
            className="mt-4 px-4 py-2 bg-red-400 hover:bg-red-500 text-white font-semibold text-2xl rounded cursor-pointer"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </Dashboard>
  );
};

export default Register;
