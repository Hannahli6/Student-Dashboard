import "./Timer.css";
import { useTimer } from "react-timer-hook";

const Timer = () => {
  
  const time = new Date();
  time.setSeconds(time.getSeconds() + (60*10)); // 10 minutes timer
  return (
    <div className="timer widgets">
      <MyTimer expiryTimestamp={time} />
    </div>
  );
};

export default Timer;

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Timer</h1>
      <div style={{ fontSize: "20px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + (60*5));
          restart(time);
          pause();
        }}
      >
        Restart
      </button>
    </div>
  );
}