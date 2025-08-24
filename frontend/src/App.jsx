import React, { useState, useRef, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // {role: 'user'|'assistant', content: string}
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend() {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await response.json();
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: data.answer || "No answer." },
      ]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: "Error fetching answer." },
      ]);
      console.error(err);
    }
    setLoading(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md min-h-[500px] bg-gray-800 rounded-xl shadow-2xl flex flex-col p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-white tracking-wide">
          Legal Assistant
        </h2>
        <div className="flex-1 overflow-y-auto mb-4 p-2 bg-gray-900 rounded-lg min-h-[300px] max-h-[350px] flex flex-col gap-3">
          {messages.length === 0 && (
            <div className="text-gray-400 text-center">
              Start the conversation...
            </div>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] px-4 py-2 rounded-lg shadow-md whitespace-pre-wrap ${
                msg.role === "user"
                  ? "self-end bg-blue-600 text-white"
                  : "self-start bg-gray-700 text-white"
              }`}
            >
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="self-start bg-gray-700 text-white rounded-lg px-4 py-2 max-w-[80%] opacity-70 italic">
              Thinking...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        <div className="flex gap-2 items-end bg-gray-900 p-3 rounded-lg shadow-inner">
          <textarea
            rows={2}
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 p-3 text-base rounded-lg border-none resize-none bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 min-h-[48px] max-h-[80px] shadow"
            spellCheck={false}
            disabled={loading}
            style={{ height: "48px" }}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className={`w-28 h-12 rounded-lg font-bold text-base transition-colors ${
              loading || !input.trim()
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
            } text-white shadow`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;