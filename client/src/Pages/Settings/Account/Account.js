import React, { useState, useEffect, useContext } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SocketContext from "../../../Context/SocketContext";

import { toast } from "react-toastify";
import axios from "axios";

const Account = () => {
  const socket = useContext(SocketContext);

  const [preview, setPreview] = useState("");
  const [editingField, setEditingField] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("I am using ZyngoChat");
  const [phone, setPhone] = useState("");

  const fetchSignupData = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await axios.get("http://localhost:5000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      const profileImage =
        res.data?.profileImage ||
        "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png";

      setPreview(profileImage);
      setFirstName(res.data?.firstName || "");
      setLastName(res.data?.lastName || "");
      setEmail(res.data?.email || "");
      setAbout(res.data?.about || "I am using ZyngoChat");
      setPhone(res.data?.phone || "");
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
      setPreview(
        "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
      );
    }
  };

  useEffect(() => {
    fetchSignupData();
  }, []);

  const handleImageChange = async (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setPreview(URL.createObjectURL(selected));

      const formData = new FormData();
      formData.append("profileImage", selected);

      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.put(
          "http://localhost:5000/api/update-profile-image",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );

        setPreview(res.data.user.profileImage); // naya Cloudinary URL
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            error.message ||
            "Image update failed"
        );
      }
    }
  };

  const handleSave = async (field, value) => {
    try {
      const token = localStorage.getItem("accessToken");
      const body = { [field]: value };

      await axios.put("http://localhost:5000/api/update-profile", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      setEditingField(null);
      fetchSignupData(); // update UI after save
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Update failed"
      );
    }
  };

  // logout
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/logout",
        {},
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("accessToken");

      if (socket && socket.connected) {
        socket.disconnect();
      }

      toast.success("Logout successfully");
      setTimeout(() => {
        window.location.href = "/user/login";
      }, 2500);
    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message || "Logout failed"
      );
    }
  };

  return (
    <div className="flex my-8 flex-col md:flex-row items-center md:items-start">
      {/* Profile Image */}
      <div className="mb-6 md:mb-0 md:mr-6">
        <label htmlFor="imageInput" className="relative cursor-pointer">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
            <img
              src={preview}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-black bg-opacity-60 rounded-full p-1 text-white text-sm">
            📷
          </div>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </label>
      </div>

      {/* Info Section */}
      <div className="w-full space-y-3">
        {/* Name */}
        <div className="flex items-center border rounded-lg p-2 justify-between">
          {editingField === "name" ? (
            <div className="flex w-full items-center">
              <input
                className="w-full pl-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={`${firstName} ${lastName}`.trim()}
                onChange={(e) => {
                  const [first, ...last] = e.target.value.split(" ");
                  setFirstName(first);
                  setLastName(last.join(" "));
                }}
                autoFocus
              />
              <button
                type="button"
                onClick={() => {
                  handleSave("firstName", firstName);
                  handleSave("lastName", lastName);
                }}
                className="ml-2 px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-medium">{firstName}</h2>
              <EditOutlinedIcon
                onClick={() => setEditingField("name")}
                className="cursor-pointer text-gray-500 hover:text-gray-700"
              />
            </>
          )}
        </div>

        {/* Email */}
        <div className="flex items-center border rounded-lg p-2 justify-between">
          <h2 className="font-medium">{email}</h2>
        </div>

        {/* About */}
        <div className="flex items-center border rounded-lg p-2 justify-between">
          {editingField === "about" ? (
            <div className="flex w-full items-center flex-wrap gap-2 break-words">
              <textarea
                className="flex-1 pl-3 break-all border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                onClick={() => handleSave("about", about)}
                className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-600">{about}</p>
              <EditOutlinedIcon
                onClick={() => setEditingField("about")}
                className="cursor-pointer text-gray-500 hover:text-gray-700"
              />
            </>
          )}
        </div>

        {/* Phone */}
        <div className="flex items-center border rounded-lg p-2 justify-between">
          {editingField === "phone" ? (
            <div className="flex w-full items-center">
              <input
                type="number"
                className="w-full pl-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                onClick={() => handleSave("phone", phone)}
                className="ml-2 px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <span className="text-gray-700">{phone}</span>
              {!phone && (
                <EditOutlinedIcon
                  onClick={() => setEditingField("phone")}
                  className="cursor-pointer text-gray-500 hover:text-gray-700"
                />
              )}
            </>
          )}
        </div>

        <hr className="my-6" />

        {/* Logout */}
        <div className="my-6">
          <button
            type="button"
            className="text-red-600 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 transition"
            onClick={handleLogout}
          >
            Log out
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Chat history on this device will be cleared when you logout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
