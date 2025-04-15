import { useState } from "react";
import Setting from "./Setting";
import React from "react";
import Navbar from "./Navbar";

const Friends = () => {
  const [selected, setSelected] = useState("Home");

  const items = [
    { icon: "img2.png", label: "Home" },
    { icon: "img2.png", label: "Friend request" },
    { icon: "img24.png", label: "Suggestions" },
    { icon: "img22.png", label: "All Friends" },
    { icon: "img24.png", label: "Birthday" },
    { icon: "img23.png", label: "Custom List" },
  ];

  return (
    <>
    <div className="h-[28rem] overflow-y-auto flex flex-col items-start space-y-4 w-full md:w-72 p-2 pr-4 rounded-md bg-white shadow-sm scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        
        <div className="flex justify-between items-center w-full">
          <span className="text-2xl font-bold">Friends</span>
          <img
            src="img26.png"
            alt="setting"
            className="h-6 w-6 cursor-pointer"
            onClick={() => setSelected("setting")}
            />
        </div>
            {selected === "setting" && <Setting />}
        {items.map((item, index) => (
          <Navbar
            key={index}
            icon={item.icon}
            label={item.label}
            onClick={() => setSelected(item.label)}
            selected={selected === item.label}
          />
        ))}
      </div>
    </>
  );
};

export default Friends;
