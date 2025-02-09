import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../Context/Context";

const ChatBar = () => {
  const {
    recentPromt,
    setRecentPromt,
    input,
    setInput,
    prevPromt,
    setPrevPromt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resulteData,
    onSent,
  } = useContext(Context);
  const childDivRef = useRef(null);

  useEffect(() => {
    if (childDivRef.current) {
      childDivRef.current.scrollTop = childDivRef.current.scrollHeight;
    }
  }, [resulteData]);

  return (
    <div className="main flex flex-grow px-10 py-4 flex-col relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center  border-yellow-400 ">
        <p className="text-3xl font-semibold">Gemini</p>
        <i className="ri-gemini-line px-2.5 py-2.5 bg-gray-800 rounded-full text-center"></i>
      </nav>

      {/* Chat  */}
      <div className="chatContent h-full ">
        {!showResult ? (
          <div className="h-full flex flex-col gap-8 mt-3">
            {/* Big Heading */}
            <h1 className="text-5xl font-bold text-center mb-8">
              How can I help you today?
            </h1>

            {/* Cards Grid */}
            <div className="flex gap-6 text-white py-3  justify-center">
              {/* Card 1 */}
              <div className="p-6 bg-zinc-700 rounded-2xl shadow max-w-80 min-h-fit text-white">
                <i className="ri-lightbulb-line text-3xl mb-3"></i>
                <h3 className="text-xl font-semibold">Get Ideas</h3>
                <p className="text-xm">
                  Brainstorm creative ideas quickly. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt voluptatibus laudantium
                  consectetur adipisicing elit. Nesciunt voluptatibus laudantium
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-zinc-700 rounded-2xl cursor-pointer max-w-80 min-h-fit">
                <i className="ri-code-line text-3xl mb-3"></i>
                <h3 className="text-xl font-semibold">Write Code</h3>
                <p className="text-xm">
                  Generate and debug code easily. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt voluptatibus laudantium
                  consectetur adipisicing elit. Nesciunt voluptatibus laudantium
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-zinc-700 rounded-2xl cursor-pointer max-w-80 min-h-fit">
                <i className="ri-translate-2 text-3xl mb-3"></i>
                <h3 className="text-xl font-semibold">Translate</h3>
                <p className="text-xm">
                  Convert text into different languages. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Nesciunt voluptatibus
                  laudantium consectetur adipisicing elit. Nesciunt voluptatibus
                  laudantium
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[500px] overflow-y-auto" ref={childDivRef}>
            <div className="max-w-4xl mx-auto overflow-y-auto ">
              <div className="flex gap-3 text-[17px] justify-end">
                <p>{recentPromt}</p>

                <i className="ri-user-line px-2 py-1 rounded-full bg-zinc-600 h-fit"></i>
              </div>

              <div className="result-data flex gap-3 text-[17px] mt-6">
                {loading ? (
                  <>
                    <i className="ri-openai-fill px-2 py-1 rounded-full bg-zinc-600 h-fit"></i>
                    <div className="flex flex-col gap-2.5 w-full">
                      <hr className="h-2 bg-gray-300 animate-pulse origin-left rounded-full" />
                      <hr className="h-2 bg-gray-300 animate-pulse origin-left rounded-full delay-75" />
                      <hr className="h-2 bg-gray-300 animate-pulse origin-left rounded-full delay-150" />
                    </div>
                  </>
                ) : (
                  <>
                    <i className="ri-openai-fill px-2 py-1 rounded-full bg-zinc-600 h-fit"></i>
                    {/* <p dangerouslySetInnerHTML={{ __html: resulteData }}></p> */}
                    <p>{resulteData}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-3 left-0 w-full flex justify-center">
        <div className="p-4 border-t border-gray-700 bg-gray-800 rounded-xl w-full  max-w-6xl">
          <div className="flex items-center bg-gray-700 rounded-xl p-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-transparent outline-none text-gray-100 placeholder-gray-400 px-4"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button
              className="ml-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-4 py-2"
              onClick={() => onSent()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
