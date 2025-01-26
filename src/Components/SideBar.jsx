import React, { useState } from "react";

const SideBar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div
      className={`transition-[width] duration-500 ease-in-out ${
        isSidebarVisible ? "w-72" : "w-0"
      } overflow-hidden bg-gray-800 px-2`}
    >
      <div>
        <div className="p-4 border-b border-gray-700 flex justify-end fixed ">
          <button
            onClick={toggleSidebar}
            className="bg-gray-700 p-2 rounded-full shadow-lg text-gray-300 hover:bg-gray-600 "
          >
            menu
          </button>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
      </div>
    </div>
  );
};

export default SideBar;
