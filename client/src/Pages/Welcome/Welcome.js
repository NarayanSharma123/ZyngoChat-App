import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h2 className="text-2xl">Welcome to ZyngoChat</h2>
        <p className="my-3 text-[#888888]">
          A simple, reliable and private way to use ZyngoChat on your device
        </p>
      </div>
      <div>
        <button
          className="w-[200px] p-1 rounded  my-5 bg-primary text-white"
          onClick={() => navigate("/user/signup")}
        >
          Get Started
        </button>
      </div>
      <div>
        <p className="text-[#aaaaaa]">Version: 1.0.0.0</p>
      </div>
    </div>
  );
};

export default Welcome;
