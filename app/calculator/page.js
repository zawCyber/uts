"use client";

import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        // Gunakan eval dengan hati-hati, hanya untuk demo.
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Calculator</h1>
        <div className="mb-4">
          <input
            type="text"
            value={input}
            className="w-full p-2 mb-2 text-lg border rounded bg-gray-700 text-white focus:outline-none"
            readOnly
          />
          <div className="text-right text-gray-400">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            "7", "8", "9", "C", "4", "5", "6", "/", "1", "2", "3", "*", ".", "0", "=", "-",
          ].map((item) => (
            <button
              key={item}
              className="p-2 text-lg font-semibold bg-gray-700 text-white hover:bg-gray-600 rounded"
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </button>
          ))}
          <button
            className="col-span-4 p-2 text-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 rounded"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
