import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Welcome from "./Pages/Welcome/Welcome";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import Dashboard from "./Pages/Dashboard/dashboard";
import Settings from "./Pages/Settings/Settings";
import HelpCenter from "./Pages/Settings/HelpSupport/HelpCenter/HelpCenter";
import License from "./Pages/Settings/HelpSupport/Licenses/Licenses";
import PrivacyPolicy from "./Pages/Settings/HelpSupport/Secure/PrivacyPolicy";
import Terms from "./Pages/Settings/HelpSupport/Secure/Terms";
import { Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import SocketContext from "./Context/SocketContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const socketRef = useRef(null);
  const [isSocketReady, setIsSocketReady] = useState(false);

  useEffect(() => {
    socketRef.current = io("http://localhost:5000", {
      transports: ["websocket"],
      withCredentials: true,
    });
    socketRef.current.on("connect", () => {
      setIsSocketReady(true);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  if (!isSocketReady) return <div>Connecting to socket...</div>;

  return (
    <SocketContext.Provider value={socketRef.current}>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
        <Route path="/app/settings" element={<Settings />} />
        <Route path="/app/help" element={<HelpCenter />} />
        <Route path="/app/licenses" element={<License />} />
        <Route path="/app/privacy" element={<PrivacyPolicy />} />
        <Route path="/app/terms" element={<Terms />} />
      </Routes>
    </SocketContext.Provider>
  );
};

export default App;
