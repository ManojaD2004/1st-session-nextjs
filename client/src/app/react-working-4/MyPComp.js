import React, { useEffect, useRef, useState } from 'react'

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

export default MyPComp