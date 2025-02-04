import { GoogleGenerativeAI } from "@google/generative-ai";

// Create an async function
const Gemini = async (prompt) => {
  try {
    const genAI = new GoogleGenerativeAI(
      "this is your api key"
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Await the result
    const result = await model.generateContent(prompt);

    return result.response.text(); // Logs the response from the API
  } catch (error) {
    console.error("Error:", error);
  }
};


export default Gemini;
