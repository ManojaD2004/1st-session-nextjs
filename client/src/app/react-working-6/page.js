"use client";
import React, { useEffect, useRef, useState } from "react";

// A Simply Chat App
// 1. Migrate to Component.
// 2. Use Parent as the global state.
// 3. Get ready for next session and integrating with BackEnd!

export default function Home() {
  const [newMessage, setNewMessage] = useState("");
  const [person, setPerson] = useState("You");
  const [chatMessages, setChatMessages] = useState([
    { msg: "Hi", userName: "Mark" },
    { msg: "Hey", userName: "You" },
  ]);
  return (
    <main className="py-12 flex items-center flex-col justify-evenly font-[family-name:var(--font-geist-sans)]">
      <div className="bg-slate-800 p-10 space-y-6 text-5xl w-[90%] h-auto">
        <h1>Chat App!</h1>
        <div className="flex flex-row justify-between">
          <input
            className="border-0 outline-0 p-2 rounded-lg text-black"
            value={newMessage}
            onChange={(e) => {
              setNewMessage(e.target.value);
            }}
            placeholder="Enter your new message"
          />
          <button
            onClick={() => {
              if (newMessage.trim() === "") {
                window.alert("Please Enter a message!");
                return;
              }
              setChatMessages([
                ...chatMessages,
                { msg: newMessage, userName: person },
              ]);
              setNewMessage("");
            }}
            className="bg-slate-600 rounded-xl p-6 hover:bg-slate-700"
          >
            Send Messages!
          </button>
        </div>
        <input
          className="border-0 outline-0 p-2 rounded-lg text-black"
          value={person}
          onChange={(e) => {
            setPerson(e.target.value);
          }}
          placeholder="Enter your username"
        />

        <h2 className="">Your Chats!</h2>
        <div className="flex flex-col space-y-3">
          {chatMessages.map((ele, index) =>
            ele.userName === "You" ? (
              <div>
                <div
                  className="text-red-300 float-right bg-teal-700 inline-block p-4 rounded-lg"
                  key={index}
                >
                  {ele.msg}{" "}
                </div>
              </div>
            ) : (
              <div>
                <div
                  className="text-red-300 bg-green-600 inline-block p-4 rounded-lg"
                  key={index}
                >
                  {ele.msg}{" "}
                  <span className="text-lg text-slate-50">{ele.userName}</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
