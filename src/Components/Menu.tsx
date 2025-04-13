import React from "react";

const Menu = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Menu</h1>

      <div className="flex items-center gap-2 w-72 border rounded-full px-2 shadow-sm mb-6">
        <img src="Seacrh1.svg" className="h-6 w-6" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search Menu"
          className="outline-none w-full placeholder:text-lg"
          aria-label="Search Menu"
        />
      </div>

      <div className="text-xl font-semibold mb-4">Social</div>

      <div className="flex items-center mb-4 gap-3">
        <img src="download.png" className="h-8 w-8" alt="User Icon" />
        <span className="text-2xl font-black">Welcome</span>
      </div>
      <div className="flex items-center mb-4 gap-3">
        <img src="img11.png" className="h-8 w-8" alt="User Icon" />
        <div className="text-2xl font-black">Events</div>
        <span className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, illum.</span>
      </div>
      <div className="flex items-center mb-4 gap-3">
        <img src="download.png" className="h-8 w-8" alt="User Icon" />
        <span className="text-2xl font-black">Welcome</span>
      </div>
      <div className="flex items-center mb-4 gap-3">
        <img src="download.png" className="h-8 w-8" alt="User Icon" />
        <span className="text-2xl font-black">Welcome</span>
      </div>
      <div className="flex items-center mb-4 gap-3">
        <img src="download.png" className="h-8 w-8" alt="User Icon" />
        <span className="text-2xl font-black">Welcome</span>
      </div>
    
    </div>
  );
};

export default Menu;
