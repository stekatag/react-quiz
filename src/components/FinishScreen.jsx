import { Fragment } from "react";

export default function FinishScreen({
  points,
  maxPoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🎉";
  if (percentage < 100 && percentage >= 80) emoji = "👏";
  if (percentage < 80 && percentage >= 60) emoji = "🙂";
  if (percentage < 60 && percentage >= 40) emoji = "😕";
  if (percentage < 40) emoji = "🤦";

  return (
    <Fragment>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} points! That's <strong>{Math.ceil(percentage)}%</strong>!
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "RESTART" })}
      >
        Restart Quiz
      </button>
    </Fragment>
  );
}
