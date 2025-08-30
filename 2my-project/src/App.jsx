import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("bg-white");

  return (
    <div className={`h-screen w-screen flex flex-col justify-center items-center ${bgColor} transition-all duration-500`}>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Background Changer</h1>
      
      <div className="flex gap-4">
        <button
          className="px-6 py-2 rounded-full bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700"
          onClick={() => setBgColor("bg-red-600")}
        >
          Red
        </button>
        <button
          className="px-6 py-2 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700"
          onClick={() => setBgColor("bg-green-600")}
        >
          Green
        </button>
        <button
          className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700"
          onClick={() => setBgColor("bg-blue-600")}
        >
          Blue
        </button>
        <button
          className="px-6 py-2 rounded-full bg-gray-600 text-white font-semibold shadow-lg hover:bg-gray-700"
          onClick={() => setBgColor("bg-white")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
