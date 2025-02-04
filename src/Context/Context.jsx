import { createContext, useState } from "react";
import Gemini from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [recentPromt, setRecentPromt] = useState("");
  const [input, setInput] = useState("");
  const [prevPromt, setPrevPromt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resulteData, setResultData] = useState("");

  const delayPara = (index, newWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + newWord);
    }, 75 * index);
  };

  const onSent = async (prompt) => {
    setRecentPromt(input);
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPromt(input);
    setPrevPromt((prev) => [...prev, input]);
    console.log("this ");
    const response = await Gemini(input);
    console.log(response);
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i == 0 || i % 2 !== 2) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArrya = newResponse2.split(" ");

    for (let i = 0; i < newResponseArrya.length; i++) {
      const newWord = newResponseArrya[i];
      delayPara(i, newWord + " ");
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
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
    setResultData,
    onSent,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
