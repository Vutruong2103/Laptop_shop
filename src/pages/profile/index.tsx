// src/pages/Profile.tsx
import profile from "../../assets/imgs/profile.png";
import { useState } from "react";

const Profile = () => {
  const [name] = useState("Trương Quang Vũ");
  const [email] = useState("vutq.greenglobal@gmail.com");
  const [phone] = useState("0865204001");
  const [address] = useState("Bình Quý, Đà Nẵng");
  const [bio] = useState("Trùm cope chat");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src={profile}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow"
          />
          <h2 className="mt-4 text-2xl font-bold">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">📱 Số điện thoại:</span> {phone}
          </p>
          <p>
            <span className="font-semibold">🏠 Địa chỉ:</span> {address}
          </p>
          <p>
            <span className="font-semibold">📝 Giới thiệu:</span> {bio}
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
