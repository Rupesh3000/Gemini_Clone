import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { setRecentPromt, onSent, prevPromt, setPrevPromt } =
    useContext(Context);

  return (
    <div
      className={`sidebar bg-gray-700 text-gray-100 h-screen p-4 transition-all duration-200  ${
        extended ? "w-80" : "w-16"
      }`}
    >
      <div className="top">
        <i
          className="ri-menu-line text-2xl block cursor-pointer "
          onClick={() => setExtended((prev) => !prev)}
        ></i>

        {extended && (
          <>
            <div className="new-chat flex mt-2 opacity-0">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-2.5 py-1.5 rounded-lg shadow-md transition flex items-center gap-1.5">
                <i className="ri-add-line text-xl"></i>New Chat
              </button>
            </div>

            <div className="recent mt-3 flex flex-col gap-5">
              <p className="recent-title text-lg font-semibold text-gray-300">
                Recent
              </p>
              <div className="recent-entry">
                {prevPromt.map((item, index) => (
                  <ul>
                    <li className="flex gap-2.5 ml-2 bg-gray-800 rounded-lg cursor-pointer py-2 px-3 mb-2 hover:bg-black transition-transform transform hover:scale-105">
                      <i className="ri-chat-ai-line text-lg"></i>
                      <p className="text-gray-200">{item.slice(0, 20)}...</p>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
