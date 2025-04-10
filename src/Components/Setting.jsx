import React, { useState } from 'react';

const Setting = () => {
  const [color, setColor] = useState(true);

  return (
    <div className="w-full mt-4 px-2">
      <h1 className="font-bold text-[23px] mb-2">Notification Settings</h1>
      <p className="text-gray-600 text-sm mb-4">
        You can manage how you are notified about friends' updates.
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm">
          <div>
            <h2 className="font-medium text-lg">Push Notifications</h2>
            <p className="text-sm text-gray-500">Enable real-time alerts on your device.</p>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={color}
              onChange={() => setColor(!color)}
            />
            <div className={`w-11 h-6 rounded-full ${color ? 'bg-blue-500' : 'bg-gray-300'} relative transition`}>
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transform transition-transform ${
                  color ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Setting;
