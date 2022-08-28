import "./Timer.css";
import { useTimer } from "react-timer-hook";
import React, { useState } from "react";

const Timer = () => {
  // const [time, setTime] = useState(new Date());
  const time = new Date();
  const [random, setRandom] = useState(10);

  time.setSeconds(time.getSeconds() + 60*random)

  const onSetTime = (e) => {
    setRandom(e.target.value);
  };

  return (
    <div className="timer widgets">
      <input
        className="timer-input"
        type="number"
        min="1"
        max="100"
        placeholder="5"
        value={random}
        onChange={onSetTime}
      />
      <MyTimer expiryTimestamp={time} key={random} minute={random}/>
    </div>
  );
};

export default Timer;

function MyTimer({ expiryTimestamp, minute }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pomodoro Timer</h1>
      <div className="time-text" style={{ fontSize: "40px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 60 * minute);
            restart(time);
            pause();
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
