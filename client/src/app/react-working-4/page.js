"use client";
import React, { useEffect, useRef, useState } from "react";
import MyPComp from "./components/MyPComp";

// Migrate state, and hooks From Child To Parent and add extra functionality!

export default function Home() {
  const [isMount, setIsMount] = useState(true);
  const [timesClicked1, setTimesClicked1] = useState(0);
  return (
    <main className="py-12 flex items-center flex-col justify-evenly font-[family-name:var(--font-geist-sans)]">
      <div className="bg-slate-800 p-10 space-y-6 text-5xl w-3/4 h-auto">
        <h1>Hello Tiger!</h1>
        <button
          onClick={() => {
            setIsMount(!isMount);
          }}
          className="bg-slate-600 rounded-xl p-6 hover:bg-slate-700"
        >
          Click Me!
        </button>
        {isMount === true && (
          <MyPComp
            userName="Stark"
            speed={100}
            timesClicked1={timesClicked1}
            setTimesClicked1={setTimesClicked1}
          />
        )}
      </div>
    </main>
  );
}
