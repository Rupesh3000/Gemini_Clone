import React, { useState } from "react";
import SideBar from "./Components/SideBar";
import ChatBar from "./Components/ChatBar";
// import { Menu } from "lucide-react";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <ChatBar />
    </div>
  );
};

export default App;
