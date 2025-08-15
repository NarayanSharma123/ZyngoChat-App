import React from "react";
import Picker from "@emoji-mart/react"; // v5 import
import data from "@emoji-mart/data"; // emoji data

const EmojiPicker = ({ onSelect }) => {
  return (
    <div
      className="
        absolute
        z-10
        bottom-[60px]
        left-5
        sm:bottom-[70px] sm:left-10
        md:bottom-[80px] md:left-[calc(25%+20px)]
        lg:bottom-[90px] lg:left-[calc(25%+24px)]
        max-w-[90vw]
        md:max-w-[calc(75%-40px)]
        overflow-x-hidden
      "
    >
      <Picker
        data={data}
        onEmojiSelect={onSelect}
        theme="light"
        perLine={window.innerWidth < 640 ? 6 : 8}
      />
    </div>
  );
};

export default EmojiPicker;
