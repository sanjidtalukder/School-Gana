"use client";

import React, { useState, useRef, useEffect } from "react";

const demoMessages = [
  { id: 1, sender: "Teacher", text: "Don't forget to study for tomorrow's test.", time: "10:30 AM" },
  { id: 2, sender: "Student", text: "Okay, thank you sir!", time: "10:32 AM" },
  { id: 3, sender: "Teacher", text: "Bring your homework notebook as well.", time: "10:35 AM" },
  { id: 4, sender: "Student", text: "Sure, I’ll bring it.", time: "10:36 AM" },
  { id: 5, sender: "Teacher", text: "Good. See you tomorrow!", time: "10:40 AM" },
];

const MessagePage = () => {
  const [messages, setMessages] = useState(demoMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const timeNow = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMsg = {
      id: messages.length + 1,
      sender: "Student",
      text: newMessage,
      time: timeNow,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col  bg-gray-50">
      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto bg-white shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b bg-white shadow-sm">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold">
            T
          </div>
          <div>
            <h2 className="font-semibold text-lg">Teacher</h2>
            <p className="text-sm text-green-600">Online</p>
          </div>
        </div>

        {/* Chat Box */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "Student" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] sm:max-w-xs px-4 py-2 rounded-2xl shadow ${
                  msg.sender === "Student"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none"
                }`}
              >
                <p className="text-sm break-words">{msg.text}</p>
                <span className="block text-xs mt-1 opacity-70 text-right">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
        <div className="p-3 border-t bg-white flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="px-4 sm:px-5 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition text-sm sm:text-base"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
