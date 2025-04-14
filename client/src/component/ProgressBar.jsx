import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const ProgressBar = ({ quizScore, presentationScore }) => {
  const percentage = Math.round((quizScore + presentationScore) / 2);

  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <h2>Daily Activity</h2>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
};

export default ProgressBar;
