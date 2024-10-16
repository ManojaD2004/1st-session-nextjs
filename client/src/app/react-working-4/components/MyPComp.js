import React, { useEffect, useRef, useState } from 'react'

function MyPComp({
  userName = "Man",
  speed = 500,
  timesClicked1,
  setTimesClicked1,
}) {
  const paraRef = useRef();
  useEffect(() => {
    console.log("Job started!");
    let colorNumCounter = timesClicked1;
    const intervalId = setInterval(() => {
      console.log("I am not dead, interval no: ", intervalId);
      if (paraRef.current) {
        paraRef.current.style.color = `rgb(255, ${
          (colorNumCounter * 10) % 255
        }, ${(colorNumCounter * 30) % 255})`;
        colorNumCounter = colorNumCounter + 1;
        setTimesClicked1(colorNumCounter);
        console.log("Change!", colorNumCounter);
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

export default MyPComp