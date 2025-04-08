import React from 'react'

const Friends = () => {
  const items = [
    { icon: 'account.png', label: ' Home' },
    { icon: 'img2.png', label: 'Friend request' },
    { icon: 'img8.png', label: 'Suggestions' },
    { icon: 'img12.png', label: 'All Friends' },
    { icon: 'img12.png', label: 'Birthday' },
    { icon: 'img12.png', label: 'Custom List' },
  ];
  
  return (
    <div>
        <div className="h-[28rem] overflow-y-auto flex flex-col items-start space-y-4 w-full md:w-72 p-2 pr-4 rounded-md bg-white shadow-sm scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center w-full space-x-3 px-3 py-2 rounded-md hover:bg-gray-100 transition duration-200 cursor-pointer"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="h-9 w-9 rounded-full bg-gray-200 object-cover"
            />
            <span className="text-gray-800 text-base font-medium">{item.label}</span>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Friends