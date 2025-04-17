import React, { useState } from "react";
import Setting from "./Setting";
import Navbar from "./Navbar";
const items = [
  { icon: "img28.png", label: "Your Feed" },
  { icon: "img27.png", label: "Discover" },
  { icon: "img4.png", label: "Your Groups" },
];
const SearchBox = () => (
  <div className="flex items-center px-4 py-2 border border-black rounded-full bg-white focus-within:ring-2 focus-within:ring-blue-500 transition-shadow duration-200 w-full">
    <img className="h-5 w-5 mr-2" src="Seacrh1.svg" alt="Search Icon" />
    <input
      type="text"
      name="search"
      autoComplete="off"
      placeholder="Search Group"
      className="outline-none bg-transparent w-full text-sm placeholder-gray-500"
      aria-label="Search Group"
    />
  </div>
);

const MarketPlace = () => {
  const [selected, setSelected] = useState("");

  const HandleSetting = () => {
    setSelected((prev) => (prev === "setting" ? "" : "setting"));
  };
  

  return (
    <>
    <div className="h-[28rem] overflow-y-auto flex flex-col items-start space-y-4 w-full md:w-72 p-4 rounded-md bg-white shadow-sm scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      
      <div className="flex justify-between items-center w-full">
        <span className="text-2xl font-bold">Group</span>
        <img
          src="img26.png"
          alt="Settings"
          className="h-6 w-6 cursor-pointer"
          aria-expanded={selected === "setting"}
          onClick={HandleSetting}
        />
      </div>

      {selected === "setting" && <Setting />}
      <SearchBox />
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

export default MarketPlace;
