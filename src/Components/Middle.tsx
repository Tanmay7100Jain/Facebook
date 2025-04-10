import React from "react";
import Home from "./Home";
import Friends from "./Friends";
import Watch from "./Watch";
import Marketplace from "./Marketplace";

const Middle = ({ selected }) => {
  return (
    <div className="text-4xl w-full flex justify-center">
      <div className="h-full w-full bg-white   ">
        {selected === "Home" && <Home />}
        {selected === "Friends" && <Friends />}
        {selected === "Watch" && <Watch />}
        {selected === "Marketplace" && <Marketplace />}
      </div>
    </div>
  );
};

export default Middle;
