import React, { useState } from "react";

import Account from "./Account/Account";
import AppInfo from "./AppInfo/AppInfo";
import HelpSupport from "./HelpSupport/HelpSupport";
import Notifications from "./Notifications/Notifications";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Account");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const settingsOptions = [
    { icon: <AccountCircleIcon />, title: "Account" },
    { icon: <NotificationsIcon />, title: "Notifications" },
    { icon: <InfoIcon />, title: "App Info" },
    { icon: <HelpOutlineIcon />, title: "Help & Support" },
  ];

  const renderContent = () => {
    if (activeTab === "Account") {
      return <Account />;
    } else if (activeTab === "Notifications") {
      return <Notifications />;
    } else if (activeTab === "App Info") {
      return <AppInfo />;
    } else if (activeTab === "Help & Support") {
      return <HelpSupport />;
    } else {
      return <div>Select an option</div>;
    }
  };

  return (
    <div className="w-full h-screen flex relative">
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden absolute top-2 left-2 z-20 bg-gray-200 p-2 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Left Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-100 pl-2 pt-4 border-r overflow-y-auto transition-transform duration-300 z-10
          w-[70%] sm:w-[50%] md:w-[20%]
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
      >
        {settingsOptions.map((option, index) => (
          <div
            key={index}
            className={`w-full h-[40px] mb-2 pl-3 flex items-center cursor-pointer transition-all duration-200 ${
              activeTab === option.title
                ? "border-l-4 border-l-primary bg-white"
                : "hover:border-l-4 hover:border-l-primary"
            }`}
            onClick={() => {
              setActiveTab(option.title);
              setSidebarOpen(false); // mobile me click ke baad sidebar band ho jaye
            }}
          >
            <span className="mr-2">{option.icon}</span>
            <span>{option.title}</span>
          </div>
        ))}
      </div>

      {/* Right Content */}
      <div
        className={`w-full md:ml-[20%] p-6 overflow-y-auto h-screen transition-all duration-300`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Settings;
