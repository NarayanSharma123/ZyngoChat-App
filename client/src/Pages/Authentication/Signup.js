import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalImage =
      preview ||
      "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png";

    // console.log({ ...formData, profileImage: finalImage });
    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("password", formData.password);
    if (file) {
      form.append("profileImage", file);
    } else {
      form.append("profileImage", finalImage); // default image URL bhej do
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        form
      );
      navigate("/user/login");
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <div className="flex justify-center">
          <label htmlFor="imageInput" className="relative cursor-pointer">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src={
                  preview ||
                  "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png"
                }
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

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl"
          >
            {showPass ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          type="submit"
          onClick={() => navigate("/user/login")}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Sign Up
        </button>

        <div className="text-center text-sm">
          I have an account{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/user/login")}
          >
            login
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
