import React from "react";

const Messages = () => {
  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-2xl">Chats</h2>
          <div className="flex gap-2 cursor-pointer">
            <img
              src="img42.png"
              className="w-7 h-7 rounded-full"
              alt="User 1"
            />
            <img
              src="img43.png"
              className="w-7 h-7 rounded-full"
              alt="User 2"
            />
            <img
              src="img44.png"
              className="w-7 h-7 rounded-full"
              alt="User 3"
            />
          </div>
        </div>
        <div className="flex items-center border rounded-full h-17 w-full px-2 py-1">
          <img src="Seacrh1.svg" alt="Search Icon" className="w-7 h-7 mr-2" />
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Search Messenger"
          />
        </div>
      </div>
      <div className="max-w-md mx-auto p-4">
        <div className="text-2xl bg-blue-100 text-blue-700 rounded-full pl-6 w-28">
          Inbox
        </div>
      </div>
      <div className="max-w-md mx-auto overflow-scroll p-4 ">
        <div className="flex items-start  space-x-4">
          <img className="h-16 w-16" src="account.png" alt="Profile" />
          <div>
            <h2 className="text-2xl font-semibold">Chhotu Shikari</h2>
            <p className="text-gray-600 text-sm">
            You are now connected on messen... 2w
            </p>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Messages;
