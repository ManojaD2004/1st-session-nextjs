"use client";
import React, { useRef, useState } from "react";

const MESSAGE = "Hello Tiger!";
let timesClicked = 0;
export default function Home() {
  const [timesClicked1, setTimesClicked1] = useState(0);
  const timesClickRef = useRef(0);
  return (
    <main className="py-12 flex items-center flex-col justify-evenly font-[family-name:var(--font-geist-sans)]">
      <div className="bg-slate-800 p-10 space-y-6 text-5xl w-3/4 h-auto">
        <h1>Hello Tiger!</h1>
        <button
          onClick={() => {
            // Do anything right here
            console.log("Inside Function!");
            // console.log(`Hey, you clicked ${timesClicked} times!`);
            //
            // Out side variable, bad way of doing
            // timesClicked = timesClicked + 1;
            //
            // Use ref for value getting reflected everywhere. Not only Re Rendering.
            // timesClickRef.current = timesClickRef.current + 1;
            //
            // Use state for HTML DOM manipulation. Re Rendering.
            // setTimesClicked1(timesClicked1 + 1);
            //
          }}
          className="bg-slate-600 rounded-xl p-6 hover:bg-slate-700"
        >
          Click Me!
        </button>
        <p>Hey, you clicked {timesClicked1} times!</p>
      </div>
    </main>
  );
}
