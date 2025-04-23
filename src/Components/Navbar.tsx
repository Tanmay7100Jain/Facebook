import React from "react";
const Navbar = ({ icon, label, onClick, selected }) => (
<>
<div
    role="button"
    tabIndex={0}
    onClick={onClick}
    className={`flex items-center w-full space-x-3 px-3 py-2 rounded-md transition duration-200 cursor-pointer 
        ${selected ? "bg-blue-100 " : "hover:bg-gray-100"}`}
  >
    <img
      src={icon}
      alt={label}
      className="h-9 w-9 rounded-full bg-gray-200 object-cover"
    />
    <span className="text-base font-medium">{label}</span>
  </div>
 </>
); 
export default Navbar;
