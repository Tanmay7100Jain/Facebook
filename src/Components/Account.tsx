import React from "react";

const options = [
  { icon: "img26.png", icon2: "img41.png", label: "Settings & Privacy" },
  { icon: "img37.png", icon2: "img41.png", label: "Help & Support" },
  { icon: "img38.png", icon2: "img41.png", label: "Display & Accessibility" },
  { icon: "img39.png", icon2: "img41.png", label: "Give Feedback" },
  { icon: "img40.png", icon2: "img41.png", label: "Log Out" },
];

const Account = () => {
  return (
    <div className="shadow-2xl rounded-2xl p-6 bg-white w-full max-w-md mx-auto">
      <div className="flex items-end space-x-4">
        <img
          className="h-16 w-16 rounded-full object-cover"
          src="account.png"
          alt="Profile of Tanmay Jain"
        />
        <span className="text-2xl font-semibold text-gray-900">Tanmay Jain</span>
      </div>

      <div className="h-px bg-gray-300 my-6"></div>

      <div className="h-12 w-full bg-gray-700 text-white text-lg font-medium flex items-center justify-center rounded-md cursor-pointer hover:bg-gray-800 transition">
        See all profiles
      </div>

      <div className="mt-6 space-y-4">
        {options.map(({ icon, icon2, label }, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition"
          >
            <div className="flex items-center space-x-4">
              <img className="h-10 w-10" src={icon} alt={label} />
              <span className="text-lg text-gray-800">{label}</span>
            </div>
            <img className="h-6 w-6" src={icon2} alt={`${label} arrow`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
