import React from "react";

const Account = () => {
  return (
    <div className="shadow-3xl rounded-xl p-4 bg-white">
      <div className="flex items-center space-x-2">
        <img
          className="h-16 w-16 rounded-full"
          src="account.png"
          alt="Profile of Tanmay Jain"
        />
        <span className="text-3xl text-black font-medium">Tanmay Jain</span>
      </div>

      <hr className="h-1 mt-8 bg-gray-600" />

      <div className="h-10 mt-4 w-80 bg-gray-600 flex justify-center items-center text-2xl text-white cursor-pointer hover:bg-gray-700 transition">
        See all profiles
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Account;
