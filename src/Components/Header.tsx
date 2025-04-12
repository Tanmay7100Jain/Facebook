import React from "react";

const navItems = [
  { name: "Home", src: "img1.png" },
  { name: "Friends", src: "img2.png" },
  { name: "Marketplace", src: "img4.png" },
  { name: "Friend", src: "img29.png" },
  { name: "Menu", src: "img6.png" },
  { name: "Notifications", src: "img7.png" },
  { name: "Messages", src: "email.png" },
  { name: "Account", src: "account.png" },
];

const Header = ({ selected, setSelected }) => {
  return (
    <>
    <header className="flex items-center justify-between shadow-black shadow-2xs p-4 bg-white ">
      <div className="flex items-center space-x-4">
        <img src="download.png" className="h-12 w-12" alt="Facebook Logo" />
        <div className="flex items-center px-4 py-2 border rounded-full bg-white focus-within:ring-2 focus-within:ring-blue-500">
          <img className="h-5 w-5 mr-2" src="Seacrh1.svg" alt="Search Icon" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="outline-none bg-transparent"
            aria-label="Search Facebook"
          />
        </div>
        <div
          className="flex space-x-3"
          role="group"
          aria-label="Navigation Icons"
        >
          {navItems.map((item, index) => (
            <img
              key={item.name}
              src={item.src}
              alt={item.name}
              onClick={() => setSelected(item.name)}
              className={`h-8 w-8 cursor-pointer transition-all duration-200
                ${index === 0 ? "ml-32 mr-16" : index === 2 ? "ml-16" : index === 3  ? "ml-44 mr-4" : index === 4 ? "ml-4":  index === 5 ? "ml-4": index === 6 ? "ml-4": index === 7 ? "ml-4": "ml-8 mr-4"}
                ${selected === item.name && index <= 2 ? "border-b-4 border-blue-700" : ""}
                ${selected === item.name && index > 2 ? "bg-blue-900 rounded-full p-1" : ""}
                ${index === 3 ? "rounded-full h-8 w-16" : ""}
              `}
            />
          ))}
        </div>
      </div>
    </header>
    <hr className="bg-white text-white"  />
    </>
    
  );
};

export default Header;
 