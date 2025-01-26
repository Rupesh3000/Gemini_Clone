import React from "react";

const ChatBar = () => {
  return (
    <div className="w-full ">
      <div className=" w-[70%] mx-auto flex flex-col h-full justify-between py-3">
        <div className="p-4 overflow-y-auto">
          <p>Your chat messages will appear here...</p>
        </div>

        {/* Search Box */}
        <div className="p-4 border-t border-gray-700 bg-gray-800 rounded-xl">
          <div className="flex items-center bg-gray-700 rounded-xl p-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-transparent outline-none text-gray-100 placeholder-gray-400 px-4"
            />
            <button className="ml-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-4 py-2">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
