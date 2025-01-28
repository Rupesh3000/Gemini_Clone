import React, { useState } from "react";

const SideBar = () => {
  const [extended, setExtended] = useState(true);

  return (
    <div
      className={`sidebar bg-gray-700 text-gray-100 h-screen p-4 `}
    >
      <div className="top">
        <i
          className="ri-menu-line text-2xl block cursor-pointer transition-transform transform hover:scale-110"
          onClick={() => setExtended((prev) => !prev)}
        ></i>
        {extended && (
          <>
            <div className="new-chat flex mt-2">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-2.5 py-1.5 rounded-lg shadow-md transition flex items-center gap-1.5">
                <i className="ri-add-line text-xl"></i>New Chat
              </button>
            </div>

            <div className="recent mt-3 flex flex-col gap-5">
              <p className="recent-title text-lg font-semibold text-gray-300">
                Recent
              </p>
              <div className="recent-entry">
                <ul>
                  <li className="flex gap-2.5 ml-2 bg-gray-800 rounded-lg cursor-pointer py-2 px-3 mb-2 hover:bg-black transition-transform transform hover:scale-105">
                    <i className="ri-chat-ai-line text-lg"></i>
                    <p className="text-gray-200">What is react</p>
                  </li>
                  <li className="flex gap-2.5 ml-2 bg-gray-800 rounded-lg cursor-pointer py-2 px-3 hover:bg-black transition-transform transform hover:scale-105">
                    <i className="ri-chat-ai-line text-lg"></i>
                    <p className="text-gray-200">
                      This is what is needed to do
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
