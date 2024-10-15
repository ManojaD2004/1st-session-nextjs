"use client";
import React, { useEffect, useRef, useState } from "react";

function MyPComp({ userName = "Man", speed = 500 }) {
  const [timesClicked1, setTimesClicked1] = useState(0);
  const colorNumberRef = useRef(0);
  const paraRef = useRef();
  useEffect(() => {
    console.log("Job started!");
    const intervalId = setInterval(() => {
      console.log("I am not dead, interval no: ", intervalId);
      if (paraRef.current) {
        paraRef.current.style.color = `rgb(255, ${
          (colorNumberRef.current * 10) % 255
        }, ${(colorNumberRef.current * 30) % 255})`;
        colorNumberRef.current = colorNumberRef.current + 1;
        setTimesClicked1(colorNumberRef.current);
        console.log("Change!", colorNumberRef.current);
      }
    }, speed);
    return () => {
      console.log("Destructor!");
      // Destroy your unwanted, running task. Free your memory!
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);
  return (
    <>
      <p ref={paraRef}>
        Hey {userName}, this will render {timesClicked1}
      </p>
    </>
  );
}

export default function Home() {
  const [isMount, setIsMount] = useState(true);

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
        {isMount === true && <MyPComp userName="Stark" speed={500} />}
      </div>
    </main>
  );
}
