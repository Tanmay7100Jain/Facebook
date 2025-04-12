import React, { useState } from "react";
import Setting from "./Setting";

const Marketplace = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="max-w-md mx-auto space-y-4 p-4">
      <div className="flex items-center px-4 py-2 border rounded-full bg-white focus-within:ring-2 focus-within:ring-blue-500">
        <img className="h-5 w-5 mr-2" src="Seacrh1.svg" alt="Search Icon" />
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search Facebook"
          className="outline-none bg-transparent w-full"
          aria-label="Search Facebook"
        />
      </div>

      <div className="flex justify-between items-center w-full">
        <span className="text-2xl font-bold">Friends</span>
        <img
          src="img26.png"
          alt="setting"
          className="h-6 w-6 cursor-pointer"
          onClick={() => setSelected(selected === "setting" ? "" : "setting")}
        />
      </div>

      {selected === "setting" && <Setting />}
    </div>
  );
};

export default Marketplace;
