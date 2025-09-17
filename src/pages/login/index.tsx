import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-md border">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
          <div className="text-center text-gray-600 mt-4">
            <label>Or login with</label>
          </div>
          <div className="flex gap-4 mt-4 justify-center ">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 ">
              <i className="fab fa-google text-red-500"></i>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 ">
              <i className="fab fa-facebook text-blue-500"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
