import React from 'react';

const items = [
  { icon: 'account.png', label: 'Tanmay Jain' },
  { icon: 'img2.png', label: 'Friends' },
  { icon: 'download.png', label: 'Welcome' },
  { icon: 'img8.png', label: 'Memories' },
  { icon: 'img9.png', label: 'Saved' },
  { icon: 'img4.png', label: 'Group' },
  { icon: 'img3.png', label: 'Video' },
  { icon: 'img10.png', label: 'Feeds' },
  { icon: 'img11.png', label: 'Event' },
  { icon: 'img15.png', label: 'Add Manager' },
  { icon: 'img14.png', label: 'Crisis Manager' },
  { icon: 'img12.png', label: 'See more' },
];

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 py-6 ">
      <div className="h-[28rem] overflow-y-auto flex flex-col items-start space-y-4 w-full md:w-72 p-2 pr-4  rounded-md bg-white shadow-sm scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center w-full space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 transition duration-200"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="h-9 w-9 rounded-full bg-gray-200 object-cover"
            />
            <span className="text-gray-800 text-base font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="flex-row w-[468px] ml-8 ">
        <div className="flex items-center px-4 py-3 border border-gray-300 rounded-full bg-white focus-within:ring-2 shadow-md max-w-2xl mx-auto">
          <img
            className="h-10 w-10 rounded-full mr-3 object-cover bg-gray-200"
            src="account.png"
            alt="Profile"
          />
          <input
            type="text"
            placeholder="What's on your mind, Tanmay?"
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
