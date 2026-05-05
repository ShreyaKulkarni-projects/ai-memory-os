"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [memory, setMemory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("memory");
    if (saved) setMemory(saved);
  }, []);

  function saveMemory() {
    localStorage.setItem("memory", memory);
    alert("Memory saved!");
  }

  function generateAnswer() {
    const response = `
Based on what I know:
${memory}

My answer to your question:
To prepare for PM interviews, focus on product sense, metrics, strategy, and technical fluency.
    `;
    setAnswer(response);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-4">AI Memory OS</h1>

        <p className="text-gray-600 mb-6">
          Save your preferences so AI remembers you across sessions.
        </p>

        <label className="font-semibold">Your Memory</label>

        <textarea
          className="w-full border rounded-xl p-4 h-40 mt-2"
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
          placeholder="Example: I prefer concise answers. I am preparing for PM interviews."
        />

        <button
          onClick={saveMemory}
          className="mt-4 bg-black text-white px-6 py-3 rounded-xl"
        >
          Save Memory
        </button>

        <div className="mt-8">
          <label className="font-semibold">Ask AI</label>

          <textarea
            className="w-full border rounded-xl p-4 h-32 mt-2"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask something..."
          />

          <button
            onClick={generateAnswer}
            className="mt-4 bg-black text-white px-6 py-3 rounded-xl"
          >
            Ask with Memory
          </button>
        </div>

        {answer && (
          <div className="mt-8 bg-gray-100 p-4 rounded-xl whitespace-pre-line">
            {answer}
          </div>
        )}
      </div>
    </main>
  );
}