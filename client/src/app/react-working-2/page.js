"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [timesClicked1, setTimesClicked1] = useState(0);
  const [timesClicked2, setTimesClicked2] = useState(0);
  const colorNumberRef = useRef(0);
  const paraRef = useRef();
  useEffect(() => {
    // use effect do job after rendering the page, in the end it does its job
    console.log("Do job at the end!");
  }, []);
  // useEffect(() => {
  //   // Infinity Loop
  //   setTimesClicked1(timesClicked1 + 1);
  //   if (paraRef.current) {
  //     paraRef.current.style.color = `rgb(255, ${(timesClicked1 * 10) % 255}, ${
  //       (timesClicked1 * 30) % 255
  //     })`;
  //   }
  //   console.log("Change!", timesClicked1);
  // }, [timesClicked1]);
  // useEffect(() => {
  //   if (paraRef.current) {
  //     // Get Any Properties
  //     // console.log(paraRef.current.style);
  //     //
  //     // Interval wrong way of doing
  //     setInterval(() => {
  //       paraRef.current.style.color = `rgb(255, ${
  //         (timesClicked1 * 10) % 255
  //       }, ${(timesClicked1 * 30) % 255})`;
  //       setTimesClicked1(timesClicked1 + 1);
  //       // setTimesClicked1((prevVal) => prevVal + 1);
  //       console.log("Change!", timesClicked1);
  //     }, 500);
  //   }
  // }, []);
  // useEffect(() => {
  //   // Interval correct way of doing
  //   let intervalId;
  //   intervalId = setInterval(() => {
  //     if (paraRef.current) {
  //       paraRef.current.style.color = `rgb(255, ${
  //         (colorNumberRef.current * 10) % 255
  //       }, ${(colorNumberRef.current * 30) % 255})`;
  //       colorNumberRef.current = colorNumberRef.current + 1;
  //       // Bad way. No use of React!
  //       // paraRef.current.innerHTML = `Hey, you clicked ${colorNumberRef.current} times!`;
  //       //
  //       // Correct way of using React, Re Rendering!
  //       setTimesClicked1(colorNumberRef.current);
  //       console.log("Change!", colorNumberRef.current);
  //     }
  //   }, 500);
  //   return () => {
  //     console.log("Destructor!");
  //     if (intervalId) {
  //       clearInterval(intervalId);
  //     }
  //   };
  // }, []);
  useEffect(() => {
      // Interval Perfect way of doing
      let intervalId;
      let colorNumCounter = 0;
      intervalId = setInterval(() => {
        if (paraRef.current) {
          paraRef.current.style.color = `rgb(255, ${
            (colorNumCounter * 10) % 255
          }, ${(colorNumCounter * 30) % 255})`;
          colorNumCounter = colorNumCounter + 1;
          setTimesClicked1(colorNumCounter);
          console.log("Change!", colorNumCounter);
        }
      }, 500);
      return () => {
        console.log("Destructor!");
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
  }, []);
  return (
    <main className="py-12 flex items-center flex-col justify-evenly font-[family-name:var(--font-geist-sans)]">
      <div className="bg-slate-800 p-10 space-y-6 text-5xl w-3/4 h-auto">
        <h1>Hello Tiger!</h1>
        <button
          onClick={() => {
            // Call HTML elements with ref
            // if (paraRef.current) {
            //   // paraRef.current.style.color = `rgb(255, 99, ${timesClicked1 * 20})`;
            //   paraRef.current.style.color = "red";
            //   console.log(paraRef.current.style);
            // }
            //
          }}
          className="bg-slate-600 rounded-xl p-6 hover:bg-slate-700"
        >
          Click Me!
        </button>
        <p ref={paraRef}>Hey, you clicked {timesClicked1} times!</p>
        <p>Hey, this will not render {timesClicked2}</p>
        <p>Hey, this will render but bad way {colorNumberRef.current}</p>
      </div>
    </main>
  );
}
