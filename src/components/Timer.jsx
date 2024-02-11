import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  // Calculate minutes and seconds
  const minutes = Math.floor(secondsRemaining / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsRemaining % 60).toString().padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "TIMER_TICK" });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
  );
}
