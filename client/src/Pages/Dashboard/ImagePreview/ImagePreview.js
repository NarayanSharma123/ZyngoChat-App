import React, { useState } from "react";
import { Send, Delete, Add, InsertEmoticon } from "@mui/icons-material";
import EmojiPicker from "../Emoji/EmojiPicker";

const ImagePreview = ({ imageFile, onSend, onCancel }) => {
  const [caption, setCaption] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const previewUrl = URL.createObjectURL(imageFile);

  const handleEmojiSelect = (emoji) => {
    setCaption((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-2 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-end gap-3 px-3 sm:px-4 py-2 bg-[#ededed]">
          <button
            className="text-gray-700 hover:text-red-600"
            onClick={onCancel}
            aria-label="Discard"
          >
            <Delete />
          </button>
        </div>

        {/* Image */}
        <div className="bg-black flex items-center justify-center">
          <img
            src={previewUrl}
            alt="preview"
            className="w-full max-h-[60vh] sm:max-h-[70vh] object-contain"
          />
        </div>

        {/* Caption Bar */}
        <div className="bg-[#f0f2f5] px-3 sm:px-4 py-3">
          <div className="flex items-center gap-2 bg-white rounded-full border border-gray-200 px-3 py-2">
            <InsertEmoticon
              className="text-gray-600 cursor-pointer"
              fontSize="small"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
            {showEmojiPicker && <EmojiPicker onSelect={handleEmojiSelect} />}
            <input
              type="text"
              placeholder="Caption (optional)"
              className="flex-1 bg-transparent outline-none text-[14px] sm:text-[15px]"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>

          {/* Send Button */}
          <div className="mt-3 flex items-center justify-end">
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white flex items-center justify-center shadow-md"
              onClick={() => {
                onSend(imageFile, caption);
                onCancel();
              }}
              aria-label="Send"
            >
              <Send fontSize="small" className="sm:text-base" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
