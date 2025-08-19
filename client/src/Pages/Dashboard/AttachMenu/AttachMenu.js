import React from "react";

const AttachMenu = ({ onImageSelect, onClose }) => {
  return (
    <div className="absolute bottom-12 left-4 md:left-[343px] bg-white shadow-lg rounded-lg p-3 space-y-2 z-50">
      <label className="cursor-pointer block hover:bg-gray-100 p-2 rounded">
        📷 Photos & Videos
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
      <div className="cursor-pointer hover:bg-gray-100 p-2 rounded">
        📄 Document
      </div>
      <div className="cursor-pointer hover:bg-gray-100 p-2 rounded">
        👤 Contact
      </div>
      <div className="cursor-pointer hover:bg-gray-100 p-2 rounded">
        📊 Poll
      </div>
      <div className="cursor-pointer hover:bg-gray-100 p-2 rounded">
        ✍️ Drawing
      </div>
    </div>
  );
};

export default AttachMenu;
