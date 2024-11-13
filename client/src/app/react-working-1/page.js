"use client";
import React, { useState } from "react";

const MESSAGE = "Hello Tiger!";
let timesClicked = 0;
export default function Home() {
  // const [timesClicked1, setTimesClicked1] = useState(0);
  const [x, setX] = useState(10);
  return (
    <main className="py-12 flex items-center flex-col justify-evenly font-[family-name:var(--font-geist-sans)]">
      <div className="bg-slate-800 p-10 space-y-6 text-5xl w-3/4 h-auto">
        <h1>Hello Tiger!</h1>
        <button
          onClick={() => {
            // Do anything right here
            console.log("Inside Function!");
            setX(x + 10);
            // setTimesClicked1(timesClicked1 + 1);
            //
          }}
          className="bg-slate-600 rounded-xl p-6 hover:bg-slate-700"
        >
          Click Me!
        </button>
        {/* <p>Hey, you clicked {timesClicked1} times!</p> */}
        <p>Hey, you clicked {x} times!</p>
      </div>
    </main>
  );
}
