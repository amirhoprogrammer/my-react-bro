import React, { useState, useEffect } from "react";
import "./project1.css";
function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const merdiem = hours > 12 ? "P.M" : "A.M";
    hours = hours % 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(merdiem)}`;
  }
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div className="body">
      <div className="clock_container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </div>
  );
}
export default DigitalClock;
