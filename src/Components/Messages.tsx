import React from "react";

const Messages = () => {
  return (
    <>
    <div className="max-w-md mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl">Chats</h2>
        <div className="flex gap-2 cursor-pointer">
          <img src="img42.png" className="w-7 h-7 rounded-full" alt="User 1" />
          <img src="img43.png" className="w-7 h-7 rounded-full" alt="User 2" />
          <img src="img44.png" className="w-7 h-7 rounded-full" alt="User 3" />
        </div>
      </div>
      <div className="flex items-center border rounded-full  px-2 py-1">
        <img src="Seacrh1.svg" alt="Search Icon" className="w-8 h-8 mr-2" />
        <input
          type="text"
          placeholder="Search Messenger"
          className="w-full outline-none"
        />
      </div>
    </div>
    </>
  );
};

export default Messages;
