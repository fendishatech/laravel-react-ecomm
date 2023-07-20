import { useState } from "react";
import Dashboard from "../dashboard";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Regisering user");
    console.log({ fullName });
    console.log({ email });
    console.log({ password });
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
