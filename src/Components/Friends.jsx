import React from 'react';

const FriendItem = ({ icon, label }) => (
  <div
    role="button"
    tabIndex={0}
    className="flex items-center w-full space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300"
  >
    <img
      src={icon}
      alt={label}
      className="h-9 w-9 rounded-full bg-gray-200 object-cover"
    />
    <span className="text-gray-800 text-base font-medium">{label}</span>
  </div>
);

const Friends = () => {
  const items = [
    { icon: 'img2.png', label: 'Home' },
    { icon: 'img2.png', label: 'Friend request' },
    { icon: 'img24.png', label: 'Suggestions' },
    { icon: 'img22.png', label: 'All Friends' },
    { icon: 'img24.png', label: 'Birthday' },
    { icon: 'img23.png', label: 'Custom List' },
  ];

  return (
    <div className="p-2">
      <div className="h-[28rem] overflow-y-auto flex flex-col items-start space-y-4 w-full md:w-72 p-2 pr-4 rounded-md bg-white shadow-sm scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {items.map((item, index) => (
          <FriendItem key={index} {...item} />
        
        ))}
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Friends;
