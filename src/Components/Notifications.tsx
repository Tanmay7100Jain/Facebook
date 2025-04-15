import React from "react";

const NotificationsItem = {
  new: [
    {
      id: 1,
      name: "Manthansinh Parmar",
      message: "You have a new friend suggestion:",
      time: "23h",
      avatar: "account.png",
      unread: true,
    },
  ],
  earlier: [
    {
      id: 2,
      name: "Rahul Mahato",
      message: "You have a new friend suggestion:",
      time: "6d",
      avatar: "account.png",
    },
    {
      id: 3,
      name: "Chhotu Shikari",
      message: "accepted your friend request.",
      time: "1w",
      avatar: "account.png",
    },
    {
      id: 4,
      name: "Taufique Alam",
      message: "accepted your friend request.",
      time: "1w",
      avatar: "account.png",
    },
    {
      id: 5,
      name: "Facebook",
      message: "Welcome to Facebook! Tap here to find people you know and add them as friends.",
      time: "",
      avatar: "account.png",
    },
  ],
};

const Notifications = () => {
  return (
    <div className="w-96 bg-white shadow-lg rounded-lg p-4 overflow-y-auto max-h-[600px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
      </div>

      <div className="flex space-x-4 mb-4">
        <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">All</button>
      </div>

      <div className="mb-2">
        <div className="flex justify-between items-center text-gray-600 text-sm mb-2">
          <span>New</span>
          <button className="text-blue-600 text-sm font-medium">See all</button>
        </div>
        {NotificationsItem.new.map((notif) => (
          <div key={notif.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-100 relative">
            <img src={notif.avatar} alt="" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">
                {notif.message} <span className="font-semibold">{notif.name}</span>.
              </p>
              <span className="text-xs text-blue-500">{notif.time}</span>
            </div>
            {notif.unread && <span className="w-2 h-2 bg-blue-600 rounded-full mt-1"></span>}
          </div>
        ))}
      </div>

      <div>
        <div className="text-gray-600 text-sm mb-2">Earlier</div>
        {NotificationsItem.earlier.map((notif) => (
          <div
            key={notif.id}
            className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-100 relative"
          >
            <img src={notif.avatar} alt="" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-semibold">{notif.name}</span> {notif.message}
              </p>
              {notif.time && <span className="text-xs text-gray-500">{notif.time}</span>}
            </div>
            {notif.id === 2 && (
              <div className="absolute right-3 top-4 text-gray-500 text-xl cursor-pointer">⋯</div>
            )}
          </div>
        ))}
      </div>
      <div>
      </div>
    </div>
  );
};

export default Notifications;
