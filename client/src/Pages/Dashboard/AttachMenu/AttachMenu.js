import React from "react";
import { toast } from "react-toastify";

const AttachMenu = ({ onImageSelect, onClose }) => {
  // BEFORE UPDATE
  const handleUpdateLinks = () => {
    toast.info("🚧 This feature will be available in the next update.");
  };

  return (
    <div className="absolute bottom-12 left-4 md:left-[343px] bg-white shadow-lg rounded-lg p-3 space-y-2 z-50">
      <label className="cursor-pointer block hover:bg-gray-100 p-2 rounded">
        📷 Send Photos
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              onImageSelect(file);
            }
            onClose();
          }}
        />
      </label>
      <div
        className="cursor-pointer hover:bg-gray-100 p-2 rounded"
        onClick={handleUpdateLinks}
      >
        📄 Document
      </div>
      <div
        className="cursor-pointer hover:bg-gray-100 p-2 rounded"
        onClick={handleUpdateLinks}
      >
        👤 Contact
      </div>
      <div
        className="cursor-pointer hover:bg-gray-100 p-2 rounded"
        onClick={handleUpdateLinks}
      >
        📊 Poll
      </div>
      <div
        className="cursor-pointer hover:bg-gray-100 p-2 rounded"
        onClick={handleUpdateLinks}
      >
        ✍️ Drawing
      </div>
    </div>
  );
};

export default AttachMenu;
