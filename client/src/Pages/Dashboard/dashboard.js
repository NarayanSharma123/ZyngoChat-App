import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SocketContext from "../../Context/SocketContext";
import EmojiPicker from "./Emoji/EmojiPicker";
import axios from "axios";
import {
  FaPhoneAlt,
  FaVideo,
  FaSmile,
  FaPaperclip,
  FaPaperPlane,
  FaMicrophone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Dashboard = () => {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  const [inputText, setInputText] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar open/close state

  // SOCKET JOIN & LISTEN
  useEffect(() => {
    if (socket && loggedInUser?._id) {
      socket.emit("join", loggedInUser._id);
      socket.on("receive_message", (data) => {
        setMessages((prev) => [
          ...prev,
          {
            ...data,
            fromSelf: false,
          },
        ]);
      });
    }
    return () => {
      if (socket) {
        socket.off("receive_message");
      }
    };
  }, [socket, loggedInUser?._id]);

  // FETCH LOGGED IN USER
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;
      try {
        const res = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLoggedInUser(res.data);
      } catch (err) {
        console.error("Error fetching profile", err);
      }
    };
    fetchUser();
  }, []);

  // FETCH CONTACTS FROM SERVER
  useEffect(() => {
    const fetchContacts = async () => {
      if (!loggedInUser?._id) return;
      const token = localStorage.getItem("accessToken");
      try {
        const res = await axios.get(
          `http://localhost:5000/chat/contacts/${loggedInUser._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setContacts(res.data.contacts);
      } catch (err) {
        console.error("Error fetching contacts", err);
      }
    };
    fetchContacts();
  }, [loggedInUser]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!loggedInUser || !selectedContact) return;
      try {
        const res = await axios.get(
          `http://localhost:5000/chat/messages/${loggedInUser._id}/${selectedContact._id}`
        );
        setMessages(res.data.messages);
      } catch (err) {
        console.error("Error fetching messages", err);
      }
    };
    fetchMessages();
  }, [selectedContact]);

  const handleSendMessage = () => {
    if (inputText.trim() === "" || !selectedContact) return;
    const messageData = {
      senderId: loggedInUser._id,
      receiverId: selectedContact._id,
      message: inputText,
    };
    socket.emit("send_message", messageData);
    setMessages((prev) => [
      ...prev,
      {
        ...messageData,
        timestamp: new Date(),
        fromSelf: true,
      },
    ]);
    setInputText("");
  };

  const handleEmojiSelect = (emoji) => {
    setInputText((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  };

  return (
    <div className="w-full h-screen flex overflow-hidden shadow">
      {/* HAMBURGER ICON - only on mobile & only when sidebar is closed */}
      <div className="absolute top-4 left-4 z-50 md:hidden">
        {!isSidebarOpen && (
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          />
        )}
      </div>

      {/* LEFT SIDEBAR */}
      <div
        className={`fixed md:static top-0 left-0 h-screen bg-secondary overflow-y-auto transform transition-transform duration-300 z-40 
        w-[75%] sm:w-[50%] md:w-[25%] 
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Close Icon - only mobile & only when sidebar is open */}
        {isSidebarOpen && (
          <div className="md:hidden flex justify-end p-3">
            <FaTimes
              className="text-xl cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
        )}

        <div className="flex items-center p-2 shadow-lg">
          <Avatar
            alt={loggedInUser?.firstName}
            src={loggedInUser?.profileImage}
          />
          <div className="ml-3">
            <h3>{`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}</h3>
            <p className="text-gray-400">My Account</p>
          </div>
          <div className="ml-auto relative">
            <MoreHorizIcon
              className="cursor-pointer"
              onClick={() => setShowOptions(!showOptions)}
            />
            {showOptions && (
              <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md border w-40 z-50">
                <div
                  className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-sm"
                  onClick={() => {
                    navigate("/app/settings");
                    setShowOptions(false);
                  }}
                >
                  Settings
                </div>
              </div>
            )}
          </div>
        </div>
        <hr />
        <div>
          {contacts.map((contact) => (
            <div
              key={contact._id}
              className="flex items-center gap-2 p-2 border-b cursor-pointer"
              onClick={() => {
                setSelectedContact(contact);
                setMessages([]);
                setIsSidebarOpen(false); // Close sidebar after selecting contact (mobile)
              }}
            >
              <Avatar src={contact.profileImage} alt={contact.firstName} />
              <div>
                <h3>{contact.firstName}</h3>
                <p className="text-[#aaaaaa]">Chat</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CENTER CHAT AREA */}
      <div className="flex flex-col h-screen w-full md:w-[50%]">
        {/* Header */}
        <div className="bg-light_Purple h-[60px] flex items-center justify-between p-2">
          <div className="flex items-center">
            <Avatar
              src={selectedContact?.profileImage}
              alt={selectedContact?.firstName}
            />
            <div className="ml-2">
              <h3>{selectedContact?.firstName || "Select a contact"}</h3>
            </div>
          </div>
          <div className="flex">
            <FaPhoneAlt className="mx-2 cursor-pointer" />
            <FaVideo className="mx-2 cursor-pointer" />
          </div>
        </div>
        {/* Chat messages */}
        <div className="flex-1 p-3 overflow-y-auto space-y-2 flex flex-col">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.fromSelf ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[60%] px-4 py-2 rounded-lg text-sm ${
                  msg.fromSelf
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-black rounded-bl-none"
                }`}
              >
                <p>{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-t border-gray-200" />
        {/* Message input area */}
        <div className="flex items-center px-4 py-2 bg-white border-t">
          <div className="flex items-center space-x-3 mr-3">
            <FaSmile
              className="cursor-pointer"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
            {showEmojiPicker && <EmojiPicker onSelect={handleEmojiSelect} />}
            <FaPaperclip className="cursor-pointer" />
          </div>
          <input
            type="text"
            placeholder="Type a message"
            className="flex-grow border-none outline-none bg-gray-100 rounded-full px-4 py-2 text-sm"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="ml-3">
            {inputText.length === 0 ? (
              <FaMicrophone className="cursor-pointer" />
            ) : (
              <FaPaperPlane
                className="cursor-pointer transform rotate-45"
                onClick={handleSendMessage}
              />
            )}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - hidden on mobile */}
      <div className="hidden md:block w-[25%] h-screen bg-light_Blue"></div>
    </div>
  );
};

export default Dashboard;
