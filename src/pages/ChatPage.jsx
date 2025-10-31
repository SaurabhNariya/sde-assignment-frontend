// src/pages/ChatPage.jsx
import React, { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello, I'm *Academically Assistant*. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
  if (!input.trim()) return;

  const userText = input.trim().toLowerCase();

  // Add user message to chat
  const newMessage = { from: "user", text: input };
  setMessages([...messages, newMessage]);
  setInput("");

  // Bot Smart Replies
  let botReply = "";

  if (userText.includes("hello") || userText.includes("hi") || userText.includes("hey")) {
    botReply = "Hello! How are you today?";
  } 
  else if (
    userText.includes("who made you") ||
    userText.includes("your creator") ||
    userText.includes("who created you") ||
    userText.includes("developer")
  ) {
    botReply = "I was created by Mr. Saurabh Nariya.";
  }
  else {
    botReply = "That's interesting! Tell me more 😊";
  }

  setTimeout(() => {
    setMessages(prev => [...prev, { from: "bot", text: botReply }]);
  }, 600);
};
;

  const handleKey = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB]">

      {/* HEADER */}
      <div className="bg-white shadow-sm p-4 text-center text-lg font-semibold text-[#1d2b53] border-b">
        Academically Assistant
      </div>

      {/* CHAT BODY */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
              m.from === "user"
                ? "bg-primary text-white ml-auto"
                : "bg-white text-[#333] mr-auto border"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* MESSAGE INPUT BOX */}
      <div className="p-4 bg-white border-t flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type a message..."
          className="flex-1 bg-[#EEF1F6] py-3 px-4 rounded-xl focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-primary text-white px-5 py-3 rounded-xl hover:bg-[#2345D3] transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
