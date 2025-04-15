import React from "react";
import Home from "./Home";
import Friends from "./Friends";
import Watch from "./Watch";
import Marketplace from "./Marketplace";
import Friend from "./Friend";
import Menu from "./Menu";
import Notifications from  "./Notifications"
import Account from "./Account";

const Middle = ({ selected }) => {
  return (
    <>
    <div className="text-4xl w-full flex justify-center">
      <div className="h-full w-full bg-white   ">
        {selected === "Home" && <Home />}
        {selected === "Friends" && <Friends />}
        {selected === "Watch" && <Watch />}
        {selected === "Marketplace" && <Marketplace />}
        {selected === "Friend" && <Friend />}
        {selected === "Menu" && <Menu />}
        {selected === "Notifications" && <Notifications />}
        {selected === "Account" && <Account />}
        
      </div>
    </div>
    </>
  );
};

export default Middle;
