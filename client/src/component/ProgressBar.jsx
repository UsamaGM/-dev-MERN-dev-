import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ quizScore, presentationScore }) => {
  quizScore =66
  presentationScore=85
  const percentage = Math.round((quizScore + presentationScore) / 2);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-medium mb-5 mt-5">Daily Activity</h2>
      <CircularProgressbar className="w-42 h-42 text-white mb-2" value={percentage} text={`${percentage}%`} />
    </div>
  );
};

export default ProgressBar;
