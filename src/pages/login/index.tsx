import { Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserInfo } from "../../store/useUserInfo";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUserInfo } = useUserInfo();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const loginUrl = "https://lapshop-be.onrender.com/api/auth/login";
    await axios
      .post(loginUrl, {
        // username: username,
        // password: password
        username,
        password,
      })
      .then(function (response) {
        console.log("thanh cong", response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setUserInfo(response.data.user);
        navigate("/");
        toast.success("Đăng nhập thành công!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(function (error) {
        console.log("that bai");
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-md border">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <Input
              placeholder="Tên đăng nhập hoặc email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <Input.Password
              placeholder="Mật khẩu"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
