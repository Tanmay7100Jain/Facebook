import React from "react";

const Menu = () => {
  return (
    <>
      <div className="flex overflow-x-auto scroll-mr-96">
        <div className="p-4 w-80 h-screen  bg-white">
          <h1 className="text-4xl font-bold mb-6">Menu</h1>

          <div className="flex items-center gap-2 w-full border rounded-full px-3 py-2 shadow-sm mb-6">
            <img src="Seacrh1.svg" className="h-6 w-6" alt="Search Icon" />
            <input
              type="text"
              placeholder="Search Menu"
              className="outline-none w-full placeholder:text-base"
              aria-label="Search Menu"
            />
          </div>
          <div className="shadow-lg">
            <div className="text-xl font-semibold mb-4">Social</div>

            <div className="space-y-5">
              <div className="flex items-center t hover:bg-gray-200 gap-3">
                <img
                  src="download.png"
                  className="h-8 w-8"
                  alt="Welcome Icon"
                />
                <span className="text-xl font-semibold">Welcome</span>
              </div>

              <div className="flex items-start hover:bg-gray-200 gap-3">
                <img
                  src="img11.png"
                  className="h-8 w-8 mt-1"
                  alt="Events Icon"
                />
                <div>
                  <div className="text-xl font-semibold">Events</div>
                  <p className="text-sm text-gray-600">
                    Organize or find events and other things to do online and
                    nearby.
                  </p>
                </div>
              </div>

              <div className="flex items-start hover:bg-gray-200 gap-3">
                <img
                  src="img2.png"
                  className="h-8 w-8 mt-1"
                  alt="Friends Icon"
                />
                <div>
                  <div className="text-xl font-semibold">Friends</div>
                  <p className="text-sm text-gray-600">
                    Search for friends or people you may know.
                  </p>
                </div>
              </div>

              <div className="flex items-start hover:bg-gray-200 gap-3">
                <img src="img4.png" className="h-8 w-8 mt-1" alt="Group Icon" />
                <div>
                  <div className="text-xl font-semibold">Groups</div>
                  <p className="text-sm text-gray-600">
                    Connect with people who share your interests.
                  </p>
                </div>
              </div>

              <div className="flex items-start hover:bg-gray-200 gap-3">
                <img
                  src="img10.png"
                  className="h-8 w-8 mt-1"
                  alt="Feeds Icon"
                />
                <div>
                  <div className="text-xl font-semibold">Feeds</div>
                  <p className="text-sm text-gray-600">
                    See relevant posts from people and pages that follow you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 w-80 h-fit mt-44 bg-white shadow-lg">
          <div className="text-xl font-semibold mb-4">Create</div>
          <div className="space-y-4">
            {[
              { icon: "img30.png", label: "Post" },
              { icon: "img31.png", label: "Story" },
              { icon: "img32.png", label: "Reel" },
              { icon: "img33.png", label: "Life Events" },
              { icon: "img34.png", label: "Page" },
              { icon: "img35.png", label: "Ad" },
              { icon: "img36.png", label: "Group" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-md"
              >
                <img src={icon} alt={`${label} Icon`} className="h-8 w-8" />
                <span className="text-lg font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
